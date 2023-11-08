using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;
public interface ISecurityQuestionsRepository
{
    Task<SecurityQuestions> GetSecurityQuestions(int userid);
    Task<bool> UpdateSecurityQuestions(SecurityQuestions update);

}
