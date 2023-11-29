using System.Text.RegularExpressions;
using JCE.Business.Dtos.ProfileDtos;
using JCE.Business.Services;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;
using Moq;
using Xunit;

namespace JCE.Business.Test;
public class ProfileServiceTests
{
    [Fact]
    public async Task Should_ReturnGetProfileDto_WhenAUserWithSpecifiedUseridExists()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        var existingUserid = 1; //Userid

        var expected = new GetProfileDto 
        {
            UserId = 1,
            Username = "M.Chavez61527",
            Name = "Mauricio",
            LastName = "Chavez",
            Dob = DateTime.Parse("1999-03-23"),
            Phone = "4773215281",
            Email = "mau@mail.com"
        };

        mockProfileRepository.Setup(repo => repo.GetUserProfileById(It.IsAny<int>()))
            .ReturnsAsync(new User{
                UserId = 1,
                Username = "M.Chavez61527",
                Name = "Mauricio",
                LastName = "Chavez",
                Dob = DateTime.Parse("1999-03-23"),
                Phone = "4773215281",
                Email = "mau@mail.com"
            });

        //Act
        var result = await profileService.GetUserProfileById(existingUserid);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(expected.UserId, result.UserId);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenAUserWithSpecifiedUseridDoesntExist()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        var nonExistantUserid = 254; //Userid

