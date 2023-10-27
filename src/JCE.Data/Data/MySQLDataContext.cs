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
        await InitTableUsers();
    }


    private async Task InitDatabase()
    {
        var connectionString =
            $"Server={_connectionString.Server};Uid={_connectionString.Uid};Pwd={_connectionString.Pwd}";

        using var connection = new MySqlConnection(connectionString);
        var sql = $"CREATE DATABASE IF NOT EXISTS {_connectionString.Database}";
        await connection.ExecuteAsync(sql);
    }

    private async Task InitTableUsers()
    {
        var connectionString =
            $"Server={_connectionString.Server};Database={_connectionString.Database};" +
            $"Uid={_connectionString.Uid};Pwd={_connectionString.Pwd}";

        using var connection = new MySqlConnection(connectionString);
        var sql = $"CREATE TABLE IF NOT EXISTS user(" +
                  $"Id int AUTO_INCREMENT primary key," +
                  $"Username varchar(255) not null," +
                  $"Password varchar(255) not null," +
                  $"Role char(1) not null," +
                  $"ExpireDate date not null," +
                  $"UserStatus char(1) not null);";

        await connection.ExecuteAsync(sql);
    }
}
