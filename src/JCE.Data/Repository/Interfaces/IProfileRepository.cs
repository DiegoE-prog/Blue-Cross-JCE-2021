using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;
public interface IProfileRepository
{
    Task<User> GetUserProfileById(int userid);
    Task<User> GetUserProfileByUsername(string username);
    Task<List<User>> GetUserProfilesByFilter(User filter);
    Task<bool> CreateUserProfile(User user);
    Task<bool> ResetUserPassword(int userid, string password);
    Task<bool> UpdatePhoneAndEmail(User update);
    Task<bool> DeleteUserProfile(int userid);
}
