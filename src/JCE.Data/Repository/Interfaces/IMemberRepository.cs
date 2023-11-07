using JCE.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JCE.Data.Repository.Interfaces;

public interface IMemberRepository
{
    Task<List<Member>> GetList();
}