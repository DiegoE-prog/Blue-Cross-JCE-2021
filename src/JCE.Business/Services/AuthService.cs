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
        var user = await _userRepository.Login(new User { Username = authDto.Username }) ?? throw new Exception(message: "UserName should be valid");
        if (user.UserStatus == "0") throw new Exception(message: "User is bloqued please contact system admin (01800-233-45-63)");
        if (user.ExpireDate <= DateTimeOffset.UtcNow) throw new Exception(message: "User has expired, please contact system admin (01800-233-45-63)");
        if (!PasswordIsValid(user, authDto.Password)) throw new Exception(message: "Password is incorrect");
        

        return new GetAuthDto
            {
                UserId = user.UserId,
                Username = user.Username,
                Role = user.Role,
            };  
    }

    public Task<bool> BlockUser(string username)
    {
        var isSuccessful = _userRepository.BlockUser(username);

        return isSuccessful;
    }

    private static bool PasswordIsValid(User user, string password)
    {
        return user.Password == password;
    }
}