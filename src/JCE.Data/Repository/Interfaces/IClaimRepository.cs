using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;

public interface IClaimRepository
{
    Task<bool> AddClaim(Claim claim);
    Task<int> GetLastClaim();
}
