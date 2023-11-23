
using JCE.Business.Services;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;
using Moq;
using System.Collections.Generic;
using Xunit;

namespace MemberServiceTest.UnitTests
{
    public class MemberServiceTest
    {
        private readonly Mock<IMemberRepository> _memberRepositoryMock;

        public MemberServiceTest()
        {
            _memberRepositoryMock = new Mock<IMemberRepository>();
        }

        [Fact]
        public async Task GetList_ShouldReturnListOfMemberDtos_WhenMemberExist()
        {
            // Arrange
            var expectedMembers = new List<Member>
            {

             new Member { member_id_table = "1000014588", membername = "Ramiro", lastname = "Ortega", sex = "M", memberaddress = "4263  Ritter Street", zipcode = "35816", state = "AL", city = "Huntsville", dob = "4/14/1975", subscribeddate = "12/31/2001" },
            new Member { member_id_table = "1000014587", membername = "John", lastname = "Brando", sex = "M", memberaddress = "Street 123, av 74", zipcode = "10001", state = "NY", city = "New York", dob = "10/31/1987", subscribeddate = "10/10/2000" },
            };
            _memberRepositoryMock.Setup(m => m.GetList()).ReturnsAsync(expectedMembers);

            // Act
            var memberService = new MemberService(_memberRepositoryMock.Object);
            var result = await memberService.GetList();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(2, result.Count);

            for (int i = 0; i < result.Count; i++)
            {

                Assert.Equal(expectedMembers[i].member_id_table, result[i].member_id_table);
                Assert.Equal(expectedMembers[i].membername, result[i].membername);
                Assert.Equal(expectedMembers[i].lastname, result[i].lastname);
                Assert.Equal(expectedMembers[i].sex, result[i].sex);
                Assert.Equal(expectedMembers[i].memberaddress, result[i].memberaddress);
                Assert.Equal(expectedMembers[i].zipcode, result[i].zipcode);
                Assert.Equal(expectedMembers[i].state, result[i].state);
                Assert.Equal(expectedMembers[i].city, result[i].city);
                Assert.Equal(expectedMembers[i].dob, result[i].dob);
                Assert.Equal(expectedMembers[i].subscribeddate, result[i].SubscribedDate);

            }
        }

        [Fact]
        public async Task GetList_ShouldThrowException_WhenNoMembersExist()
        {
            // Arrange
            _memberRepositoryMock.Setup(m => m.GetList()).ReturnsAsync(new List<Member>());

            // Act
            var memberService = new MemberService(_memberRepositoryMock.Object);

            // Assert
            var exception = await Assert.ThrowsAsync<Exception>(async () => await memberService.GetList());
            Assert.Equal("No se encontraron members en la base de datos", exception.Message);
        }
    }
}