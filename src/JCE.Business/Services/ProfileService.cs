using System.Reflection;
using System.Text.RegularExpressions;
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
            Role = user.Role,
            Username = user.Username,
            Name = user.Name,
            LastName = user.LastName,
            Dob = user.Dob,
            Phone = user.Phone,
            Email = user.Email
        };

    }

    public async Task<GetProfileDto> GetUserProfileByUsername(string username)
    {
        var user = await _profileRepository.GetUserProfileByUsername(username) ?? throw new Exception(message: "The User with Username '" + username + "' was not found");

        return new GetProfileDto
        {
            UserId = user.UserId,
            Role = user.Role,
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

    private string GenerateAutoPassword(string Name, string LastName, string Phone)
    {
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
        
        string autoPassword = "Temp" + Name[0] + LastName[0] + randomChar + Phone.Substring(6);

        return autoPassword;
    }

    public async Task<SuccesfulCreatedProfileDto> CreateUserProfile(CreateProfileDto user)
    {
        //Validate that every field has a value
        foreach(PropertyInfo field in user.GetType().GetProperties()){
            if(field.GetValue(user) == null)
                throw new Exception(message: field.Name + " is a mandatory field");
        }

        //Set Initial Password
        string autoPassword = GenerateAutoPassword(user.Name, user.LastName, user.Phone);

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

    public async Task<SuccesfullyResetPasswordDto> ResetUserPassword(int userid)
    {
        //Get the user information first and valid if it exists
        var user = await _profileRepository.GetUserProfileById(userid) ?? throw new Exception(message: "The User with Id '" + userid + "' does not exist");

        //Generate the auto password
        string resetPassword = GenerateAutoPassword(user.Name, user.LastName, user.Phone);

        var success = await _profileRepository.ResetUserPassword(userid, resetPassword);

        if(!success){
            throw new Exception(message: "Failed to reset the password of the user");
        }else{
            
            return new SuccesfullyResetPasswordDto{
                Username = user.Username,
                Password = resetPassword
            };
        }
            
    }

    public async Task<bool> UpdatePhoneAndEmail(UpdatePhoneAndEmailDto update)
    {
        //Validate the userid
        if(update.UserId == 0)
            throw new Exception(message: "UserId is missing");

        //Validate that phone an email have a value
        foreach(PropertyInfo field in update.GetType().GetProperties()){
            if(field.GetValue(update) == null)
                throw new Exception(message: field.Name + " is a mandatory field");
        }

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
