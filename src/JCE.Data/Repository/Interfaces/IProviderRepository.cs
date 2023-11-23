using JCE.Data.Entities;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace JCE.Data.Repository.Interfaces;

public interface IProviderRepository
{
    Task<List<Provider>> GetList();
    IDbConnection Database { get; }
    object database { get; }
}
