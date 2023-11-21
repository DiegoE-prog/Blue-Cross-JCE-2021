namespace JCE.Business.Dtos.ProfileDtos;
public class SuccesfulCreatedProfileDto
{
    public string Username { get; set; }
    public string Password { get; set; }
    public DateTimeOffset ExpireDate { get; set; }
}
