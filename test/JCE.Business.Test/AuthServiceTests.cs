using JCE.Business.Dtos.AuthDtos;
using JCE.Business.Services;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;
using Moq;
using Xunit;

namespace JCE.Business.Test;

public class AuthServiceTests
{
    [Fact]
    public async Task Should_ReturnGetAuthDto_WhenAuthDtoIsValid()
    {
        // Arrange
        var mockAuthRepository = new Mock<IAuthRepository>();
        var authService = new AuthService(mockAuthRepository.Object);

        var testAuth = new AuthDto { Username = "TestUser", Password="password" };

        var expected = new GetAuthDto { Username = "TestUser", Role="1" };

        mockAuthRepository.Setup(repo => repo.Login(It.IsAny<User>()))
            .ReturnsAsync(new User { Username = "TestUser", Role="1"});

        // Act
        var result = await authService.Login(testAuth);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(expected.Username, result.Username);
        Assert.Equal(expected.Role, result.Role);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenAuthDtoIsInvalid()
    {
        // Arrange
        var mockAuthRepository = new Mock<IAuthRepository>();
        var authService = new AuthService(mockAuthRepository.Object);

        var testAuth = new AuthDto { Username = "NotExistingUser", Password = "password" };

        mockAuthRepository.Setup(repo => repo.Login(It.IsAny<User>()))
            .ReturnsAsync((User)null);

        // Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await authService.Login(testAuth));

        // Assert
        Assert.Equal("User not in the database", result.Message);
    }

}
