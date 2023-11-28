using JCE.Data.Entities;

namespace JCE.Business.Dtos.ErrorDtos;

public class ErrorUpdateDto
{
    public int ErrorId { get; set; }
    public List<int> Payors { get; set; }
    public List<ConditionGroup> Conditions { get; set; }
}
