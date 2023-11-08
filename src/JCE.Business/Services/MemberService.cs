using JCE.Business.Dtos.MemberDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Repository.Interfaces;

namespace JCE.Business.Services;

public class MemberService : IMemberService
{
    private readonly IMemberRepository _memberRepository;

    public MemberService(IMemberRepository memberRepository)
    {
        _memberRepository = memberRepository;
    }

    public async Task<List<GetMemberDto>> GetList()
    {
        var members = await _memberRepository.GetList();

        if (members.Any())
        {
            List<GetMemberDto> memberDtos = members.Select(member => new GetMemberDto
            {
                memberid = member.memberid,
                member_id_table = member.member_id_table,
                membername = member.membername,
                lastname= member.lastname,
                sex = member.sex,
                memberaddress = member.sex,
                zipcode = member.zipcode,
                state = member.state,
                city = member.city,
                dob = member.dob,
                SubscribedDate = member.subscribeddate,
                status = member.status
            }).ToList();

            return memberDtos;
        }

        throw new Exception(message: "No se encontraron members en la base de datos");
    }

}
