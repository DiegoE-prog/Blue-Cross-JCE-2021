using JCE.API.Models;
using JCE.Business.Dtos.ErrorDtos;
using JCE.Business.Dtos.ProfileDtos;
using JCE.Business.Services;
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

        [HttpPost]
        [Route("AddNewError")]
        public async Task<ActionResult<Response<bool>>> AddNewError(ErrorSaveDto errorSaveDto)
        {
            var response = new Response<bool>();

            try
            {
                var save = await _errorService.SaveError(errorSaveDto);
                response.Data = save;
                response.Success = save;

                if (!save)
                {
                    response.Message = "Failed";
                    return BadRequest(response);
                }

            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Unauthorized(response);
            }

            return Ok(response);
        }

        [HttpPost]
        [Route("GetListSearchError")]
        public async Task<ActionResult<Response<GetSearchErrorDto>>> GetListSearchError(SearchConditonErrorDto conditonErrorDto)
        {
            var response = new Response<List<GetSearchErrorDto>>();
            try
            {
                var getSearchErrors = await _errorService.GetListSearchError(conditonErrorDto);
                response.Success = true;
                response.Data = getSearchErrors;

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
        [Route("GetListConditionPayor/{payorId}")]
        public async Task<ActionResult<Response<GetConditionPayorDto>>> GetListConditionPayor(String payorId)
        {
            var response = new Response<List<GetConditionPayorDto>>();

            try
            {
                var conditionPayor = await _errorService.GetConditionPayor(payorId);
                response.Success = true;
                response.Data = conditionPayor;

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
