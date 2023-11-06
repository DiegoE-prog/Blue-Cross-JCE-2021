
using JCE.Business.Dtos.PayorDtos;

namespace JCE.Business.Services.Interfaces;

public interface IPayorService
{
    Task<List<GetPayorDto>> GetList();
}
