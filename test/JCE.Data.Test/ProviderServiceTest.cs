using JCE.Business.Services;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;
using Moq;
using System.Collections.Generic;
using Xunit;

namespace ProviderServiceTest.UnitTests
{
    public class ProviderServiceTest
    {
        private readonly Mock<IProviderRepository> _providerRepositoryMock;

        public ProviderServiceTest()
        {
            _providerRepositoryMock = new Mock<IProviderRepository>();
        }

        [Fact]
        public async Task GetList_ShouldReturnListOfProviderDtos_WhenProviderExist()
        {
            // Arrange
            var expectedProviders = new List<Provider>
            {

            new Provider { provider_id_table = "5887000048", providername = "Dr Robert Walt", type = "Professional", provideraddress = "391  Post Farm Road", zipcode = "90804", state = "CA", city = "Long Beach" },
            new Provider { provider_id_table = "5887000049", providername = "MCS Center", type= "Institutional", provideraddress = "1991  Walnut Hill Drive", zipcode = "31780", state = "GA", city = "PLAINS"},
            };
            _providerRepositoryMock.Setup(m => m.GetList()).ReturnsAsync(expectedProviders);

            // Act
            var providerService = new ProviderService(_providerRepositoryMock.Object);
            var result = await providerService.GetList();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(2, result.Count);

            for (int i = 0; i < result.Count; i++)
            {

                Assert.Equal(expectedProviders[i].provider_id_table, result[i].provider_id_table);
                Assert.Equal(expectedProviders[i].providername, result[i].providername);
                Assert.Equal(expectedProviders[i].type, result[i].type);
                Assert.Equal(expectedProviders[i].provideraddress, result[i].provideraddress);
                Assert.Equal(expectedProviders[i].zipcode, result[i].zipcode);
                Assert.Equal(expectedProviders[i].state, result[i].state);
                Assert.Equal(expectedProviders[i].city, result[i].city);
            
            }
        }

        [Fact]
        public async Task GetList_ShouldThrowException_WhenNoProvidersExist()
        {
            // Arrange
            _providerRepositoryMock.Setup(m => m.GetList()).ReturnsAsync(new List<Provider>());

            // Act
            var providerService = new ProviderService(_providerRepositoryMock.Object);

            // Assert
            var exception = await Assert.ThrowsAsync<Exception>(async () => await providerService.GetList());
            Assert.Equal("No se encontraron providers en la base de datos", exception.Message);
        }
    }
}