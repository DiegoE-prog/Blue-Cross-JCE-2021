using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using Moq;
using Moq.Dapper;
using Xunit;

namespace JCE.Data.Repository.Tests
{
    public class ProviderRepositoryTest
    {
        [Fact]
        public async Task GetList_ShouldReturnAllProviders()
        {
            // Arrange
            var mockDataContext = new Mock<IDataContext>();

            var expectedProviders = new List<Provider>()
            {
                new Provider() { provider_id_table = "5887000048", providername = "Dr Robert Walt" },
                new Provider() { provider_id_table = "5887000049", providername = "MCS Center" },
            };

            // Utiliza una instancia real de IDbConnection para la configuración del DataContext
            var mockConnection = new Mock<IDbConnection>();
            mockDataContext.Setup(m => m.CreateConnection()).Returns(mockConnection.Object);

            // Configuración de Dapper QueryAsync utilizando Moq.Dapper
            mockConnection.SetupDapperAsync(c => c.QueryAsync<Provider>(
                "SELECT * FROM Providers",
                null,
                null,
                null,
                CommandType.Text)).ReturnsAsync(expectedProviders);

            var providerRepository = new ProviderRepository(mockDataContext.Object);

            // Act
            var actualProviders = await providerRepository.GetList();

            // Assert
            Assert.Equal(expectedProviders, actualProviders, new ProviderComparer());
        }
    }

    // Clase MemberComparer para comparar objetos Member en las aserciones
    public class ProviderComparer : IEqualityComparer<Provider>
    {
        public bool Equals(Provider x,Provider y)
        {
            if (ReferenceEquals(x, y)) return true;
            if (x == null || y == null) return false;

            return x.provider_id_table == y.provider_id_table && x.providername == y.providername;
        }

        public int GetHashCode(Provider obj)
        {
            return obj.provider_id_table.GetHashCode() ^ obj.providername.GetHashCode();
        }
    }
}
