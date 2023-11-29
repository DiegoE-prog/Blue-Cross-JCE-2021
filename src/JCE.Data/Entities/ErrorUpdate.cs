namespace JCE.Data.Entities;

public class ErrorUpdate
{
    public int ErrorId { get; set; }
    public List<int> Payors { get; set; }
    public List<ConditionGroup> Condition { get; set; }
}
