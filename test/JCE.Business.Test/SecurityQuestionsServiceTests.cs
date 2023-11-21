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
    //NOT IMPLEMENTED
    //DO SOMETHING SIMILAR TO THE IMPLEMENTATION ON GetProfile function
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

}
