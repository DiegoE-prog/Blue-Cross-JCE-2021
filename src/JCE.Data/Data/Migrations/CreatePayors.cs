using FluentMigrator;
using System.Reflection.Emit;

namespace JCE.Data.Data.Migrations;

[Migration(031120230219)]
public class CreatePayors : Migration
{
    public override void Up()
    {
        Create.Table("payor")
            .WithColumn("payorid").AsInt32().PrimaryKey().Identity()
            .WithColumn("payor_id_table").AsString()
            .WithColumn("payorname").AsString(250).Nullable()
            .WithColumn("payoraddress").AsString(250).Nullable()
            .WithColumn("zipcode").AsString(10).Nullable()
            .WithColumn("state").AsString(5).Nullable()
            .WithColumn("city").AsString(100).Nullable()
            .WithColumn("status").AsBoolean().WithDefaultValue(1).Nullable();

        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000047", payorname = "HMD Secure", payoraddress = "3755  Elk City Road", zipcode = "59901", state = "MT", city = "Kalispell" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000048", payorname = "HMD Secure", payoraddress = "733  Indiana Avenue", zipcode = "90804", state = "CA", city = "Long Beach" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000049", payorname = "HMD Secure", payoraddress = "1498  Ridge Road", zipcode = "31780", state = "GA", city = "PLAINS" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000050", payorname = "HMD Secure", payoraddress = "2020  Richison Drive", zipcode = "45204", state = "OH", city = "Portland" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000051", payorname = "HMD Secure", payoraddress = "2199  Locust Court", zipcode = "59901", state = "MT", city = "Kalispell" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000052", payorname = "ATHENA SECURE", payoraddress = "394  Post Farm Road", zipcode = "90804", state = "CA", city = "Long Beach" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000053", payorname = "ATHENA SECURE", payoraddress = "1994  Walnut Hill Drive", zipcode = "31780", state = "GA", city = "PLAINS" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000054", payorname = "ATHENA SECURE", payoraddress = "3897  Carson Street", zipcode = "45204", state = "OH", city = "Portland" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000055", payorname = "ATHENA SECURE", payoraddress = "717  Broaddus Avenue", zipcode = "92111", state = "CA", city = "San Diego" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000056", payorname = "ATHENA SECURE", payoraddress = "4622  Broadway Avenue", zipcode = "42207", state = "KY", city = "Bee Spring" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000057", payorname = "MDX Services", payoraddress = "3756  Elk City Road", zipcode = "59901", state = "MT", city = "Kalispell" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000058", payorname = "MDX Services", payoraddress = "734  Indiana Avenue", zipcode = "90804", state = "CA", city = "Long Beach" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000059", payorname = "MDX Services", payoraddress = "1499  Ridge Road", zipcode = "31780", state = "GA", city = "PLAINS" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000060", payorname = "ANTEM", payoraddress = "2021  Richison Drive", zipcode = "45204", state = "OH", city = "Portland" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000061", payorname = "ANTEM", payoraddress = "2200  Locust Court", zipcode = "92111", state = "CA", city = "San Diego" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000062", payorname = "ANTEM", payoraddress = "2199  Locust Court", zipcode = "42207", state = "KY", city = "Bee Spring" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000063", payorname = "ATHENA SECURE", payoraddress = "123 Main Street", zipcode = "10001", state = "NY", city = "New York" });
        Insert.IntoTable("payor").Row(new { payor_id_table = "5887000064", payorname = "ATHENA SECURE", payoraddress = "2021  Richison Drive", zipcode = "84097", state = "UT", city = "Orem" });

    }

    public override void Down()
    {
        Delete.Table("payor");
    }
}
