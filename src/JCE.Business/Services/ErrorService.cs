using JCE.Business.Dtos.ErrorDtos;
using JCE.Business.Services.Interfaces;
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

    public async Task<List<GetFieldDto>> GetListField()
    {
        var fields = await _errorRepository.GetListField();

        if (fields.Any())
        {
            List<GetFieldDto> fieldDtos = fields.Select(field => new GetFieldDto
            {
                Fieldid = field.Fieldid,
                Name = field.Name,
                Fielddb = field.Fielddb,
                Status = field.Status
            }).ToList();

            return fieldDtos;
        }

        throw new Exception(message: "No se encontraron fields en la base de datos");
    }
}
