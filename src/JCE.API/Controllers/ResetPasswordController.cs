using JCE.API.Models;
using JCE.Business.Dtos.ErrorDtos;
using JCE.Business.Dtos.ProfileDtos;
using JCE.Business.Services;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [Route("api/[controller]/")]
    [ApiController]
    public class ResetPasswordController : ControllerBase
    {
        private readonly IResetPasswordService _resetPasswordService;

        public ResetPasswordController(IResetPasswordService resetPasswordService)
        {
            _resetPasswordService = resetPasswordService;
        }

        [HttpGet]
        [Route("GetValidateIfHaveQuestion/{userId}")]
        public async Task<ActionResult<Response<int>>> GetValidateIfHaveQuestion(int userId)
        {
            var response = new Response<int>();
            try
            {
                var validationResult = await _resetPasswordService.ValidateIfHaveQuestion(userId);

                response.Success = true;
                response.Data = validationResult;
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
