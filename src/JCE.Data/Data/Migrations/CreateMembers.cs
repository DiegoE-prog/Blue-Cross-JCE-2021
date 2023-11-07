using FluentMigrator;
using System.Reflection.Emit;

namespace JCE.Data.Data.Migrations;

[Migration(071120231234)]
public class CreateMembers : Migration
{
    public override void Up()
    {
        Create.Table("member")
            .WithColumn("memberid").AsInt32().PrimaryKey().Identity()
            .WithColumn("member_id_table").AsString()
            .WithColumn("membername").AsString(250).Nullable()
            .WithColumn("lastname").AsString(250).Nullable()
            .WithColumn("sex").AsString(250).Nullable()
            .WithColumn("memberaddress").AsString(250).Nullable()
            .WithColumn("zipcode").AsString(10).Nullable()
            .WithColumn("state").AsString(5).Nullable()
            .WithColumn("city").AsString(100).Nullable()
            .WithColumn("dob").AsString(250).Nullable()
            .WithColumn("subscribeddate").AsString(250).Nullable()
            .WithColumn("status").AsBoolean().WithDefaultValue(1).Nullable();

        Insert.IntoTable("member").Row(new { member_id_table = "1000014587", membername = "John", lastname = "Brando", sex = "M", memberaddress = "Street 123, av 74", zipcode = "10001", state = "NY", city = "New York", dob = "10/31/1987", subscribeddate = "10/10/2000" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014588", membername = "Ramiro", lastname = "Ortega", sex = "M", memberaddress = "4263  Ritter Street", zipcode = "35816", state = "AL", city = "Huntsville", dob = "4/14/1975", subscribeddate = "12/31/2001" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014589", membername = "Eric", lastname = "Rivers", sex = "M", memberaddress = "3979  Mercer", zipcode = "69331", state = "NE", city = "ANGORA", dob = "6/26/1974", subscribeddate = "10/10/2000" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014590", membername = "James", lastname = "Kirck", sex = "M", memberaddress = "2057  Wilson Street", zipcode = "93513", state = "CA", city = "Big Pine", dob = "5/29/1967", subscribeddate = "10/10/2000" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014591", membername = "Mary", lastname = "Jones", sex = "F", memberaddress = "2458  Meadowbrook Mall Road", zipcode = "90291", state = "CA", city = "Playa Del Rey", dob = "6/11/1972", subscribeddate = "12/31/2001" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014592", membername = "Christina", lastname = "Smith", sex = "F", memberaddress = "2997  Smithfield Avenue", zipcode = "79401", state = "TX", city = "Lubbock", dob = "4/7/1973", subscribeddate = "12/31/2001" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014593", membername = "Shrini", lastname = "Sahasra", sex = "M", memberaddress = "4612  Broadway Avenue", zipcode = "37421", state = "TN", city = "Chattanooga", dob = "5/22/1970", subscribeddate = "11/31/2002" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014594", membername = "Rashmi", lastname = "Kumar", sex = "F", memberaddress = "3746  Elk City Road", zipcode = "71301", state = "LA", city = "Alexandria", dob = "5/29/1967", subscribeddate = "12/31/2001" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014595", membername = "Pedro", lastname = "Sanchez", sex = "M", memberaddress = "724  Indiana Avenue", zipcode = "36561", state = "AL", city = "ORANGE BEACH", dob = "11/8/1992", subscribeddate = "12/31/2001" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014596", membername = "Barbara", lastname = "Durang", sex = "F", memberaddress = "1489  Ridge Road", zipcode = "67950", state = "KS", city = "Elkhart", dob = "6/26/1974", subscribeddate = "01/24/2007" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014597", membername = "Huang", lastname = "Chang", sex = "F", memberaddress = "2011  Richison Drive", zipcode = "59901", state = "MT", city = "Kalispell", dob = "4/9/1979", subscribeddate = "01/24/2007" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014598", membername = "Santiago", lastname = "Cruz", sex = "M", memberaddress = "2190  Locust Court", zipcode = "90804", state = "CA", city = "Long Beach", dob = "12/4/1993", subscribeddate = "01/24/2007" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014599", membername = "Craig", lastname = "Lawson", sex = "M", memberaddress = "385  Post Farm Road", zipcode = "31780", state = "GA", city = "PLAINS", dob = "10/30/1982", subscribeddate = "01/24/2007" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014600", membername = "David", lastname = "Mendoza", sex = "M", memberaddress = "1985  Walnut Hill Drive", zipcode = "45204", state = "OH", city = "Portland", dob = "9/7/1963", subscribeddate = "10/19/2005" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014601", membername = "Ulises", lastname = "Saens", sex = "M", memberaddress = "3888  Carson Street", zipcode = "92111", state = "CA", city = "San Diego", dob = "4/14/1975", subscribeddate = "10/19/2005" });
        Insert.IntoTable("member").Row(new { member_id_table = "1000014602", membername = "Jim", lastname = "Rohn", sex = "M", memberaddress = "708  Broaddus Avenue", zipcode = "42207", state = "KY", city = "Bee Spring", dob = "9/12/1955", subscribeddate = "10/19/2005" });
       
    }

    public override void Down()
    {
        Delete.Table("member");
    }
}
