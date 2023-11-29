using JCE.Business.Dtos.AuthDtos;
using JCE.Business.Dtos.ErrorDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository;
using JCE.Data.Repository.Interfaces;
using Microsoft.VisualBasic;

namespace JCE.Business.Services;

public class ResetPasswordService : IResetPasswordService
{
    private readonly IResetPasswordRepository _resetPasswordRepository;

    public ResetPasswordService(IResetPasswordRepository resetPasswordRepository)
    {
        _resetPasswordRepository = resetPasswordRepository;
    }

    public async Task<int> ValidateIfHaveQuestion(int userId)
    {
        var rows = await _resetPasswordRepository.ValidateIfHaveQuestion(userId);
        return rows;
    }
}
