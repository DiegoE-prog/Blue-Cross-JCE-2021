using JCE.Business.Dtos.ProfileDtos;

namespace JCE.Business.Services.Interfaces;
public interface IProfileService
{
    Task<GetProfileDto> GetUserProfile(int userid);
    Task<bool> UpdatePhoneAndEmail(UpdatePhoneAndEmailDto update);
}
