using Microsoft.Extensions.Options;
using MySqlConnector;
using System.Data;

namespace JCE.Data.Helpers;

public class DataContext
{
    private readonly ConnectionStrings _connectionStrings;

    public DataContext(IOptions<ConnectionStrings> connectionStrings)
    {
        _connectionStrings = connectionStrings.Value;
    }

    public IDbConnection CreateConnection()
    {
        return new MySqlConnection(_connectionStrings.DefaultConnection);
    }
}
