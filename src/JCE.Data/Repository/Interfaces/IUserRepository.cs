using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;

public interface IUserRepository
{
    Task<List<User>> GetUsersAsync();
}
