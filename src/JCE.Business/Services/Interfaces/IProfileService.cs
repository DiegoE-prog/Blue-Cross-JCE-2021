using JCE.Business.Dtos.ProfileDtos;

namespace JCE.Business.Services.Interfaces;
public interface IProfileService
{
    Task<GetProfileDto> GetUserProfileById(int userid);
    Task<List<GetProfileDto>> GetUserProfilesByFilter(GetProfileDto filter);
    Task<bool> UpdatePhoneAndEmail(UpdatePhoneAndEmailDto update);
    Task<bool> DeleteUserProfile(int userid);
}
