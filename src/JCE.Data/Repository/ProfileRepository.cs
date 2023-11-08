using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Data.Repository;
public class ProfileRepository : IProfileRepository
{
    private readonly IDataContext _context;

    public ProfileRepository(IDataContext context)
    {
        _context = context;
    }

    public async Task<User> GetUserProfile(int userid)
    {
        using var connection = _context.CreateConnection();

        var sql = $"SELECT * FROM user WHERE userid = @userid";

        return await connection.QueryFirstAsync<User>(sql, new {userid});
    }

    public async Task<bool> UpdatePhoneAndEmail(User update)
    {
        using var connection = _context.CreateConnection();

        var sql = $"UPDATE user SET phone = @phone, email = @email WHERE userid = @userid";

        var affectedRows = await connection.ExecuteAsync(sql, new {userid = update.UserId, phone = update.Phone, email = update.Email});

        return affectedRows > 0;
    }
}
