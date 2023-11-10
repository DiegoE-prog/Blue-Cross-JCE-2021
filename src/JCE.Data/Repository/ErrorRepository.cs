using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;
using Microsoft.VisualBasic;
using System.Reflection.PortableExecutable;

namespace JCE.Data.Repository;

public class ErrorRepository : IErrorRepository
{
    private readonly IDataContext _context;

    public ErrorRepository(IDataContext context)
    {
        _context = context;
    }
    
    public async Task<Error> GetLastId()
    {
        using var connection = _context.CreateConnection();
        var sql = $"SELECT COALESCE(MAX(errorid), 0) + 1 AS errorid,userid,username,message,description,status FROM error";

        var errors = await connection.QueryAsync<Error>(sql);

        return errors.First();
    }

    public async Task<List<Field>> GetListField()
    {
        using var connection = _context.CreateConnection();
        var sql = $"Select * From field where status = 1";

        var fields = await connection.QueryAsync<Field>(sql);

        return fields.ToList();
    }

    public async Task<bool> SaveError(ErrorSave errorSave)
    {
        using var connection = _context.CreateConnection();

        // Insertar en tabla error
        var sql = $"insert into error (userid,username,message,description) values ({errorSave.UserId},'{errorSave.CreatedBy}', '{errorSave.Message}', '{errorSave.Description}')";
        var affectedRows = await connection.ExecuteAsync(sql);

        // Insertar en tabla grouperror
        var sqlgrouperror = $"insert into grouperror (errorid,selectid, textselect) values ((select max(errorid) from error),0,'NO GROUP')";
        var affectedRows1 = await connection.ExecuteAsync(sqlgrouperror);

        foreach (var payor in errorSave.Payors)
        {
            var sqlpayorlist = $"insert into payorlist (errorid, payorid) values ((select max(errorid) from error), {payor})";
            var affectedRows2 = await connection.ExecuteAsync(sqlpayorlist);
        }

        foreach (var condition in errorSave.Condition)
        {
            var sqlconditiongroup= $"insert into conditiongroup (grouperrorid,fieldid,conditionid,value) values ((select max(grouperrorid) from grouperror), {condition.selectedField}, {condition.selectedValue}, '{condition.fieldValue}')";
            var letra = sqlconditiongroup;
            var affectedRows2 = await connection.ExecuteAsync(sqlconditiongroup);
        }

        return true;
    }
    public async Task<List<SearchError>> GetListSearchError(SearchConditonError searchConditonError)
    {
        using var connection = _context.CreateConnection();
        var sql = $"select DISTINCT * From (select errorid, username, message, description from error Where errorid = {searchConditonError.ErrorId} UNION ALL select errorid, username, message, description from error Where message = '{searchConditonError.Message}'  UNION ALL select errorid, username, message, description from error Where description = '{searchConditonError.Description}' UNION ALL select errorid, username, message, description from error Where username = '{searchConditonError.CreateBy}'  UNION ALL  select err.errorid, err.username, err.message, err.description from error err inner join grouperror gro on err.errorid = gro.errorid inner join conditiongroup cg on gro.grouperrorid = cg.grouperrorid inner join field fi on fi.fieldid = cg.fieldid Where fi.name = '{searchConditonError.Field}' UNION ALL  select err.errorid, err.username, err.message, err.description from error err inner join payor pa on err.errorid = pa.payorid Where pa.payor_id_table in ('{searchConditonError.Payor}'))AS CombinedData";
        var searchErrors = await connection.QueryAsync<SearchError>(sql);
        return searchErrors.ToList();
    }

}