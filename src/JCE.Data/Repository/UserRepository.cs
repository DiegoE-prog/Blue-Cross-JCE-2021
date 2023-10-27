using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Data.Repository;

public class UserRepository : IUserRepository
{
    private readonly IDataContext _context;

    public UserRepository(IDataContext context)
    {
        _context = context;
    }

    public async Task<List<User>> GetUsersAsync()
    {
        using var connection = _context.CreateConnection();
        var sql = $"SELECT * FROM user";

        var users = await connection.QueryAsync<User>(sql);

        return users.ToList();
    }
}