        mockProfileRepository.Setup(repo => repo.GetUserProfileById(It.IsAny<int>()))
            .ReturnsAsync((User?)null);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await profileService.GetUserProfileById(nonExistantUserid));

        //Assert
        Assert.Equal("The User with Id '" + nonExistantUserid + "' does not exist", result.Message);
    }

    [Fact]
    public async Task Should_ReturnGetProfileDtoList_WhenThereAreUsersThatMatchWithTheFilters()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        //The test uses the parameters name and Dbo
        var testFilters = new GetProfileDto { Name = "Alejandro", Dob = DateTime.Parse("1997-06-14") };

        var expected = new List<GetProfileDto>
        {
            new GetProfileDto{
                UserId = 15,
                Username = "A.Garcia34567",
                Name = "Alejandro",
                LastName = "Garcia",
                Dob = DateTime.Parse("1997-06-14"),
                Phone = "4773122597",
                Email = "alexg@mail.com"
            },
                new GetProfileDto{
                UserId = 34,
                Username = "A.Garcia34567",
                Name = "Alejandro",
                LastName = "Perez",
                Dob = DateTime.Parse("1997-06-14"),
                Phone = "4759788553",
                Email = "aperez@mail.com"
            }
        };

        mockProfileRepository.Setup(repo => repo.GetUserProfilesByFilter(It.IsAny<User>()))
            .ReturnsAsync(new List<User>{
                new User{
                    UserId = 15,
                    Username = "A.Garcia34567",
                    Name = "Alejandro",
                    LastName = "Garcia",
                    Dob = DateTime.Parse("1997-06-14"),
                    Phone = "4773122597",
                    Email = "alexg@mail.com"
                },

                new User{
                    UserId = 34,
                    Username = "A.Garcia34567",
                    Name = "Alejandro",
                    LastName = "Perez",
                    Dob = DateTime.Parse("1997-06-14"),
                    Phone = "4759788553",
                    Email = "aperez@mail.com"
                }
            });

        //Act
        var result = await profileService.GetUserProfilesByFilter(testFilters);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(expected[0].Name, result[0].Name);
        Assert.Equal(expected[0].Dob, result[0].Dob);
        Assert.Equal(expected[1].Name, result[1].Name);
        Assert.Equal(expected[1].Dob, result[1].Dob);
    }

    [Fact]
    public async Task Should_ReturnAnEmptyGetProfileDtoList_WhenThereAreNoUsersThatMatchWithTheFilters()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        //The test uses the parameters name and phone
        var testFilters = new GetProfileDto { Name = "Alejandro", Phone = "4773215281" };

        var expected = new List<GetProfileDto>();

        mockProfileRepository.Setup(repo => repo.GetUserProfilesByFilter(It.IsAny<User>()))
            .ReturnsAsync(new List<User>());

        //Act
        var result = await profileService.GetUserProfilesByFilter(testFilters);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(expected, result);
    }

    [Fact]
    public async Task Should_ReturnSuccesfulCreatedProfileDto_WhenTheUserIsCreatedSuccessfully()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        var testNewUser = new CreateProfileDto 
        { 
            Username = "T.Stark85267",
            Role = "3",
            Name = "Tony",
            LastName = "Stark",
            Dob = DateTime.Parse("1963-03-01"),
            Phone = "4773152223",
            Email = "tonyrules@mail.com"
        };

        //Expected values
        var expectedPasswordRegex = new Regex("^TempTS[@#$%&]2223$");

        var expectedDto = new SuccesfulCreatedProfileDto{
            Username = "T.Stark85267",
            Password = "TempTS@2223",
            ExpireDate = DateTime.Now.AddYears(1)
        };

        mockProfileRepository.Setup(repo => repo.CreateUserProfile(It.IsAny<User>()))
            .ReturnsAsync(true);

        //Act
        var result = await profileService.CreateUserProfile(testNewUser);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(expectedDto.Username, result.Username);
        Assert.Matches(expectedPasswordRegex, result.Password);
        Assert.Equal(expectedDto.ExpireDate.Date.ToShortDateString(), result.ExpireDate.Date.ToShortDateString());
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenAMandatoryFieldInCreateProfileDtoIsEmpty()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        //The Dto has the parameter 'name' missing
        var testNewUser = new CreateProfileDto 
        {
            Username = "P.Parker85267",
            Role = "3",
            //Name = "Peter",
            LastName = "Parker",
            Dob = DateTime.Parse("1962-08-01"),
            Phone = "4773152223",
            Email = "peternerd@mail.com"
        };

        mockProfileRepository.Setup(repo => repo.CreateUserProfile(It.IsAny<User>()))
            .ReturnsAsync(false);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await profileService.CreateUserProfile(testNewUser));

        //Assert
        Assert.Equal("Name is a mandatory field", result.Message);
    }

    [Fact]
    public async Task Should_ReturnTrue_WhenTheUserIsUpdatedSuccessfully()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        var testUpdateUser = new UpdatePhoneAndEmailDto 
        { 
            UserId = 5,
            Phone = "4773329754",
            Email = "updated@mail.com"
        };

        mockProfileRepository.Setup(repo => repo.UpdatePhoneAndEmail(It.IsAny<User>()))
            .ReturnsAsync(true);

        //Act
        var result = await profileService.UpdatePhoneAndEmail(testUpdateUser);

        //Assert
        Assert.True(result);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenTheUseridFieldToBeUpdatedIsMissing()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        var testUpdateUser = new UpdatePhoneAndEmailDto 
        { 
            Phone = "4773329754",
            Email = "updated@mail.com"
        };

        mockProfileRepository.Setup(repo => repo.UpdatePhoneAndEmail(It.IsAny<User>()))
            .ReturnsAsync(false);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await profileService.UpdatePhoneAndEmail(testUpdateUser));

        //Assert
        Assert.Equal("UserId is missing", result.Message);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenUserLinkedToTheUseridSpecifiedDoesntExist()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        var testUpdateUser = new UpdatePhoneAndEmailDto 
        { 
            UserId = 255,
            Phone = "4773329754",   
            Email = "updated@mail.com"
        };

        mockProfileRepository.Setup(repo => repo.UpdatePhoneAndEmail(It.IsAny<User>()))
            .ReturnsAsync(false);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await profileService.UpdatePhoneAndEmail(testUpdateUser));

        //Assert
        Assert.Equal("Failed to update the phone and email of the user", result.Message);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenPhoneOrEmailFieldIsMissing()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        var testUpdateUser = new UpdatePhoneAndEmailDto 
        { 
            UserId = 255,
            //Phone = "4773329754",   
            Email = "updated@mail.com"
        };

        mockProfileRepository.Setup(repo => repo.UpdatePhoneAndEmail(It.IsAny<User>()))
            .ReturnsAsync(false);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await profileService.UpdatePhoneAndEmail(testUpdateUser));

        //Assert
        Assert.Equal("Phone is a mandatory field", result.Message);
    }

    [Fact]
    public async Task Should_ReturnTrue_WhenTheUserIsDeletedSuccessfully()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        var existingUserid = 5;

        mockProfileRepository.Setup(repo => repo.DeleteUserProfile(It.IsAny<int>()))
            .ReturnsAsync(true);

        //Act
        var result = await profileService.DeleteUserProfile(existingUserid);

        //Assert
        Assert.True(result);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenTheUserToBeDeletedWithTheUseridSpecifiedDoesntExist()
    {
        //Arrange
        var mockProfileRepository = new Mock<IProfileRepository>();
        var profileService = new ProfileService(mockProfileRepository.Object);

        var nonExistantUserid = 254;

        mockProfileRepository.Setup(repo => repo.DeleteUserProfile(It.IsAny<int>()))
            .ReturnsAsync(false);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await profileService.DeleteUserProfile(nonExistantUserid));

        //Assert
        Assert.Equal("Failed to delete the user", result.Message);
    }
    
}
