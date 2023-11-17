﻿namespace JCE.Business;
public class CreateProfileDto
{
    public string Username { get; set; }
    public string Password { get; set; }
    public string Role { get; set; }
    public DateTimeOffset ExpireDate { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public DateTime? Dob { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }
}
