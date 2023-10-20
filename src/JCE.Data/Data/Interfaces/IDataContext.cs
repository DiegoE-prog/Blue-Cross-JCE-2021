using System.Data;

namespace JCE.Data.Data.Interfaces;

public interface IDataContext
{
    IDbConnection CreateConnection();
    Task Init();
}
