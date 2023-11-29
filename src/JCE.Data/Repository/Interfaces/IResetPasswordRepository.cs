using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;

public interface IResetPasswordRepository
{
    Task<int> ValidateIfHaveQuestion(int userId);
}
