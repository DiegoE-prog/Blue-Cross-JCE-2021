using System.Reflection;
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
        var user = await _profileRepository.GetUserProfileById(userid) ?? throw new Exception(message: "The User with Id '" + userid + "' does not exist");

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

    public async Task<SuccesfulCreatedProfileDto> CreateUserProfile(CreateProfileDto user)
    {
        //Validate that every field has a value
        foreach(PropertyInfo field in user.GetType().GetProperties()){
            
            if(field.GetValue(user) == null)
                throw new Exception(message: field.Name + " is a mandatory field");
        }
        
        //Establish the values of password and expireDate before calling the repository

        //Set Initial Password
        Random rnd = new Random();
        int randomCharIndex = rnd.Next(0,5);
        var randomChar = "";
        switch(randomCharIndex){
            case 0: randomChar = "@";
            break;

            case 1: randomChar = "#";
            break;

            case 2: randomChar = "$";
            break;

            case 3: randomChar = "%";
            break;

            case 4: randomChar = "&";
            break;

            default: randomChar = "@";
            break;
        }
        string autoPassword = "Temp" + user.Name[0] + user.LastName[0] + randomChar + user.Phone.Substring(6);

        //Set Expiration date. The current set value is a year after the date the user is created
        DateTime autoExpireDate = DateTime.Now.AddYears(1);

        var success = await _profileRepository.CreateUserProfile(new User 
        {
            Username = user.Username, 
            Password = autoPassword, 
            Role = user.Role, 
            ExpireDate = autoExpireDate, 
            Name = user.Name, 
            LastName = user.LastName, 
            Dob = user.Dob, 
            Phone = user.Phone, 
            Email = user.Email
        });

        //Validate if the user was created successfully
        if(success){
            return new SuccesfulCreatedProfileDto{
                Username = user.Username,
                Password = autoPassword,
                ExpireDate = autoExpireDate
            };
        }else{
            throw new Exception(message: "Failed to create user");
        }
    }

    public async Task<bool> UpdatePhoneAndEmail(UpdatePhoneAndEmailDto update)
    {
        //Validate the userid
        if(update.UserId == 0)
            throw new Exception(message: "UserId is missing");

        var success = await _profileRepository.UpdatePhoneAndEmail(new User { UserId = update.UserId, Phone = update.Phone, Email = update.Email});

        if(!success)
            throw new Exception(message: "Failed to update the phone and email of the user");
        
        return success;
    }

    public async Task<bool> DeleteUserProfile(int userid)
    {
        var success = await _profileRepository.DeleteUserProfile(userid);

        if(!success)
            throw new Exception(message: "Failed to delete the user");

        return success;
    }
}
