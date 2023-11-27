using JCE.Business.Dtos.ProfileDtos;

namespace JCE.Business.Services.Interfaces;
public interface IProfileService
{
    Task<GetProfileDto> GetUserProfileById(int userid);
    Task<GetProfileDto> GetUserProfileByUsername(string username);
    Task<List<GetProfileDto>> GetUserProfilesByFilter(GetProfileDto filter);
    Task<SuccesfulCreatedProfileDto> CreateUserProfile(CreateProfileDto user);
    Task<SuccesfullyResetPasswordDto> ResetUserPassword(int userid);
    Task<bool> UpdatePhoneAndEmail(UpdatePhoneAndEmailDto update);
    Task<bool> DeleteUserProfile(int userid);
}
