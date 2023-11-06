﻿using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;

public interface IErrorRepository
{
    Task<Error> GetLastId();
    Task<List<Field>> GetListField();
}
