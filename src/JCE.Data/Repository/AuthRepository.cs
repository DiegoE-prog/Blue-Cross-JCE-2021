using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Data.Repository;

public class AuthRepository : IAuthRepository
{
    private readonly IDataContext _context;

    public AuthRepository(IDataContext context)
    {
        _context = context;
    }

    public async Task<User> Login(User user)
    {
        using var connection = _context.CreateConnection();
        var sql = $"SELECT * FROM user";

        var users = await connection.QueryAsync<User>(sql);

        return users.FirstOrDefault(e => e.Username == user.Username);
    }
}