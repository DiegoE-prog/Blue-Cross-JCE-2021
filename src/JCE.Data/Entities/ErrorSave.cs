namespace JCE.Data.Entities;

public class ErrorSave
{
    public int ErrorId { get; set; } = 0;
    public int UserId { get; set; } = 0;
    public string CreatedBy { get; set; } = string.Empty;   
    public string Message { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<int> Payors { get; set; } = new List<int>();
    public List<ConditionGroup> Condition { get; set; } = new List<ConditionGroup>();

}