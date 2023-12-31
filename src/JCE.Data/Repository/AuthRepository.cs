﻿using Dapper;
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
        var sql = $"SELECT * FROM user WHERE isDeleted = 0";

        var users = await connection.QueryAsync<User>(sql);

        return users.FirstOrDefault(e => e.Username.ToLower() == user.Username.ToLower());
    }

    public async Task<bool> BlockUser(string username)
    {
        using var connection = _context.CreateConnection();

        var userToUpdate = await GetUserAsync(username);

        var sql = $"UPDATE user SET userstatus = 0 WHERE userid = @userid AND isDeleted = 0";

        var affectedRows = await connection.ExecuteAsync(sql, new {userid = userToUpdate.UserId});

        return affectedRows > 0;
    }

    private async Task<User> GetUserAsync(string username)
    {
        using var connection = _context.CreateConnection();
        
        var sql = $"SELECT * FROM user WHERE username = @username AND isDeleted = 0";

        return await connection.QueryFirstAsync<User>(sql, new {username});
    }



}