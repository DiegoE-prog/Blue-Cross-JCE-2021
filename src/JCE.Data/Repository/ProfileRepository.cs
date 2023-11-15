﻿using Dapper;
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

    public async Task<User> GetUserProfileById(int userid)
    {
        using var connection = _context.CreateConnection();

        var sql = $"SELECT * FROM user WHERE userid = @userid AND isdeleted = 0";

        return await connection.QueryFirstAsync<User>(sql, new {userid});
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
