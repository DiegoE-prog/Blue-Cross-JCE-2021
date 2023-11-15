
using JCE.Business.Dtos.ErrorDtos;

namespace JCE.Business.Services.Interfaces;

public interface IErrorService
{
    Task<GetErrorDto> GetLastId();
    Task<List<GetFieldDto>> GetListField();
    Task<bool> SaveError(ErrorSaveDto errorSaveDto);

    Task<List<GetSearchErrorDto>> GetListSearchError(SearchConditonErrorDto conditonErrorDto);
    Task<List<GetConditionPayorDto>> GetConditionPayor(String payorId);
}
