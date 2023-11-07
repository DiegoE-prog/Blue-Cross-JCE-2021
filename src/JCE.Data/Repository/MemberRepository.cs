using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Data.Repository;

public class MemberRepository : IMemberRepository
{
    private readonly IDataContext _context;

    public MemberRepository(IDataContext context)
    {
        _context = context;
    }

    public async Task<List<Member>> GetList()
    {
        using var connection = _context.CreateConnection();
        var sql = $"Select * From member where status = 1";

        var members = await connection.QueryAsync<Member>(sql);

        return members.ToList();
    }
}