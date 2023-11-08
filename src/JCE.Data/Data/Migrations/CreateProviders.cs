using FluentMigrator;
using System.Reflection.Emit;

namespace JCE.Data.Data.Migrations;

[Migration(0711202354321)]
public class CreateProviders : Migration
{
    public override void Up()
    {

    Create.Table("provider")
            .WithColumn("providerid").AsInt32().PrimaryKey().Identity()
            .WithColumn("provider_id_table").AsString()
            .WithColumn("providername").AsString(250).Nullable()
            .WithColumn("type").AsString(250).Nullable()
            .WithColumn("provideraddress").AsString(250).Nullable()
            .WithColumn("zipcode").AsString(10).Nullable()
            .WithColumn("state").AsString(5).Nullable()
            .WithColumn("city").AsString(100).Nullable()
            .WithColumn("status").AsBoolean().WithDefaultValue(1).Nullable();

        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000047", providername = "Medical Center MS",type="Institutional", provideraddress = "2196  Locust Court", zipcode = "59901", state = "MT", city = "Kalispell" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000048", providername = "Dr Robert Walt", type = "Professional", provideraddress = "391  Post Farm Road", zipcode = "90804", state = "CA", city = "Long Beach" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000049", providername = "MCS Center", type = "Institutional", provideraddress = "1991  Walnut Hill Drive", zipcode = "31780", state = "GA", city = "PLAINS" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000050", providername = "Hospital Federal", type = "Institutional", provideraddress = "3894  Carson Street", zipcode = "45204", state = "OH", city = "Portland" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000051", providername = "Hospital Santa Bernardina", type = "Institutional", provideraddress = "714  Broaddus Avenue", zipcode = "59901", state = "MT", city = "Kalispell" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000052", providername = "Dr Escamilla", type = "Professional", provideraddress = "4619  Broadway Avenue", zipcode = "90804", state = "CA", city = "Long Beach" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000053", providername = "Medical Social Secure", type = "Institutional", provideraddress = "3753  Elk City Road", zipcode = "31780", state = "GA", city = "PLAINS" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000054", providername = "Medical Institution", type = "Institutional", provideraddress = "731  Indiana Avenue", zipcode = "45204", state = "OH", city = "Portland" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000055", providername = "Relay Medical Center", type = "Institutional", provideraddress = "1496  Ridge Road", zipcode = "59901", state = "CA", city = "San Diego" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000056", providername = "Dr Sanchez", type = "Professional", provideraddress = "2018  Richison Drive", zipcode = "90804", state = "KY", city = "Bee Spring" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000057", providername = "Dr Frank", type = "Professional", provideraddress = "2197  Locust Court", zipcode = "31780", state = "MT", city = "Kalispell" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000058", providername = "Dr Trinidad", type = "Professional", provideraddress = "392  Post Farm Road", zipcode = "45204", state = "CA", city = "Long Beach" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000059", providername = "Dr Salvador", type = "Professional", provideraddress = "1992  Walnut Hill Drive", zipcode = "92111", state = "GA", city = "PLAINS" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000060", providername = "Dr Borrego", type = "Professional", provideraddress = "3895  Carson Street", zipcode = "42207", state = "OH", city = "Portland" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000061", providername = "Medical Social Health", type = "Institutional", provideraddress = "715  Broaddus Avenue", zipcode = "59901", state = "CA", city = "San Diego" });
        Insert.IntoTable("provider").Row(new { provider_id_table = "5887000062", providername = "Healt-Care", type = "Institutional", provideraddress = "4620  Broadway Avenue", zipcode = "90804", state = "KY", city = "Bee Spring" });
        

    }

    public override void Down()
    {
        Delete.Table("provider");
    }
}
