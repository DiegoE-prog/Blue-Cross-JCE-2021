using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Data.Repository;

public class PayorRepository : IPayorRepository
{
    private readonly IDataContext _context;

    public PayorRepository(IDataContext context)
    {
        _context = context;
    }

    public async Task<List<Payor>> GetList()
    {
        using var connection = _context.CreateConnection();
        var sql = $"Select * From payor where status = 1";

        var payors = await connection.QueryAsync<Payor>(sql);

        return payors.ToList();
    }
}