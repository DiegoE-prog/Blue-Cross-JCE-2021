using JCE.Business.Dtos.ErrorDtos;
using JCE.Data.Entities;

namespace JCE.Business.Services.Interfaces;

public interface IErrorService
{
    Task<GetErrorDto> GetLastId();
    Task<List<GetFieldDto>> GetListField();    
}
