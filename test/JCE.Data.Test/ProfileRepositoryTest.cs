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
        var profileRepository = new ProfileRepository(mockDataContext.Object);

        var existingUserid = 1;

        var expected = new User { UserId = 1, Username = "Diego", Password = "12345", Role = "1", Name = "Diego", LastName = "Escutia", Dob = DateTime.Parse("1997-12-05"), Phone = "4779236587", Email = "diego@mail.com" }; 

        //Object params
        
        mockDbConnection.SetupDapperAsync(c => c.QueryFirstOrDefaultAsync<User>(It.IsAny<string>(), It.IsAny<object>(), null, null, null))
            .ReturnsAsync(expected);

        //Act
        var result = await profileRepository.GetUserProfileById(existingUserid);

        //Assert
        Assert.NotNull(result);
        Assert.Equal(existingUserid, result.UserId);
    }

}
