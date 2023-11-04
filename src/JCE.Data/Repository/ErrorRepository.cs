using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Data.Repository;

public class ErrorRepository : IErrorRepository
{
    private readonly IDataContext _context;

    public ErrorRepository(IDataContext context)
    {
        _context = context;
    }
    
    public async Task<Error> GetLastId()
    {
        using var connection = _context.CreateConnection();
        var sql = $"SELECT COALESCE(MAX(errorid), 0) + 1 AS errorid,userid,username,message,description,status FROM error";

        var errors = await connection.QueryAsync<Error>(sql);

        return errors.First();
    }

}