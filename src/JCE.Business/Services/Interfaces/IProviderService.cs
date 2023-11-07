
using JCE.Business.Dtos.ProviderDtos;

namespace JCE.Business.Services.Interfaces;

public interface IProviderService
{
    Task<List<GetProviderDto>> GetList();
}
