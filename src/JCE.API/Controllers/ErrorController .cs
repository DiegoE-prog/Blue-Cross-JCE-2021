using JCE.API.Models;
using JCE.Business.Dtos.ErrorDtos;
using JCE.Business.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [Route("api/[controller]/")]
    [ApiController]
    public class ErrorController : ControllerBase
    {
        private readonly IErrorService _errorService;

        public ErrorController(IErrorService errorService)
        {
            _errorService = errorService;
        }

        [HttpGet ]
        [Route("GetLastId")]
        public async Task<ActionResult<Response<GetErrorDto>>> GetLastId()
        {
            var response = new Response<GetErrorDto>();  
            
            try
            {
                var error = await _errorService.GetLastId();
                response.Success = true;
                response.Data = error;

            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return BadRequest(response);
            }

            return Ok(response);
        }

        [HttpGet]
        [Route("GetListField")]
        public async Task<ActionResult<Response<GetFieldDto>>> GetListField()
        {
            var response = new Response<List<GetFieldDto>>();

            try
            {
                var fields = await _errorService.GetListField();
                response.Success = true;
                response.Data = fields;

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
