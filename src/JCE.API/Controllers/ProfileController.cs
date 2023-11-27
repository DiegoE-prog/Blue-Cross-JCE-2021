using JCE.API.Models;
using JCE.Business;
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
        [Route("{userid}")]
        public async Task<ActionResult<Response<GetProfileDto>>> GetUserProfileById(int userid)
        {
            var response = new Response<GetProfileDto>();

            try
            {
                var profile = await _profileService.GetUserProfileById(userid);
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

        [HttpGet]
        [Route("username/{username}")]
        public async Task<ActionResult<Response<GetProfileDto>>> GetUserProfileByUsername(string username)
        {
            var response = new Response<GetProfileDto>();

            try
            {
                var profile = await _profileService.GetUserProfileByUsername(username);
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

        [HttpGet]
        [Route("search")]
        public async Task<ActionResult<Response<GetProfileDto>>> GetUserProfilesByFilter([FromQuery] GetProfileDto filter)
        {
            var response = new Response<List<GetProfileDto>>();
            try
            {
                var users = await _profileService.GetUserProfilesByFilter(filter);
                response.Success = true;
                response.Data = users;

            }catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Unauthorized(response);
            }

            return Ok(response);
        }

        [HttpPost]
        [Route("create")]
        public async Task<ActionResult<Response<SuccesfulCreatedProfileDto>>> CreateUserProfile(CreateProfileDto user)
        {
            var response = new Response<SuccesfulCreatedProfileDto>();
            try
            {
                var createdUser = await _profileService.CreateUserProfile(user);
                response.Data = createdUser;
                response.Success = true;

            }catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Unauthorized(response);
            }

            return Ok(response);
        }

        [HttpPatch]
        [Route("reset-password/{userid}")]
        public async Task<ActionResult<Response<SuccesfullyResetPasswordDto>>> ResetUserPassword(int userid)
        {
            var response = new Response<SuccesfullyResetPasswordDto>();

            try
            {
                var profileUpdate = await _profileService.ResetUserPassword(userid);
                response.Data = profileUpdate;
                response.Success = true;

            }catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Unauthorized(response);
            }

            return Ok(response);
        }

        [HttpPatch]
        [Route("phone-email")]
        public async Task<ActionResult<Response<bool>>> UpdatePhoneAndEmail(UpdatePhoneAndEmailDto update)
        {
            var response = new Response<bool>();

            try
            {
                var profileUpdate = await _profileService.UpdatePhoneAndEmail(update);
                response.Data = profileUpdate;
                response.Success = profileUpdate;

            }catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Unauthorized(response);
            }

            return Ok(response);
        }

        [HttpDelete]
        [Route("{userid}")]
        public async Task<ActionResult<Response<bool>>> DeleteUserProfile(int userid )
        {
            var response = new Response<bool>();

            try
            {
                var profileUpdate = await _profileService.DeleteUserProfile(userid);
                response.Data = profileUpdate;
                response.Success = profileUpdate;

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