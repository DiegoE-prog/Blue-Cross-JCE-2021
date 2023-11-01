using JCE.Business.Dtos.AuthDtos;

namespace JCE.Business.Services.Interfaces;

public interface IAuthService
{
    Task<GetAuthDto> Login(AuthDto authDto);
    Task<bool> BlockUser(string username);
}