namespace JCE.Business.Dtos.ErrorDtos;

public class SearchConditonErrorDto
{
    public int ErrorId { get; set; }
    public string Payor { get; set; }
    public string Message { get; set; }
    public string Field { get; set; }
    public string Description { get; set; }
    public string CreateBy { get; set; }
}
