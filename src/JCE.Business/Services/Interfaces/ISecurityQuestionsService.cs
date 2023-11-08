using JCE.Business.Dtos.SecurityQuestionsDtos;

namespace JCE.Business.Services.Interfaces;
public interface ISecurityQuestionsService
{
    Task<GetSecurityQuestionsDto> GetSecurityQuestions(int userid);
    Task<bool> UpdateSecurityQuestions(UpdateSecurityQuestionsDto update);
}
