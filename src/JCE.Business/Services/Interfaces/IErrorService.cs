using JCE.Business.Dtos.ErrorDtos;
namespace JCE.Business.Services.Interfaces;

public interface IErrorService
{
    Task<GetErrorDto> GetLastId();
}
