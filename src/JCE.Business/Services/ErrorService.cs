using JCE.Business.Dtos.ErrorDtos;
using JCE.Business.Dtos.PayorDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Business.Services;

public class ErrorService : IErrorService
{
    private readonly IErrorRepository _errorRepository;
    private readonly IPayorRepository _payorRepository;

    public ErrorService(IErrorRepository errorRepository, IPayorRepository payorRepository)
    {
        _errorRepository = errorRepository;
        _payorRepository = payorRepository;
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
                Value = field.Value,
                Message = field.Message,
                Description = field.Description
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
            return new GetErrorDto { Errorid = error.Errorid };
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
        var searchError = await _errorRepository.GetListSearchError(new SearchConditonError
        {
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
                Message = field.Message,
                Description = field.Description,
            }).ToList();

            return searchErrorDtos;
        }

        throw new Exception(message: "No se encontraron searchError en la base de datos");
    }

    public async Task<List<GetSearchErrorDto>> GetListAllError()
    {
        var fields = await _errorRepository.GetListAllError();

        if (fields.Any())
        {
            List<GetSearchErrorDto> fieldDtos = fields.Select(field => new GetSearchErrorDto
            {
                ErrorId = field.ErrorId,
                UserName = field.UserName,
                Message = field.Message,
                Description = field.Description
            }).ToList();

            return fieldDtos;
        }

        throw new Exception(message: "No se encontraron Errores en la base de datos");
    }

    public async Task<bool> DeleteError(int errorId)
    {
        var success = await _errorRepository.DeleteError(errorId);

        if (!success)
            throw new Exception(message: "Failed to delete the error");

        return success;
    }

    // Diego's Methods
    public async Task<GetErrorToUpdateDto> GetErrorByIdAsync(string errorId)
    {
        var error = await _errorRepository.GetErrorByIdAsync(errorId);

        if (error is not null)
        {
            var payors = await _payorRepository.GetPayorsByErrorId(errorId);
            var conditions = await _errorRepository.GetConditionsForError(errorId);

            List<GetPayorForErrorToUpdateDto> payorsDto = payors.Select(payor => new GetPayorForErrorToUpdateDto
            {
                payorid = payor.payorid,
                payor_id_table = payor.payor_id_table
            }).ToList();

            List<GetConditionsFoErrorToUpdateDto> conditionsDto = conditions.Select(condition => new GetConditionsFoErrorToUpdateDto
            {
                Condition = condition.Condition,
                Field = condition.Field,
                Value = condition.Value
            }).ToList();

            return new GetErrorToUpdateDto
            {
                ErrorId = error.ErrorId,
                CreatedBy = error.UserName,
                Message = error.Message,
                Description = error.Description,
                Payors = payorsDto,
                Conditions = conditionsDto
            };
        }

        throw new Exception(message: "Error not found");
    }

    public Task<bool> UpdateError(ErrorUpdateDto errorUpdateDto)
    {
        var errorToUpdate = new ErrorUpdate()
        {
            ErrorId = errorUpdateDto.ErrorId,
            Payors = errorUpdateDto.Payors,
            Condition = errorUpdateDto.Conditions
        };

        var success = _errorRepository.UpdateError(errorToUpdate);

        return success;
    }
}
