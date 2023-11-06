namespace JCE.Business.Dtos.ErrorDtos;

public class ErrorDto
{
    public int Errorid { get; set; }
    public int Userid { get; set; }
    public string Username { get; set; }
    public string Message { get; set; }
    public string Decription { get; set; }
    public Boolean Status { get; set; }
}
