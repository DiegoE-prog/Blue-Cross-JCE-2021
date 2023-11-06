using FluentMigrator;

namespace JCE.Data.Data.Migrations;

[Migration(021120230119)]
public class CreateNewError : Migration
{
    public override void Up()
    {
        Create.Table("error")
            .WithColumn("errorid").AsInt32().PrimaryKey().Identity()
            .WithColumn("userid").AsInt32().NotNullable()
            .WithColumn("username").AsString(100).NotNullable()
            .WithColumn("message").AsString(500).Nullable()
            .WithColumn("description").AsString(500).Nullable()
            .WithColumn("status").AsBoolean().WithDefaultValue(1).Nullable();

        Create.ForeignKey("FK_error_user")  
            .FromTable("error").ForeignColumn("userid")  
            .ToTable("user").PrimaryColumn("userid");

        Create.Table("grouperror")
            .WithColumn("grouperrorid").AsInt32().PrimaryKey().Identity()
            .WithColumn("errorid").AsInt32().NotNullable()
            .WithColumn("selectid").AsInt32().NotNullable()
            .WithColumn("textselect").AsString(100).NotNullable();
        
        Create.ForeignKey("FK_grouperror_errorid")
            .FromTable("grouperror").ForeignColumn("errorid")
            .ToTable("error").PrimaryColumn("errorid");

        Create.Table("payorlist")
            .WithColumn("payorlistid").AsInt32().PrimaryKey().Identity()
            .WithColumn("errorid").AsInt32().NotNullable()
            .WithColumn("payorid").AsInt32().NotNullable();

        Create.ForeignKey("FK_payorlist_errorid")
            .FromTable("payorlist").ForeignColumn("errorid")
            .ToTable("error").PrimaryColumn("errorid");

        Create.Table("field")
            .WithColumn("fieldid").AsInt32().PrimaryKey().Identity()
            .WithColumn("name").AsString(100).Nullable()
            .WithColumn("fielddb").AsString(100).Nullable()
            .WithColumn("status").AsBoolean().WithDefaultValue(1).Nullable();

        Insert.IntoTable("field").Row(new { name = "Member ID", fielddb = ""});
        Insert.IntoTable("field").Row(new { name = "Member Name", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Member Last Name", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Member Sex", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Member Address", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Member ZipCode", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Member State", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Member City", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Member DOB", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Member Subscribed Date", fielddb = "" });

        Insert.IntoTable("field").Row(new { name = "Payor ID", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Payor Name", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Payor Address", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Payor ZipCode", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Payor State", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Payor City", fielddb = "" });

        Insert.IntoTable("field").Row(new { name = "Provider ID", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Provider Name", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Provider Address", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Provider ZipCode", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Provider State", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Provider City", fielddb = "" });

        Insert.IntoTable("field").Row(new { name = "Cost for Service", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Cost of Material", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Cost for Medicine", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Provider Cost", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Total Amount", fielddb = "" });

        Create.Table("condition")
            .WithColumn("conditionid").AsInt32().PrimaryKey().Identity()
            .WithColumn("name").AsString(100).Nullable()
            .WithColumn("conditionsql").AsString(150).Nullable()
            .WithColumn("status").AsBoolean().WithDefaultValue(1).Nullable();

        Insert.IntoTable("condition").Row(new { name = "Equal to", conditionsql = "=" });
        Insert.IntoTable("condition").Row(new { name = "Doesn't match", conditionsql = "<>" });
        Insert.IntoTable("condition").Row(new { name = "Matches", conditionsql = "=" });
        Insert.IntoTable("condition").Row(new { name = "is Less than", conditionsql = "<" });
        Insert.IntoTable("condition").Row(new { name = "Is More than", conditionsql = ">" });
        Insert.IntoTable("condition").Row(new { name = "In List", conditionsql = "In" });
        Insert.IntoTable("condition").Row(new { name = "Starts with", conditionsql = "Like" });
        Insert.IntoTable("condition").Row(new { name = "Ends with", conditionsql = "Like" });
        Insert.IntoTable("condition").Row(new { name = "Not equals to", conditionsql = "Not Like" });
        Insert.IntoTable("condition").Row(new { name = "Not in List", conditionsql = "Not In" });
        Insert.IntoTable("condition").Row(new { name = "Is Entered", conditionsql = "=" });
        Insert.IntoTable("condition").Row(new { name = "Not Entered", conditionsql = "<>" });

        Create.Table("conditiongroup")
            .WithColumn("conditiongroupid").AsInt32().PrimaryKey().Identity()
            .WithColumn("grouperrorid").AsInt32().NotNullable()
            .WithColumn("fieldid").AsInt32().NotNullable()
            .WithColumn("conditionid").AsInt32().NotNullable()
            .WithColumn("value").AsString(250).Nullable();

        Create.ForeignKey("FK_conditiongroup_grouperrorid")
            .FromTable("conditiongroup").ForeignColumn("grouperrorid")
            .ToTable("grouperror").PrimaryColumn("grouperrorid");
        Create.ForeignKey("FK_conditiongroup_fieldid")
            .FromTable("conditiongroup").ForeignColumn("fieldid")
            .ToTable("field").PrimaryColumn("fieldid");
        Create.ForeignKey("FK_conditiongroup_conditionid")
            .FromTable("conditiongroup").ForeignColumn("conditionid")
            .ToTable("condition").PrimaryColumn("conditionid");
    }

    public override void Down()
    {
        Delete.Table("field");
        Delete.Table("condition");
        Delete.Table("conditiongroup");
        Delete.Table("payorlist");
        Delete.Table("grouperror");
        Delete.Table("error");
    }
}
