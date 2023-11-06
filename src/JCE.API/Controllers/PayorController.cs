using JCE.API.Models;
using JCE.Business.Dtos.PayorDtos;
using JCE.Business.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [Route("api/[controller]/")]
    [ApiController]
    public class PayorController : ControllerBase
    {
        private readonly IPayorService _payorService;

        public PayorController(IPayorService payorService)
        {
            _payorService = payorService;
        }

        [HttpGet]
        [Route("GetList")]
        public async Task<ActionResult<Response<GetPayorDto>>> GetList()
        {
            var response = new Response<List<GetPayorDto>>();

            try
            {
                var payors = await _payorService.GetList();
                response.Success = true;
                response.Data = payors;

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
