using JCE.API.Models;
using JCE.Business.Dtos.ClaimDtos;
using JCE.Business.Services;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JCE.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClaimController : ControllerBase
    {
        private readonly IClaimService _claimService;

        public ClaimController(IClaimService claimService)
        {
            _claimService = claimService;
        }

        [HttpPost]
        public async Task <ActionResult<Response<bool>>> CreateClaim(CreateClaimDto createClaimDto)
        {
            var response = new Response<bool>();
            try
            {
                var createdClaim = await _claimService.AddClaim(createClaimDto);
                response.Data = true;
                response.Success = true;
            }
            catch (Exception ex) {
                response.Success = false;
                response.Message = ex.Message;
                return BadRequest(response);
            
            }

            return Ok(response);
        }
    }
}
