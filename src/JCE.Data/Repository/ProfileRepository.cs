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
}
