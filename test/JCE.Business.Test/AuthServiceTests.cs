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
            .ReturnsAsync(new User { 
                Username = "TestUser", 
                Password="password", 
                Role="1",
                UserStatus = "1",
                ExpireDate = DateTimeOffset.UtcNow.AddYears(1)
            });

        // Act
        var result = await authService.Login(testAuth);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(expected.Username, result.Username);
        Assert.Equal(expected.Role, result.Role);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenAuthDtoHasAnInvalidUser()
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
        Assert.Equal("UserName should be valid", result.Message);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenAuthDtoHasAnInvalidPassword()
    {
        // Arrange
        var mockAuthRepository = new Mock<IAuthRepository>();
        var authService = new AuthService(mockAuthRepository.Object);

        var testAuth = new AuthDto { Username = "ExistingUser", Password = "NotCorrectPassword" };

        mockAuthRepository.Setup(repo => repo.Login(It.IsAny<User>()))
            .ReturnsAsync(new User { Username = "ExistingUser", Password = "password"});

        // Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await authService.Login(testAuth));

        // Assert
        Assert.Equal("Password is incorrect", result.Message);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenAuthDtoIsValidButUserIsExpired()
    {
        // Arrange
        var mockAuthRepository = new Mock<IAuthRepository>();
        var authService = new AuthService(mockAuthRepository.Object);

        var testAuth = new AuthDto { Username = "ExistingUser", Password = "password" };

        mockAuthRepository.Setup(repo => repo.Login(It.IsAny<User>()))
            .ReturnsAsync(new User { 
                Username = "ExistingUser", 
                Password = "password", 
                ExpireDate = DateTimeOffset.UtcNow.AddMonths(-2) 
            });

        // Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await authService.Login(testAuth));

        // Assert
        Assert.Equal("User has expired, please contact system admin (01800-233-45-63)", result.Message);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenAuthDtoIsValidButUserStatusIsBloqued()
    {
        // Arrange
        var mockAuthRepository = new Mock<IAuthRepository>();
        var authService = new AuthService(mockAuthRepository.Object);

        var testAuth = new AuthDto { Username = "ExistingUser", Password = "password" };

        mockAuthRepository.Setup(repo => repo.Login(It.IsAny<User>()))
            .ReturnsAsync(new User
            {
                Username = "adrian",
                Password = "chalala92",
                ExpireDate = DateTimeOffset.UtcNow.AddYears(1),
                UserStatus = "0"
            });

        // Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await authService.Login(testAuth));

        // Assert
        Assert.Equal("User is bloqued please contact system admin (01800-233-45-63)", result.Message);
    }
}
