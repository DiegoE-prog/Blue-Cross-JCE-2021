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

    public async Task<List<Payor>> GetPayorsByErrorId(string errorId)
    {
        using var connection = _context.CreateConnection();
        var sql = $"SELECT payor.payorid, payor.payor_id_table FROM payor " +
                  $"INNER JOIN payorlist ON payor.payorid = payorlist.payorid " +
                  $"INNER JOIN error ON error.errorid = payorlist.errorid " +
                  $"WHERE error.errorid = @errorid";

        var payors = await connection.QueryAsync<Payor>(sql, new {errorid = errorId});

        return payors.ToList();
    }
}