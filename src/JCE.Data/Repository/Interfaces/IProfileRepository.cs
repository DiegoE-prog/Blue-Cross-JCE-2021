using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;
public interface IProfileRepository
{
    Task<User> GetUserProfileById(int userid);
    Task<List<User>> GetUserProfilesByFilter(User filter);
    Task<bool> UpdatePhoneAndEmail(User update);
    Task<bool> DeleteUserProfile(int userid);
}
