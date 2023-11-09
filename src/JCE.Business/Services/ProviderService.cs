using JCE.Business.Dtos.ProviderDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Repository.Interfaces;

namespace JCE.Business.Services;

public class ProviderService : IProviderService
{
    private readonly IProviderRepository _providerRepository;

    public ProviderService(IProviderRepository providerRepository)
    {
        _providerRepository = providerRepository;
    }

    public async Task<List<GetProviderDto>> GetList()
    {
        var providers = await _providerRepository.GetList();

        if (providers.Any())
        {
            List<GetProviderDto> providerDtos = providers.Select(provider => new GetProviderDto
            {
                providerid = provider.providerid,
                provider_id_table = provider.provider_id_table,
                providername= provider.providername,
                type = provider.type,
                provideraddress = provider.provideraddress,
                zipcode = provider.zipcode,
                state = provider.state,
                city = provider.city,
                status = provider.status
            }).ToList();

            return providerDtos;
        }

        throw new Exception(message: "No se encontraron providers en la base de datos");
    }

}
