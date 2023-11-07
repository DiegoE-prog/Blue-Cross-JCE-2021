using JCE.Business.Dtos.SecurityQuestionsDtos;

namespace JCE.Business.Services.Interfaces;
public interface ISecurityQuestionsService
{
    Task<GetSecurityQuestionsDto> getSecurityQuestions(int userid);
    Task<bool> updateSecurityQuestions(UpdateSecurityQuestionsDto update);
}
