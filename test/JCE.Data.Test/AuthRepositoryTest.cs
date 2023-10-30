using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository;
using Moq;
using Moq.Dapper;
using System.Data;
using Xunit;

namespace JCE.Data.Test;

public class AuthRepositoryTest
{
    [Fact]
    public async Task Should_ReturnAnUser_When_UserExistAndIsValid()
    {
        // Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        var authRepository = new AuthRepository(mockDataContext.Object);
        
        var testUser = new User {Username = "test",  Password = "test"};

        var userList = new List<User>
        {
            new User { Username = "test", Password = "test" }
        };

        mockDbConnection.SetupDapperAsync(c => c.QueryAsync<User>(It.IsAny<string>(), null, null, null, null))
               .ReturnsAsync(userList);

        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);

        // Act
        var result = await authRepository.Login(testUser);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(testUser.Username, result.Username);
    }

    [Fact]
    public async Task Should_ReturnNull_When_UserNotExists()
    {
        // Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        var authRepository = new AuthRepository(mockDataContext.Object);

        var testUser = new User { Username = "test", Password = "test" };

        var userList = new List<User>
        {
            new User { Username = "test2", Password = "test" }
        };

        mockDbConnection.SetupDapperAsync(c => c.QueryAsync<User>(It.IsAny<string>(), null, null, null, null))
               .ReturnsAsync(userList);

        mockDataContext.Setup(c => c.CreateConnection()).Returns(mockDbConnection.Object);

        // Act
        var result = await authRepository.Login(testUser);

        // Assert
        Assert.Null(result);
    }
}
