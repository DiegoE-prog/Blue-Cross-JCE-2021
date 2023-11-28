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

    #nullable enable
    public async Task<User?> GetUserProfileById(int userid)
    {
        using var connection = _context.CreateConnection();

        var sql = $"SELECT * FROM user WHERE userid = @userid AND isdeleted = 0";

        return await connection.QueryFirstOrDefaultAsync<User>(sql, new {userid});
    }
    #nullable disable

    public async Task<User> GetUserProfileByUsername(string username)
    {
        using var connection = _context.CreateConnection();

        var sql = $"SELECT * FROM user WHERE username = @username AND isDeleted = 0";

        return await connection.QueryFirstOrDefaultAsync<User>(sql, new {username});
    }

    public async Task<List<User>> GetUserProfilesByFilter(User filter)
    {
        using var connection = _context.CreateConnection();

        var sql = $@"SELECT * FROM user WHERE
        isdeleted = 0 AND
        (@username IS NULL OR username = @username) AND
        (@name IS NULL OR name = @name) AND
        (@lastname IS NULL OR lastname = @lastname) AND
        (@dob IS NULL OR dob = @dob) AND
        (@phone IS NULL OR phone = @phone) AND
        (@email IS NULL OR email = @email)
        ";

        var users = await connection.QueryAsync<User>(sql, new {
            username = filter.Username, 
            name = filter.Name, 
            lastname = filter.LastName, 
            dob = filter.Dob, 
            phone = filter.Phone, 
            email = filter.Email});

        return users.ToList();
    }

    public async Task<bool> CreateUserProfile(User user)
    {
        using var connection = _context.CreateConnection();

        var sql = $@"INSERT INTO user (username, password, role, expiredate, name, lastname, dob, phone, email) VALUES
        (@username, @password, @role, @expiredate, @name, @lastname, @dob, @phone, @email)
        ";

        var affectedRows = await connection.ExecuteAsync(sql, new {
            username = user.Username, password = user.Password, role = user.Role, 
            expiredate = user.ExpireDate,  name = user.Name,  lastname = user.LastName,  
            dob = user.Dob, phone = user.Phone, email = user.Email});

        return affectedRows > 0;
    }

    public async Task<bool> ResetUserPassword(int userid, string password)
    {
        using var connection = _context.CreateConnection();

        var sql = $"UPDATE user SET password = @password WHERE userid = @userid AND isdeleted = 0";

        var affectedRows = await connection.ExecuteAsync(sql, new {userid, password});

        return affectedRows > 0;
    }

    public async Task<bool> UpdatePhoneAndEmail(User update)
    {
        using var connection = _context.CreateConnection();

        var sql = $"UPDATE user SET phone = @phone, email = @email WHERE userid = @userid AND isdeleted = 0";

        var affectedRows = await connection.ExecuteAsync(sql, new {userid = update.UserId, phone = update.Phone, email = update.Email});

        return affectedRows > 0;
    }

    public async Task<bool> DeleteUserProfile(int userid)
    {
        using var connection = _context.CreateConnection();

        var sql = $"UPDATE user SET isdeleted = 1 WHERE userid = @userid";

        var affectedRows = await connection.ExecuteAsync(sql, new {userid});

        return affectedRows > 0;
    }
}
