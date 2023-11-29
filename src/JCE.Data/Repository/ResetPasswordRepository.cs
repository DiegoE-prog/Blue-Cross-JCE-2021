using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Data.Repository
{
    public class ResetPasswordRepository : IResetPasswordRepository
    {
        private readonly IDataContext _context;
        public ResetPasswordRepository(IDataContext context)
        {
            _context = context;

        }

        public async Task<int> ValidateIfHaveQuestion(int userId)
        {
            using var connection = _context.CreateConnection();

            var sql = $"SELECT COUNT(*) FROM securityquestions WHERE userid = @userId";

            var questionCount = await connection.ExecuteScalarAsync<int>(sql, new { userId });

            return questionCount;
        }
    }
}
