using JCE.API.Models;
using JCE.Business.Dtos.ProfileDtos;
using JCE.Business.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController: ControllerBase
    {
        private readonly IProfileService _profileService;

        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }

        [HttpGet]
        [Route("GetUserProfile/{userid}")]
        public async Task<ActionResult<Response<GetProfileDto>>> GetUserProfile(int userid)
        {
            var response = new Response<GetProfileDto>();

            try
            {
                var profile = await _profileService.getUserProfile(userid);
                response.Success = true;
                response.Data = profile;

            }catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Unauthorized(response);
            }

            return Ok(response);
        }
    }
}