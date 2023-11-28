using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository;
using Moq;
using Moq.Dapper;
using System.Data;
using Xunit;

namespace JCE.Data.Test;

public class ErrorRepositoryTests
{
    [Fact]
    public async Task Should_ReturnAnError_WhenErrorIdIsValid()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c => c.CreateConnection()).Returns(mockDbConnection.Object);

        var errorRepository = new ErrorRepository(mockDataContext.Object);

        var existingErrorId = "1";

        var expectedError = new SearchError()
        {
            ErrorId = 1,
            Message = "Test",
            Description = "Test",
            UserName = "Diego"
        };

        mockDbConnection.SetupDapperAsync(c =>
            c.QueryAsync<SearchError>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(new List<SearchError>
            {
                new SearchError()
                {
                    ErrorId = 1,
                    Message = "Test",
                    Description = "Test",
                    UserName = "Diego"
                }
            });

        // Act
        var result = await errorRepository.GetErrorByIdAsync(existingErrorId);

        // Assert
        Assert.Equal(expectedError.ErrorId, result.ErrorId);
        Assert.Equal(expectedError.Message, result.Message);
        Assert.Equal(expectedError.Description, result.Description);
        Assert.Equal(expectedError.UserName, result.UserName);
    }

    [Fact]
    public async Task Should_ReturnNull_WhenErrorIdIsInvalid()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c => c.CreateConnection()).Returns(mockDbConnection.Object);

        var errorRepository = new ErrorRepository(mockDataContext.Object);

        var noExistingErrorId = "2";

        mockDbConnection.SetupDapperAsync(c => c.QueryAsync<SearchError>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(new List<SearchError>());

        // Act
        var result = await errorRepository.GetErrorByIdAsync(noExistingErrorId);

        // Assert
        Assert.Null(result);
    }

    [Fact]
    public async Task Should_ReturnAListOfConditions_WhenErrorIdIsValid()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c => c.CreateConnection()).Returns(mockDbConnection.Object);

        var errorRepository = new ErrorRepository(mockDataContext.Object);

        var existingErrorId = "1";

        var expectedConditions = new List<ConditionUpdate>()
        {
            new ConditionUpdate()
            {
                ErrorId = "1",
                    Field = "1",
                    Condition = "1",
                    Value = "Test"
            }
        };

        mockDbConnection.SetupDapperAsync(c => c.QueryAsync<ConditionUpdate>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(new List<ConditionUpdate>()
            {
                new ConditionUpdate()
                {
                    ErrorId = "1",
                    Field = "1",
                    Condition = "1",
                    Value = "Test"
                }
            });

        // Act
        var result = await errorRepository.GetConditionsForError(existingErrorId);

        // Assert
        Assert.Equal(expectedConditions.Count, result.Count);
        Assert.Equal(expectedConditions.First().ErrorId, result.First().ErrorId);
        Assert.Equal(expectedConditions.First().Field, result.First().Field);
        Assert.Equal(expectedConditions.First().Condition, result.First().Condition);
        Assert.Equal(expectedConditions.First().Value, result.First().Value);
    }

    [Fact]
    public async Task Should_ReturnAnEmptyListOfConditions_WhenErrorIdIsInvalid()
    {
        //Arrange
        var mockDataContext = new Mock<IDataContext>();
        var mockDbConnection = new Mock<IDbConnection>();
        mockDataContext.Setup(c => c.CreateConnection()).Returns(mockDbConnection.Object);

        var errorRepository = new ErrorRepository(mockDataContext.Object);

        var noexistingErrorId = "1";

        mockDbConnection.SetupDapperAsync(c => c.QueryAsync<ConditionUpdate>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(new List<ConditionUpdate>(){});

        // Act
        var result = await errorRepository.GetConditionsForError(noexistingErrorId);

        // Assert
        Assert.Empty(result);
    }
}
