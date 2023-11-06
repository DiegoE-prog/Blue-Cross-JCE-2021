﻿using JCE.API.Models;
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

        [HttpPatch]
        [Route("phone-email")]
        public async Task<ActionResult<Response<bool>>> UpdatePhoneAndEmail(UpdatePhoneAndEmailDto update)
        {
            var response = new Response<bool>();

            try
            {
                var profileUpdate = await _profileService.updatePhoneAndEmail(update);
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
        
    }
}