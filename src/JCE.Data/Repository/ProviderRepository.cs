using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;
using System.Data;

namespace JCE.Data.Repository;

public class ProviderRepository : IProviderRepository
{
    private readonly IDataContext _context;

    public ProviderRepository(IDataContext context)
    {
        _context = context;
    }

    public IDbConnection Database => throw new NotImplementedException();

    public object database => throw new NotImplementedException();

    public async Task<List<Provider>> GetList()
    {
        using var connection = _context.CreateConnection();
        var sql = $"Select * From provider where status = 1";

        var providers = await connection.QueryAsync<Provider>(sql);

        return providers.ToList();
    }
}