using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;

public interface IAuthRepository
{
    Task<User> Login(User user);
    Task<bool> BlockUser(string username);
}
