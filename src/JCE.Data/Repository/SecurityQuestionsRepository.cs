using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Data.Repository;
public class SecurityQuestionsRepository : ISecurityQuestionsRepository
{
    private readonly IDataContext _context;

    public SecurityQuestionsRepository(IDataContext context)
    {
        _context = context;
    }

    #nullable enable
    public async Task<SecurityQuestions?> GetSecurityQuestions(int userid)
    {
        using var connection = _context.CreateConnection();

        var sql = $"SELECT * FROM securityquestions WHERE userid = @userid";

        return await connection.QueryFirstOrDefaultAsync<SecurityQuestions>(sql, new {userid});
    }
    #nullable disable

    public async Task<bool> UpdateSecurityQuestions(SecurityQuestions update)
    {
        using var connection = _context.CreateConnection();

        var sql = $@"UPDATE securityquestions SET 
        q1answer = @q1answer, 
        q2answer = @q2answer, 
        q3answer = @q3answer, 
        q4answer = @q4answer, 
        q5answer = @q5answer, 
        q6answer = @q6answer, 
        q7answer = @q7answer, 
        q8answer = @q8answer  
        WHERE userid = @userid";

        var affectedRows = await connection.ExecuteAsync(sql, new {
            userid = update.UserId,
            q1answer = update.Q1Answer,
            q2answer = update.Q2Answer,
            q3answer = update.Q3Answer,
            q4answer = update.Q4Answer,
            q5answer = update.Q5Answer,
            q6answer = update.Q6Answer,
            q7answer = update.Q7Answer,
            q8answer = update.Q8Answer,
        });

        return affectedRows > 0;
    }
}
