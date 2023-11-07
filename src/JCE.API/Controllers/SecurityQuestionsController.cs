using JCE.API.Models;
using JCE.Business.Dtos.SecurityQuestionsDtos;
using JCE.Business.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecurityQuestionsController: ControllerBase
    {
        private readonly ISecurityQuestionsService _securityQuestionsService;

        public SecurityQuestionsController(ISecurityQuestionsService securityQuestionsService)
        {
            _securityQuestionsService = securityQuestionsService;
        }

        [HttpGet]
        [Route("{userid}")]
        public async Task<ActionResult<Response<GetSecurityQuestionsDto>>> GetSecurityQuestions(int userid)
        {
            var response = new Response<GetSecurityQuestionsDto>();

            try{
                var squestions = await _securityQuestionsService.getSecurityQuestions(userid);
                response.Success = true;
                response.Data = squestions;
            }
            catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Unauthorized(response);
            }

            return Ok(response);

        }

        [HttpPatch]
        public async Task<ActionResult<Response<bool>>> UpdateSecurityQuestions(UpdateSecurityQuestionsDto update)
        {
            var response = new Response<bool>();

            try{
                var squestionsUpdate = await _securityQuestionsService.updateSecurityQuestions(update);
                response.Data = squestionsUpdate;
                response.Success = squestionsUpdate;
                
                if(!squestionsUpdate){
                    response.Message = "Failed to update security questions";
                    return BadRequest(response);
                }
                
            }
            catch(Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Unauthorized(response);
            }

            return Ok(response);

        }
    }
}

