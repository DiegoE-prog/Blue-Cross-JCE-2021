namespace JCE.Data.Entities;

public class SearchConditonError
{
    public int? ErrorId { get; set; } = 0;
    public string Payor{ get; set; }
    public string Message { get; set; }
    public string Field { get; set; }  
    public string Description { get; set; }
    public string CreateBy { get; set; }
}