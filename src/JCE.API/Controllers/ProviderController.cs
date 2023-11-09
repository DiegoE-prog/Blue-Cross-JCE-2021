using JCE.API.Models;
using JCE.Business.Dtos.PayorDtos;
using JCE.Business.Dtos.ProviderDtos;
using JCE.Business.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [Route("api/[controller]/")]
    [ApiController]
    public class ProviderController : ControllerBase
    {
        private readonly IProviderService _providerService;

        public ProviderController(IProviderService providerService)
        {
            _providerService = providerService;
        }

        [HttpGet]
        [Route("GetList")]
        public async Task<ActionResult<Response<GetProviderDto>>> GetList()
        {
            var response = new Response<List<GetProviderDto>>();

            try
            {
                var providers = await _providerService.GetList();
                response.Success = true;
                response.Data = providers;

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
