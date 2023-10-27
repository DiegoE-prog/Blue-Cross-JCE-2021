namespace JCE.Data.Entities;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public char Role { get; set; }
    public DateTimeOffset ExpireDate { get; set; }
    public char UserStatus { get; set; }
}