namespace JCE.Business.Dtos.ErrorDtos;

public class GetSearchErrorDto
{
    public int ErrorId { get; set; }
    public string UserName { get; set; }
    public string Message { get; set; }
    public string Description { get; set; }
}
