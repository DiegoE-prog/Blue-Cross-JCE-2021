using FluentMigrator;

namespace JCE.Data.Data.Migrations;

[Migration(3010202301)]
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
            .WithColumn("userstatus").AsString(1).WithDefaultValue(1);

        Insert.IntoTable("user").Row(new { username = "Diego", password = "12345", expiredate = "2024-10-30" });
        Insert.IntoTable("user").Row(new { username = "Juan", password = "12345", role = "2", expiredate = "2024-10-30" });
        Insert.IntoTable("user").Row(new { username = "Mauricio", password = "12345", role = "3", expiredate = "2024-10-30" });
        Insert.IntoTable("user").Row(new { username = "Adrian", password = "12345", role = "4", expiredate = "2024-10-30" });
        Insert.IntoTable("user").Row(new { username = "Adan", password = "12345", expiredate = "2022-10-30" });
        Insert.IntoTable("user").Row(new { username = "Alejandro", password = "12345", expiredate = "2024-10-30", userstatus= "0" });
    }

    public override void Down()
    {
        Delete.Table("user");
    }
}
