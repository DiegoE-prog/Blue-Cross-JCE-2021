
using JCE.Business.Dtos.MemberDtos;

namespace JCE.Business.Services.Interfaces;

public interface IMemberService
{
    Task<List<GetMemberDto>> GetList();
}
