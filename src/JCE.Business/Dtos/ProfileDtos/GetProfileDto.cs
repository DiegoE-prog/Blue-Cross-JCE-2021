namespace JCE.Business.Dtos.ProfileDtos;

public class GetProfileDto
{
    public int UserId {get; set; }
    public string Role { get; set; }
    public string Username { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public DateTime? Dob { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }

}
