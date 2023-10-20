using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Helpers;
using Microsoft.Extensions.Options;
using MySqlConnector;
using System.Data;

namespace JCE.Data.Data;

public class MySQLDataContext : IDataContext
{
    private readonly ConnectionString _connectionString;

    public MySQLDataContext(IOptions<ConnectionString> connectionStrings)
    {
        _connectionString = connectionStrings.Value;
    }

    public IDbConnection CreateConnection()
    {
        var connectionString =
            $"Server={_connectionString.Server};Database={_connectionString.Database};" +
            $"Uid={_connectionString.Uid};Pwd={_connectionString.Pwd}";

        return new MySqlConnection(connectionString);
    }

    public async Task Init()
    {
        await InitDatabase();
    }


    private async Task InitDatabase()
    {
        var connectionString =
            $"Server={_connectionString.Server};Uid={_connectionString.Uid};Pwd={_connectionString.Pwd}";

        using var connection = new MySqlConnection(connectionString);
        var sql = $"CREATE DATABASE IF NOT EXISTS {_connectionString.Database}";
        await connection.ExecuteAsync(sql);
    }
}
