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
        public async Task<ActionResult<Response<GetProfileDto>>> GetUserProfile(int userid)
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
        [Route("search")]
        public async Task<ActionResult<Response<GetProfileDto>>> GetUserProfilesByFilter([FromQuery] GetProfileDto filter)
        {
            var response = new Response<List<GetProfileDto>>();
            System.Diagnostics.Debug.WriteLine(filter);
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

            //Establish the predetermined password
            
            //Generate a random special character
            Random rnd = new Random();
            int randomCharIndex = rnd.Next(0,5);
            string randomChar = "";

            switch(randomCharIndex){
                case 0:
                randomChar = "@";
                break;

                case 1:
                randomChar = "#";
                break;

                case 2:
                randomChar = "$";
                break;

                case 3:
                randomChar = "%";
                break;

                case 4:
                randomChar = "&";
                break;
            }

            string autoPassword = "Temp" + user.Name[0] + user.LastName[0] + randomChar + user.Phone.Substring(6);
            user.Password = autoPassword;

            //Establish the expiration date. The current set value is a year after the date the user is created
            user.ExpireDate = DateTime.Now.AddYears(1);

            try
            {
                var createdUser = await _profileService.CreateUserProfile(user);
                response.Data = new SuccesfulCreatedProfileDto{
                    Username = user.Username,
                    Password = user.Password
                };
                response.Success = createdUser;

                if(!createdUser){
                    response.Message = "Failed to create user";
                    return BadRequest(response);
                }

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

                if(!profileUpdate){
                    response.Message = "Failed to update the phone and email of the user";
                    return BadRequest(response);
                }

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

                if(!profileUpdate){
                    response.Message = "Failed to delete the user";
                    return BadRequest(response);
                }

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