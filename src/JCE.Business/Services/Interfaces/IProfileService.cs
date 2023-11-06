using JCE.Business.Dtos.ProfileDtos;

namespace JCE.Business.Services.Interfaces;
public interface IProfileService
{
    Task<GetProfileDto> getUserProfile(int userid);
    Task<bool> updatePhoneAndEmail(UpdatePhoneAndEmailDto update);
}
