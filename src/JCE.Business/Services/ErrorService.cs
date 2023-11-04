using JCE.Business.Dtos.ErrorDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Business.Services;

public class ErrorService : IErrorService
{
    private readonly IErrorRepository _errorRepository;

    public ErrorService(IErrorRepository errorRepository)
    {
        _errorRepository = errorRepository;
    }

    public async Task<GetErrorDto> GetLastId() 
    {
        var error = await _errorRepository.GetLastId();

        if (error != null)
        {
            return new GetErrorDto { Errorid = error.Errorid};
        }

        throw new Exception(message: "ErrorId not in the database");
    }

}
