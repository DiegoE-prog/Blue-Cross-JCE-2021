

using JCE.Business.Dtos.ClaimDtos;

namespace JCE.Business.Services.Interfaces;

public interface IClaimService
{
    Task<bool> AddClaim(CreateClaimDto claimDto);

}
