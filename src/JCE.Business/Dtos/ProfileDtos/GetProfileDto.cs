namespace JCE.Business.Dtos.ProfileDtos;

public class GetProfileDto
{
    public string Username { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public DateTimeOffset Dob { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }

}
