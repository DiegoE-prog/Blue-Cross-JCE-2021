using JCE.Business.Dtos.ErrorDtos;

namespace JCE.Business.Services.Interfaces;

public interface IResetPasswordService
{
    Task<int> ValidateIfHaveQuestion(int userId);
}
