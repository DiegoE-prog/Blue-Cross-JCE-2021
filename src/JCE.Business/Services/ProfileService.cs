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

    public async Task<GetProfileDto> GetUserProfileById(int userid)
    {
        var user = await _profileRepository.GetUserProfileById(userid);

        return new GetProfileDto
        {
            UserId = user.UserId,
            Username = user.Username,
            Name = user.Name,
            LastName = user.LastName,
            Dob = user.Dob,
            Phone = user.Phone,
            Email = user.Email
        };

    }

    public async Task<List<GetProfileDto>> GetUserProfilesByFilter(GetProfileDto filter)
    {
        var users = await _profileRepository.GetUserProfilesByFilter(new User{
            Username = filter.Username, 
            Name = filter.Name, 
            LastName = filter.LastName, 
            Dob = filter.Dob, 
            Phone = filter.Phone, 
            Email = filter.Email});


        List<GetProfileDto> userDtos = users.Select(user => new GetProfileDto
        {
            UserId = user.UserId,
            Username = user.Username,
            Name = user.Name,
            LastName = user.LastName,
            Dob = user.Dob,
            Phone = user.Phone,
            Email = user.Email
        }).ToList();

        return userDtos;

    }

    public async Task<bool> CreateUserProfile(CreateProfileDto user)
    {
        var success = await _profileRepository.CreateUserProfile(new User 
        {
            Username = user.Username, 
            Password = user.Password, 
            Role = user.Role, 
            ExpireDate = user.ExpireDate, 
            Name = user.Name, 
            LastName = user.LastName, 
            Dob = user.Dob, 
            Phone = user.Phone, 
            Email = user.Email
        });

        return success;
    }

    public async Task<bool> UpdatePhoneAndEmail(UpdatePhoneAndEmailDto update)
    {
        var success = await _profileRepository.UpdatePhoneAndEmail(new User { UserId = update.UserId, Phone = update.Phone, Email = update.Email});

        return success;
    }

    public async Task<bool> DeleteUserProfile(int userid)
    {
        var success = await _profileRepository.DeleteUserProfile(userid);

        return success;
    }
}
