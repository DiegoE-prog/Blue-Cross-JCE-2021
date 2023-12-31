﻿using Dapper;
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
        var sql = $"Select * From field where status = 1 ORDER BY name Asc";

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
            var sqlconditiongroup = $"insert into conditiongroup (grouperrorid,fieldid,conditionid,value) values ((select max(grouperrorid) from grouperror), {condition.selectedField}, {condition.selectedValue}, '{condition.fieldValue}')";
            var letra = sqlconditiongroup;
            var affectedRows2 = await connection.ExecuteAsync(sqlconditiongroup);
        }

        return true;
    }
    public async Task<List<SearchError>> GetListSearchError(SearchConditonError searchConditonError)
    {
        using var connection = _context.CreateConnection();

        var conditions = new List<string>();

        // Agregar condiciones básicas
        if (searchConditonError.ErrorId != null)
            conditions.Add($"errorid = {searchConditonError.ErrorId}");
        if (!string.IsNullOrEmpty(searchConditonError.Message))
            conditions.Add($"err.message = '{searchConditonError.Message}'");
        if (!string.IsNullOrEmpty(searchConditonError.Description))
            conditions.Add($"err.description = '{searchConditonError.Description}'");
        if (!string.IsNullOrEmpty(searchConditonError.CreateBy))
            conditions.Add($"err.username = '{searchConditonError.CreateBy}'");
        if (!string.IsNullOrEmpty(searchConditonError.Payor))
            conditions.Add($"p.payor_id_table = '{searchConditonError.Payor}'");
        if (!string.IsNullOrEmpty(searchConditonError.Field))
            conditions.Add($"f.name = '{searchConditonError.Field}'");

        var sql = $@"
        SELECT err.errorid, err.username, err.message, err.description 
        FROM error err
        {(conditions.Count > 0 ? "WHERE " + string.Join(" AND ", conditions) : "")} And err.status = 1 ORDER BY err.errorid DESC";

        // Ejecutar la consulta
        var searchErrors = await connection.QueryAsync<SearchError>(sql);

        return searchErrors.ToList();
    }

    public async Task<List<ConditionPayor>> GetConditionPayor(string payorId)
    {
        using var connection = _context.CreateConnection();
        var sql = $"select DISTINCT f.name fieldClaim, c.name nameCondition, cg.value value, er.message message, er.description description from grouperror gp inner join error er on gp.errorid = er.errorid inner join conditiongroup cg on gp.grouperrorid = cg.grouperrorid inner join field f on  cg.fieldid = f.fieldid inner join `condition` c on c.conditionid = cg.conditionid Where gp.errorid in (select pl.errorid from payorlist pl inner join payor p on p.payorid = pl.payorid Where p.payor_id_table = '{payorId}') ";

        var conditions = await connection.QueryAsync<ConditionPayor>(sql);

        return conditions.ToList();
    }

    public async Task<List<SearchError>> GetListAllError()
    {
        using var connection = _context.CreateConnection();
        var sql = $" select errorid, username, message,description from error where status = 1 ORDER BY errorid desc";

        var errors = await connection.QueryAsync<SearchError>(sql);

        return errors.ToList();
    }
    public async Task<bool> DeleteError(int errorId)
    {
        using var connection = _context.CreateConnection();

        var sql = $"Update error set status = 0 Where errorid = @errorId";

        var affectedRows = await connection.ExecuteAsync(sql, new { errorId });

        return affectedRows > 0;
    }

    // Diego's Methods

    public async Task<SearchError> GetErrorByIdAsync(string errorId)
    {
        using var connection = _context.CreateConnection();
        var sql = $"SELECT errorid, username, message, description FROM error WHERE errorid = @errorid";

        var error = await connection.QueryAsync<SearchError>(sql, new { errorid = errorId });

        return error.FirstOrDefault();
    }

    public async Task<List<ConditionUpdate>> GetConditionsForError(string errorId)
    {
        using var connection = _context.CreateConnection();
        var sql = $"SELECT err.errorid, fi.fieldid AS 'field', c.conditionid AS 'condition', cg.value AS 'value' FROM error err " +
                  $"INNER JOIN grouperror gro ON err.errorid = gro.errorid " +
                  $"INNER JOIN conditiongroup cg ON gro.grouperrorid = cg.grouperrorid " +
                  $"INNER JOIN field fi ON fi.fieldid = cg.fieldid " +
                  $"INNER JOIN `condition` c ON c.conditionid = cg.conditionid " +
                  $"WHERE err.errorid = @errorid";

        var error = await connection.QueryAsync<ConditionUpdate>(sql, new { errorid = errorId });

        return error.ToList();
    }

    public async Task<bool> UpdateError(ErrorUpdate errorUpdate)
    {
        using var connection = _context.CreateConnection();
        var errorid = errorUpdate.ErrorId;

        var sqlDeletePayors = $"DELETE FROM payorlist " +
                              $"WHERE errorid = @errorid;";
        await connection.ExecuteAsync(sqlDeletePayors, new { errorid });

        var sqlDeleteConditions = $"DELETE FROM conditiongroup " +
                                  $"WHERE grouperrorid =  " +
                                  $"(SELECT grouperrorid FROM grouperror WHERE errorid= @errorid); ";
        await connection.ExecuteAsync(sqlDeleteConditions, new { errorid });

        var sqlDeleteGroups = $"DELETE FROM grouperror WHERE errorid = @errorid;";
        await connection.ExecuteAsync(sqlDeleteGroups, new { errorid });

        // Insertar en tabla grouperror
        var sqlgrouperror = $"INSERT INTO grouperror (errorid,selectid, textselect) VALUES " +
                            $"(@errorid,0,'NO GROUP')";
        var affectedRows1 = await connection.ExecuteAsync(sqlgrouperror, new { errorid });

        foreach (var payor in errorUpdate.Payors)
        {
            var sqlpayorlist = $"INSERT INTO payorlist (errorid, payorid) VALUES " +
                               $"(@errorid, @payor)";
            await connection.ExecuteAsync(sqlpayorlist, new { errorid, payor });
        }

        foreach (var condition in errorUpdate.Condition)
        {
            var sqlconditiongroup = $"INSERT INTO conditiongroup (grouperrorid,fieldid,conditionid,value) VALUES " +
                                    $"((select max(grouperrorid) from grouperror), {condition.selectedField}, {condition.selectedValue}, '{condition.fieldValue}')";
            await connection.ExecuteAsync(sqlconditiongroup);
        }

        return affectedRows1 > 0;
    }
}