using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;
public interface IProfileRepository
{
    Task<User> GetUserProfile(int userid);
}
