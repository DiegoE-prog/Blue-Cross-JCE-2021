using System.Data;
using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository;
using Moq;
using Moq.Dapper;
using Xunit;

namespace JCE.Data.Test;
public class SecurityQuestionsRepositoryTests
{
    [Fact]
    public async Task Should_ReturnSecurityQuestions_WhenUserExists()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var securityQuestionsRepository = new SecurityQuestionsRepository(mockDataContext.Object);

        var existingUserid = 1;

        var expected = new SecurityQuestions {
            UserId = 1,
            Q1Answer = "Juana",
            Q2Answer = "Spider-Man",
            Q3Answer = "Leon",
            Q4Answer = "Nissan",
            Q5Answer = "Ibero",
            Q6Answer = "Baseball",
            Q7Answer = "Gustavo",
            Q8Answer = "Three Days Grace"
        };

        mockDbConnection.SetupDapperAsync(c => c.QueryFirstAsync<SecurityQuestions>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(expected);

        //Act
        var result = await securityQuestionsRepository.GetSecurityQuestions(existingUserid);

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
        var securityQuestionsRepository = new SecurityQuestionsRepository(mockDataContext.Object);

        var nonExistantUserid = 254;

        mockDbConnection.SetupDapperAsync(c => c.QueryFirstOrDefaultAsync<SecurityQuestions>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync((SecurityQuestions?)null);

        //Act
        var result = await securityQuestionsRepository.GetSecurityQuestions(nonExistantUserid);

        //Assert
        Assert.Null(result);
    }

    [Fact]
    public async Task Should_ReturnTrue_WhenSecurityQuestionsAreUpdatedSuccessfully()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var securityQuestionsRepository = new SecurityQuestionsRepository(mockDataContext.Object);

        var testUpdateSecurityQuestions = new SecurityQuestions {
            UserId = 1,
            Q1Answer = "Juana",
            Q2Answer = "Spider-Man",
            Q3Answer = "Leon",
            Q4Answer = "Nissan",
            Q5Answer = "Tecnologico de Leon",
            Q6Answer = "Basketball",
            Q7Answer = "Gustavo",
            Q8Answer = "Three Days Grace"
        };

        mockDbConnection.SetupDapperAsync(c => c.ExecuteAsync(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(1);

        //Act
        var result = await securityQuestionsRepository.UpdateSecurityQuestions(testUpdateSecurityQuestions);

        //Assert
        Assert.True(result);
    }

    [Fact]
    public async Task Should_ReturnFalse_WhenSecurityQuestionsUpdateFails()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c=> c.CreateConnection()).Returns(mockDbConnection.Object);
        var securityQuestionsRepository = new SecurityQuestionsRepository(mockDataContext.Object);

        var testUpdateSecurityQuestions = new SecurityQuestions {
            UserId = 1,
            Q1Answer = "Juana",
            Q2Answer = "Spider-Man",
            Q3Answer = "Leon",
            Q4Answer = "Nissan",
            Q5Answer = "Tecnologico de Leon",
            Q6Answer = "Basketball",
            Q7Answer = "Gustavo",
            Q8Answer = "Three Days Grace"
        };

        mockDbConnection.SetupDapperAsync(c => c.ExecuteAsync(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(0);

        //Act
        var result = await securityQuestionsRepository.UpdateSecurityQuestions(testUpdateSecurityQuestions);

        //Assert
        Assert.False(result);
    }
}
