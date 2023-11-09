using JCE.Data.Entities;

namespace JCE.Data.Repository.Interfaces;

public interface IErrorRepository
{
    Task<Error> GetLastId();
    Task<List<Field>> GetListField();
    Task<bool> SaveError(ErrorSave errorSave);
    Task<List<SearchError>> GetListSearchError(SearchConditonError searchConditonError);
}
