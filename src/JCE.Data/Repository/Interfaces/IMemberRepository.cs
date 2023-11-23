using JCE.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JCE.Data.Repository.Interfaces;

public interface IMemberRepository
{
    object jceappdb { get; set; }

    Task<List<Member>> GetList();
}