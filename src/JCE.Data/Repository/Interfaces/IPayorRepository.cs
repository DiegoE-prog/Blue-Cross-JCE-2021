using JCE.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JCE.Data.Repository.Interfaces;

public interface IPayorRepository
{
    Task<List<Payor>> GetList();
    Task<List<Payor>> GetPayorsByErrorId(string errorId);
}
