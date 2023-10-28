using JCE.Business.Dtos.AuthDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Business.Services;

public class AuthService : IAuthService
{
    private readonly IAuthRepository _userRepository;

    public AuthService(IAuthRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<GetAuthDto> Login(AuthDto authDto)
    {
        var user = await _userRepository.Login(new User { Username = authDto.Username });

        if(user != null)
        {
            return new GetAuthDto { Username = user.Username, Role = user.Role };
        }

        throw new Exception(message: "User not in the database");
    }
}
