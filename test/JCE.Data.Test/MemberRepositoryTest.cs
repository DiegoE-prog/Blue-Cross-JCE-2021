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
    public class MemberRepositoryTest
    {
        [Fact]
        public async Task GetList_ShouldReturnAllMembers()
        {
            // Arrange
            var mockDataContext = new Mock<IDataContext>();

            var expectedMembers = new List<Member>()
            {
                new Member() { member_id_table = "1000014587", membername = "John" },
                new Member() { member_id_table = "1000014588", membername = "Ramiro" },
            };

            // Utiliza una instancia real de IDbConnection para la configuración del DataContext
            var mockConnection = new Mock<IDbConnection>();
            mockDataContext.Setup(m => m.CreateConnection()).Returns(mockConnection.Object);

            // Configuración de Dapper QueryAsync utilizando Moq.Dapper
            mockConnection.SetupDapperAsync(c => c.QueryAsync<Member>(
                "SELECT * FROM Members",
                null,
                null,
                null,
                CommandType.Text)).ReturnsAsync(expectedMembers);

            var memberRepository = new MemberRepository(mockDataContext.Object);

            // Act
            var actualMembers = await memberRepository.GetList();

            // Assert
            Assert.Equal(expectedMembers, actualMembers, new MemberComparer());
        }
    }

    // Clase MemberComparer para comparar objetos Member en las aserciones
    public class MemberComparer : IEqualityComparer<Member>
    {
        public bool Equals(Member x, Member y)
        {
            if (ReferenceEquals(x, y)) return true;
            if (x == null || y == null) return false;

            return x.member_id_table == y.member_id_table && x.membername == y.membername;
        }

        public int GetHashCode(Member obj)
        {
            return obj.member_id_table.GetHashCode() ^ obj.membername.GetHashCode();
        }
    }
}

