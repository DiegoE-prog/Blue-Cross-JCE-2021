using JCE.API.Models;
using JCE.Business.Dtos.MemberDtos;
using JCE.Business.Dtos.PayorDtos;
using JCE.Business.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [Route("api/[controller]/")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private readonly IMemberService _memberService;

        public MemberController(IMemberService memberService)
        {
            _memberService = memberService;
        }

        [HttpGet]
        [Route("GetList")]
        public async Task<ActionResult<Response<GetMemberDto>>> GetList()
        {
            var response = new Response<List<GetMemberDto>>();

            try
            {
                var members = await _memberService.GetList();
                response.Success = true;
                response.Data = members;

            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return BadRequest(response);
            }

            return Ok(response);
        }
    }
}
