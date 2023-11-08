using FluentMigrator;

namespace JCE.Data.Data.Migrations;

[Migration(3010202302)]
//3010202301
public class CreateUserTable : Migration
{
    public override void Up()
    {
        Create.Table("user")
            .WithColumn("userid").AsInt32().PrimaryKey().Identity()
            .WithColumn("username").AsString(50).NotNullable()
            .WithColumn("password").AsString(50).NotNullable()
            .WithColumn("role").AsString(1).WithDefaultValue(1)
            .WithColumn("expiredate").AsDate().NotNullable()
            .WithColumn("userstatus").AsString(1).WithDefaultValue(1)
            .WithColumn("name").AsString(50).NotNullable()
            .WithColumn("lastname").AsString(50).NotNullable()
            .WithColumn("dob").AsDate().NotNullable()
            .WithColumn("phone").AsString(50).NotNullable()
            .WithColumn("email").AsString(50).NotNullable();

        Insert.IntoTable("user").Row(new { username = "Diego", password = "12345", expiredate = "2024-10-30", name = "Diego", lastname = "Escutia", dob = "1997-12-05", phone = "4779236587", email = "diego@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Juan", password = "12345", role = "2", expiredate = "2024-10-30", name = "Juan", lastname = "Mendoza", dob = "1991-09-14", phone = "4771125468", email = "juan@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Mauricio", password = "12345", role = "3", expiredate = "2024-10-30", name = "Mauricio", lastname = "Chavez", dob = "1999-03-23", phone = "4776982458", email = "mauricio@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Adrian", password = "12345", role = "4", expiredate = "2024-10-30", name = "Adrian", lastname = "Cano", dob = "1998-06-19", phone = "4775453651", email = "adrian@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Adan", password = "12345", role="4", expiredate = "2024-10-30", name = "Adan", lastname = "Ortega", dob = "1989-01-27", phone = "4779896124", email = "adan@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Alejandro", password = "12345", expiredate = "2024-10-30", userstatus= "0", name = "Alejandro", lastname = "Garcia", dob = "1989-08-04", phone = "4773796825", email = "alex@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Carlos", password = "12345", expiredate = "2024-10-30", userstatus = "3", name = "Carlos", lastname = "Granados", dob = "1989-08-04", phone = "4773799087", email = "carlos@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Rodolfo", password = "12345", expiredate = "2022-10-30", userstatus = "4", name = "Rodolfo", lastname = "Valtierra", dob = "1989-08-04", phone = "4773795607", email = "rodolfo@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Andrea", password = "12345", expiredate = "2024-10-30", userstatus = "3", name = "Andrea", lastname = "Rivera", dob = "1989-08-04", phone = "4773792356", email = "andrea@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Rocio", password = "12345", expiredate = "2024-10-30", userstatus = "4", name = "Rocio", lastname = "Chavez", dob = "1989-08-04", phone = "4773792357", email = "rocio@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Ulises", password = "12345", expiredate = "2024-10-30", userstatus = "4", name = "Ulises", lastname = "Mendoza", dob = "1989-08-04", phone = "4773792358", email = "ulises@mail.com" });
        Insert.IntoTable("user").Row(new { username = "Citlali", password = "12345", expiredate = "2024-10-30", userstatus = "4", name = "Citlali", lastname = "Martinez", dob = "1989-08-04", phone = "4773796690", email = "citlali@mail.com" });
    }

    public override void Down()
    {
        Delete.Table("user");
    }
}
