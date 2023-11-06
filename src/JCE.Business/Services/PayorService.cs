using JCE.Business.Dtos.PayorDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Repository.Interfaces;

namespace JCE.Business.Services;

public class PayorService : IPayorService
{
    private readonly IPayorRepository _payorRepository;

    public PayorService(IPayorRepository payorRepository)
    {
        _payorRepository = payorRepository;
    }

    public async Task<List<GetPayorDto>> GetList()
    {
        var payors = await _payorRepository.GetList();

        if (payors.Any())
        {
            List<GetPayorDto> payorDtos = payors.Select(payor => new GetPayorDto
            {
                payorid = payor.payorid,
                payor_id_table = payor.payor_id_table,
                payorname = payor.payorname,
                payoraddress = payor.payoraddress,
                zipcode = payor.zipcode,
                state = payor.state,
                city = payor.city,
                status = payor.status
            }).ToList();

            return payorDtos;
        }

        throw new Exception(message: "No se encontraron payors en la base de datos");
    }

}
