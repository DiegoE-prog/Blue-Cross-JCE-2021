﻿namespace JCE.Data.Entities;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public string Role { get; set; }
    public DateTimeOffset ExpireDate { get; set; }
    public string UserStatus { get; set; }
}