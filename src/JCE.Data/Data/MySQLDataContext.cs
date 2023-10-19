using JCE.Data.Data.Interfaces;
using JCE.Data.Helpers;
using Microsoft.Extensions.Options;
using MySqlConnector;
using System.Data;

namespace JCE.Data.Data;

public class MySQLDataContext : IDataContext
{
    private readonly ConnectionStrings _connectionString;

    public MySQLDataContext(IOptions<ConnectionStrings> connectionStrings)
    {
        _connectionString = connectionStrings.Value;
    }

    public IDbConnection CreateConnection()
    {
        return new MySqlConnection(_connectionString.DefaultConnection);
    }
}
