﻿using JCE.Business.Dtos.AuthDtos;
using JCE.Business.Dtos.ErrorDtos;

namespace JCE.Business.Services.Interfaces;

public interface IErrorService
{
    Task<GetErrorDto> GetLastId();
    Task<List<GetFieldDto>> GetListField();
    Task<bool> SaveError(ErrorSaveDto errorSaveDto);
}
