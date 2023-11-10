using FluentMigrator;

namespace JCE.Data.Data.Migrations;

[Migration(091120230144)]
public class AddSoftDeleteToUserTable : Migration
{
    public override void Up()
    {
        Create.Column("isdeleted")
            .OnTable("user")
            .AsInt32().NotNullable().WithDefaultValue(0);
    }

    public override void Down()
    {
        Delete.Column("isdeleted").FromTable("user");
    }
}
