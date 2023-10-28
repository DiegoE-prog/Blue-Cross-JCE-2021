using JCE.API.Models;
using JCE.Business.Dtos.AuthDtos;
using JCE.Business.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        public async Task<ActionResult<Response<GetAuthDto>>> Login(AuthDto authDto)
        {
            var response = new Response<GetAuthDto>();  
            
            try
            {
                var user = await _authService.Login(authDto);
                response.Success = true;
                response.Data = user;
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
