using JCE.Business.Dtos.ErrorDtos;
using JCE.Business.Dtos.PayorDtos;
using JCE.Business.Services;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;
using Moq;
using Xunit;

namespace JCE.Business.Test;

public class ErrorServiceTest
{
    [Fact]
    public async Task Should_ReturnAValidErrorDto_WhenErrorIdIsValid()
    {
        // Arrange
        var mockErrorRespository = new Mock<IErrorRepository>();
        var mockPayorRepository = new Mock<IPayorRepository>();
        var errorService = new ErrorService(mockErrorRespository.Object, mockPayorRepository.Object);

        var existingId = "1";

        var expected = new GetErrorToUpdateDto()
        {
            ErrorId = 1,
            Message = "Test",
            Description = "Test",
            CreatedBy = "Diego",
            Payors = new List<GetPayorForErrorToUpdateDto>()
            {
                new GetPayorForErrorToUpdateDto()
                {
                    payorid = 1,
                    payor_id_table = "123456789"
                }
            },
            Conditions = new List<GetConditionsFoErrorToUpdateDto>
            {
                new GetConditionsFoErrorToUpdateDto()
                {
                    Field = "1",
                    Condition = "1",
                    Value = "Test"
                }
            }
        };

        mockErrorRespository.Setup(repo => repo.GetErrorByIdAsync(It.IsAny<string>()))
            .ReturnsAsync(new SearchError
            {
                ErrorId = 1,
                Message = "Test",
                Description = "Test",
                UserName = "Diego"
            });

        mockErrorRespository.Setup(repo => repo.GetConditionsForError(It.IsAny<string>()))
            .ReturnsAsync(new List<ConditionUpdate>
            {
                new ConditionUpdate
                {
                    ErrorId = "1",
                    Field = "1",
                    Condition = "1",
                    Value = "Test"
                }
            });

        mockPayorRepository.Setup(repo => repo.GetPayorsByErrorId(It.IsAny<string>()))
            .ReturnsAsync(new List<Payor>
            {
                new Payor
                {
                    payorid = 1,
                    payor_id_table = "123456789"
                }
            });

        // Act
        var result = await errorService.GetErrorByIdAsync(existingId);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(expected.ErrorId, result.ErrorId);
        Assert.Equal(expected.CreatedBy, result.CreatedBy);
        Assert.Equal(expected.Message, result.Message);
        Assert.Equal(expected.Description, result.Description);
        Assert.Equal(expected.Conditions.Count, result.Conditions.Count);
        Assert.Equal(expected.Payors.Count, result.Payors.Count);
        Assert.Equal(expected.Payors.FirstOrDefault()?.payor_id_table, result.Payors.FirstOrDefault()?.payor_id_table);
    }

    [Fact]
    public async Task Should_ReturnAnException_When_ErrorIdIsNotValid()
    {
        // Arrange
        var mockErrorRespository = new Mock<IErrorRepository>();
        var mockPayorRepository = new Mock<IPayorRepository>();
        var errorService = new ErrorService(mockErrorRespository.Object, mockPayorRepository.Object);

        var noExistingId = "123";

        mockErrorRespository.Setup(repo => repo.GetErrorByIdAsync(It.IsAny<string>()))
        .ReturnsAsync((SearchError?)null);

        // Act
        var result = await Assert.ThrowsAsync<Exception>
            (async () => await errorService.GetErrorByIdAsync(noExistingId));

        //Assert
        Assert.Equal("Error not found", result.Message);
    }

    [Fact]
    public async Task Should_ReturnTrue_WhenAnErrorIsUpdated()
    {
        // Arrange
        var mockErrorRespository = new Mock<IErrorRepository>();
        var mockPayorRepository = new Mock<IPayorRepository>();
        var errorService = new ErrorService(mockErrorRespository.Object, mockPayorRepository.Object);

        var errorToUpdate = new ErrorUpdateDto()
        {
            ErrorId = 1,
            Payors = new List<int>() { 1, 2, 3, 4, 5 },
            Conditions = new List<ConditionGroup>()
            {
                new ConditionGroup()
                {
                    Conditiongroupid = 1,
                    fieldValue = "Test",
                    selectedField = 1,
                    selectedValue = 1
                }
            }
        };

        mockErrorRespository.Setup(repo => repo.UpdateError(It.IsAny<ErrorUpdate>()))
        .ReturnsAsync(true);

        // Act
        var result = await errorService.UpdateError(errorToUpdate);

        //Assert
        Assert.True(result);
    }

    [Fact]
    public async Task Should_ReturnFlase_WhenAnErrorFailsToUpdated()
    {
        // Arrange
        var mockErrorRespository = new Mock<IErrorRepository>();
        var mockPayorRepository = new Mock<IPayorRepository>();
        var errorService = new ErrorService(mockErrorRespository.Object, mockPayorRepository.Object);

        var errorToUpdate = new ErrorUpdateDto()
        {
            ErrorId = 1,
            Payors = new List<int>() { 1, 2, 3, 4, 5 },
            Conditions = new List<ConditionGroup>()
            {
                new ConditionGroup()
                {
                    Conditiongroupid = 1,
                    fieldValue = "Test",
                    selectedField = 1,
                    selectedValue = 1
                }
            }
        };

        mockErrorRespository.Setup(repo => repo.UpdateError(It.IsAny<ErrorUpdate>()))
        .ReturnsAsync(false);

        // Act
        var result = await errorService.UpdateError(errorToUpdate);

        //Assert
        Assert.False(result);
    }
}
