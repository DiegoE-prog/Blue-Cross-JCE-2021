using System.Data;
using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository;
using Moq;
using Moq.Dapper;
using Xunit;

namespace JCE.Data.Test;
public class ProfileRepositoryTest
{
    [Fact]
    public async Task Should_ReturnAUser_WhenUserExists()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var profileRepository = new ProfileRepository(mockDataContext.Object);

        var existingUserid = 1;

        var expected = new User { UserId = 1, Username = "Diego", Password = "12345", Role = "1", Name = "Diego", LastName = "Escutia", Dob = DateTime.Parse("1997-12-05"), Phone = "4779236587", Email = "diego@mail.com" }; 
        
        mockDbConnection.SetupDapperAsync(c => c.QueryFirstOrDefaultAsync<User>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(expected);

        //Act
        var result = await profileRepository.GetUserProfileById(existingUserid);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(existingUserid, result.UserId);
    }

    [Fact]
    public async Task Should_ReturnNull_WhenUserDoesntExist()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var profileRepository = new ProfileRepository(mockDataContext.Object);

        var nonExistantUserid = 254;
        
        mockDbConnection.SetupDapperAsync(c => c.QueryFirstOrDefaultAsync<User>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync((User?)null);

        //Act
        var result = await profileRepository.GetUserProfileById(nonExistantUserid);

        //Assert
        Assert.Null(result);
    }

    [Fact]
    public async Task Should_ReturnAListOfUser_WhenThereAreUsersThatMatchTheProvidedFilters()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var profileRepository = new ProfileRepository(mockDataContext.Object);

        //The test uses the parameters name and phone
        var testFilters = new User{ Name = "Alejandro", Dob = DateTime.Parse("1997-06-14") };

        var expected = new List<User>{
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
        }; 
        
        mockDbConnection.SetupDapperAsync(c => c.QueryAsync<User>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(expected);

        //Act
        var result = await profileRepository.GetUserProfilesByFilter(testFilters);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(expected[0].Name, result[0].Name);
        Assert.Equal(expected[0].Dob, result[0].Dob);
        Assert.Equal(expected[1].Name, result[1].Name);
        Assert.Equal(expected[1].Dob, result[1].Dob);
    }

    [Fact]
    public async Task Should_ReturnAnEmptyListOfUser_WhenThereAreNoUsersThatMatchTheProvidedFilters()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var profileRepository = new ProfileRepository(mockDataContext.Object);

        //The test uses the parameters name and phone
        var testFilters = new User{ Name = "Alejandro", Dob = DateTime.Parse("1997-06-14") };

        var expected = new List<User>{}; 
        
        mockDbConnection.SetupDapperAsync(c => c.QueryAsync<User>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(expected);

        //Act
        var result = await profileRepository.GetUserProfilesByFilter(testFilters);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(expected, result);
    }

    [Fact]
    public async Task Should_ReturnTrue_WhenTheUserIsCreatedSuccessfully()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var profileRepository = new ProfileRepository(mockDataContext.Object);

        var testNewUser = new User{ 
            Username = "T.Stark85267",
            Role = "3",
            Name = "Tony",
            LastName = "Stark",
            Dob = DateTime.Parse("1963-03-01"),
            Phone = "4773152223",
            Email = "tonyrules@mail.com"
        };
        
        mockDbConnection.SetupDapperAsync(c => c.ExecuteAsync(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(1);

        //Act
        var result = await profileRepository.CreateUserProfile(testNewUser);

        //Assert
        Assert.True(result);
    }

    [Fact]
    public async Task Should_ReturnFalse_WhenTheUserCreationFails()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var profileRepository = new ProfileRepository(mockDataContext.Object);

        var testNewUser = new User{ 
            Username = "T.Stark85267",
            Role = "3",
            Name = "Tony",
            LastName = "Stark",
            Dob = DateTime.Parse("1963-03-01"),
            Phone = "4773152223",
            Email = "tonyrules@mail.com"
        };
        
        mockDbConnection.SetupDapperAsync(c => c.ExecuteAsync(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(0);

        //Act
        var result = await profileRepository.CreateUserProfile(testNewUser);

        //Assert
        Assert.False(result);
    }

    [Fact]
    public async Task Should_ReturnTrue_WhenTheUserIsDeletedSuccessfully()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var profileRepository = new ProfileRepository(mockDataContext.Object);

        var existingUserid = 1;
        
        mockDbConnection.SetupDapperAsync(c => c.ExecuteAsync(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(1);

        //Act
        var result = await profileRepository.DeleteUserProfile(existingUserid);

        //Assert
        Assert.True(result);
    }

    [Fact]
    public async Task Should_ReturnFalse_WhenTheUserDeletionFails()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var profileRepository = new ProfileRepository(mockDataContext.Object);

        var nonExistantUserid = 254;
        
        mockDbConnection.SetupDapperAsync(c => c.ExecuteAsync(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(0);

        //Act
        var result = await profileRepository.DeleteUserProfile(nonExistantUserid);

        //Assert
        Assert.False(result);
    }

}
