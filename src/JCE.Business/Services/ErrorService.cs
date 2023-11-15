using JCE.Business.Dtos.AuthDtos;
using JCE.Business.Dtos.ErrorDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository;
using JCE.Data.Repository.Interfaces;
using Microsoft.VisualBasic;

namespace JCE.Business.Services;

public class ErrorService : IErrorService
{
    private readonly IErrorRepository _errorRepository;

    public ErrorService(IErrorRepository errorRepository)
    {
        _errorRepository = errorRepository;
    }

    public async Task<List<GetConditionPayorDto>> GetConditionPayor(string payorId)
    {
        var conditionPayor = await _errorRepository.GetConditionPayor(payorId);

        if (conditionPayor.Any())
        {
            List<GetConditionPayorDto> conditionPayorDtos = conditionPayor.Select(field => new GetConditionPayorDto
            {
                FieldClaim = field.FieldClaim,
                NameCondition = field.NameCondition,
                Value = field.Value
            }).ToList();

            return conditionPayorDtos;
        };

        throw new Exception(message: "ConditionPayor not in the database");
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

    async Task<bool> IErrorService.SaveError(ErrorSaveDto errorSaveDto)
    {
        var success = await _errorRepository.SaveError(new ErrorSave 
                                                                    { 
                                                                        ErrorId = errorSaveDto.ErrorId,
                                                                        UserId = errorSaveDto.UserId,
                                                                        CreatedBy = errorSaveDto.CreatedBy,
                                                                        Message = errorSaveDto.Message,
                                                                        Description = errorSaveDto.Description,
                                                                        Payors = errorSaveDto.Payors,
                                                                        Condition = errorSaveDto.Condition
                                                                      });
        return success;

    }

    public async Task<List<GetSearchErrorDto>> GetListSearchError(SearchConditonErrorDto conditonErrorDto)
    {
        var searchError = await _errorRepository.GetListSearchError(new SearchConditonError {
                                                                        ErrorId = conditonErrorDto.ErrorId,
                                                                        Payor = conditonErrorDto.Payor,
                                                                        Message = conditonErrorDto.Message,
                                                                        Field = conditonErrorDto.Field, 
                                                                        Description = conditonErrorDto.Description,
                                                                        CreateBy = conditonErrorDto.CreateBy
                                                                        });

        if (searchError.Any())
        {
            List<GetSearchErrorDto> searchErrorDtos = searchError.Select(field => new GetSearchErrorDto
            {
               ErrorId = field.ErrorId,
               UserName = field.UserName,
               Message  = field.Message,
               Description  = field.Description,
            }).ToList();

            return searchErrorDtos;
         }

         throw new Exception(message: "No se encontraron searchError en la base de datos");
    }
}
