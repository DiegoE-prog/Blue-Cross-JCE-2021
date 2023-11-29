using JCE.Business.Dtos.SecurityQuestionsDtos;
using JCE.Business.Services;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;
using Moq;
using Xunit;

namespace JCE.Business.Test;
public class SecurityQuestionsServiceTests
{
    [Fact]
    public async Task Should_ReturnGetSecurityQuestionsDto_WhenAUserWithSpecifiedUseridExists()
    {
        //Arrange
        var mockSecurityQuestionsRepository = new Mock<ISecurityQuestionsRepository>();
        var securityQuestionsService = new SecurityQuestionsService(mockSecurityQuestionsRepository.Object);

        var existingUserid = 1; //Userid

        var expected = new GetSecurityQuestionsDto
        {
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

        mockSecurityQuestionsRepository.Setup(repo => repo.GetSecurityQuestions(It.IsAny<int>()))
            .ReturnsAsync(new SecurityQuestions{
                UserId = 1,
                Q1Answer = "Juana",
                Q2Answer = "Spider-Man",
                Q3Answer = "Leon",
                Q4Answer = "Nissan",
                Q5Answer = "Ibero",
                Q6Answer = "Baseball",
                Q7Answer = "Gustavo",
                Q8Answer = "Three Days Grace"
            });

        //Act
        var result = await securityQuestionsService.GetSecurityQuestions(existingUserid);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(expected.UserId, result.UserId);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenAUserWithSpecifiedUseridDoesntExist()
    {
        //Arrange
        var mockSecurityQuestionsRepository = new Mock<ISecurityQuestionsRepository>();
        var securityQuestionsService = new SecurityQuestionsService(mockSecurityQuestionsRepository.Object);

        var nonExistantUserid = 254; //Userid

        mockSecurityQuestionsRepository.Setup(repo => repo.GetSecurityQuestions(It.IsAny<int>()))
            .ReturnsAsync((SecurityQuestions?)null);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await securityQuestionsService.GetSecurityQuestions(nonExistantUserid));

        //Assert
        Assert.Equal("The User with Id '" + nonExistantUserid + "' does not exist", result.Message);
    }

    [Fact]
    public async Task Should_ReturnTrue_WhenSecurityQuestionsAreUpdatedSuccessfully()
    {
        //Arrange
        var mockSecurityQuestionsRepository = new Mock<ISecurityQuestionsRepository>();
        var securityQuestionsService = new SecurityQuestionsService(mockSecurityQuestionsRepository.Object);

        var testUpdateSecurityQuestions = new UpdateSecurityQuestionsDto{
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

        mockSecurityQuestionsRepository.Setup(repo => repo.UpdateSecurityQuestions(It.IsAny<SecurityQuestions>()))
            .ReturnsAsync(true);

        //Act
        var result = await securityQuestionsService.UpdateSecurityQuestions(testUpdateSecurityQuestions);

        //Assert
        Assert.True(result);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenTheUserLinkedToTheUseridFieldDoesntExist()
    {
        //Arrange
        var mockSecurityQuestionsRepository = new Mock<ISecurityQuestionsRepository>();
        var securityQuestionsService = new SecurityQuestionsService(mockSecurityQuestionsRepository.Object);

        var testUpdateSecurityQuestions = new UpdateSecurityQuestionsDto{
                UserId = 254,  //Non Existant UserId
                Q1Answer = "Juana",
                Q2Answer = "Spider-Man",
                Q3Answer = "Leon",
                Q4Answer = "Nissan",
                Q5Answer = "Tecnologico de Leon",
                Q6Answer = "Basketball",
                Q7Answer = "Gustavo",
                Q8Answer = "Three Days Grace"
            };

        mockSecurityQuestionsRepository.Setup(repo => repo.UpdateSecurityQuestions(It.IsAny<SecurityQuestions>()))
            .ReturnsAsync(false);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async ()=> await securityQuestionsService.UpdateSecurityQuestions(testUpdateSecurityQuestions));

        //Assert
        Assert.Equal("Failed to update security questions", result.Message);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenTheUseridFieldToBeUpdatedIsMissing()
    {
        //Arrange
        var mockSecurityQuestionsRepository = new Mock<ISecurityQuestionsRepository>();
        var securityQuestionsService = new SecurityQuestionsService(mockSecurityQuestionsRepository.Object);

        var testUpdateSecurityQuestions = new UpdateSecurityQuestionsDto{
                //UserId = 1,
                Q1Answer = "Juana",
                Q2Answer = "Spider-Man",
                Q3Answer = "Leon",
                Q4Answer = "Nissan",
                Q5Answer = "Tecnologico de Leon",
                Q6Answer = "Basketball",
                Q7Answer = "Gustavo",
                Q8Answer = "Three Days Grace"
            };

        mockSecurityQuestionsRepository.Setup(repo => repo.UpdateSecurityQuestions(It.IsAny<SecurityQuestions>()))
            .ReturnsAsync(false);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async ()=> await securityQuestionsService.UpdateSecurityQuestions(testUpdateSecurityQuestions));

        //Assert
        Assert.Equal("UserId is missing", result.Message);
    }

    [Fact]
    public async Task Should_ReturnAnExceptionWithMessage_WhenAQuestionFieldIsMissing()
    {
        //Arrange
        var mockSecurityQuestionsRepository = new Mock<ISecurityQuestionsRepository>();
        var securityQuestionsService = new SecurityQuestionsService(mockSecurityQuestionsRepository.Object);

        var testUpdateSecurityQuestions = new UpdateSecurityQuestionsDto{
                UserId = 1,
                Q1Answer = "Juana",
                Q2Answer = "Spider-Man",
                Q3Answer = "Leon",
                //Q4Answer = "Nissan",
                Q5Answer = "Tecnologico de Leon",
                Q6Answer = "Basketball",
                Q7Answer = "Gustavo",
                Q8Answer = "Three Days Grace"
            };

        mockSecurityQuestionsRepository.Setup(repo => repo.UpdateSecurityQuestions(It.IsAny<SecurityQuestions>()))
            .ReturnsAsync(false);

        //Act
        var result = await Assert.ThrowsAsync<Exception>
            (async ()=> await securityQuestionsService.UpdateSecurityQuestions(testUpdateSecurityQuestions));

        //Assert
        Assert.Equal("Q4Answer is a mandatory field", result.Message);
    }

}
