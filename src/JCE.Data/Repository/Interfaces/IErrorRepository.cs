using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;

public interface IErrorRepository
{
    Task<Error> GetLastId();
    Task<List<Field>> GetListField();
    Task<bool> SaveError(ErrorSave errorSave);
    Task<List<SearchError>> GetListSearchError(SearchConditonError searchConditonError);
    Task<List<ConditionPayor>> GetConditionPayor(String payorId);
    Task<List<SearchError>> GetListAllError();
    Task<SearchError> GetErrorByIdAsync(string errorId);
    Task<List<ConditionUpdate>> GetConditionsForError(string errorId);
    Task<bool> UpdateError(ErrorUpdate errorUpdate);
}
