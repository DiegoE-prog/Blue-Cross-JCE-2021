using JCE.Business.Dtos.ProfileDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Business.Services;
public class ProfileService : IProfileService
{
    private readonly IProfileRepository _profileRepository;

    public ProfileService(IProfileRepository profileRepository)
    {
        _profileRepository = profileRepository;
    }
    public async Task<GetProfileDto> GetUserProfile(int userid)
    {
        var user = await _profileRepository.GetUserProfile(userid);

        return new GetProfileDto
        {
            Username = user.Username,
            Name = user.Name,
            LastName = user.LastName,
            Dob = user.Dob,
            Phone = user.Phone,
            Email = user.Email
        };

    }

    public async Task<bool> UpdatePhoneAndEmail(UpdatePhoneAndEmailDto update)
    {
        var success = await _profileRepository.UpdatePhoneAndEmail(new User { UserId = update.UserId, Phone = update.Phone, Email = update.Email});

        return success;
    }
}
