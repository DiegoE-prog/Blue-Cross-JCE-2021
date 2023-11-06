using FluentMigrator;
using System.Reflection.Emit;

namespace JCE.Data.Data.Migrations;

[Migration(031120230319)]
public class CreateNewErrorFix : Migration
{
    public override void Up()
    {       
        Insert.IntoTable("field").Row(new { name = "Claim Number", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Entry Date", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Discharge Date", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Entry Hour", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Discharge Hour", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Institutional Claim Code", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Professional Claim Code", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Type Of Bill", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Referal Num", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Service Code", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Auth Code", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Medical Record Number", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Payer Claim Control Num", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Auto Accident State", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "File Inf", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Claim Note", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Billing Note", fielddb = "" });

        Insert.IntoTable("field").Row(new { name = "Date - Onset of Symptom", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Date - Initial Treatment", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Date - Last Sent Date", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Acute Manifestation", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Date - Accident", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Date - Last Menstrual Date", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Date - Last X-Ray", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Date - Hearing-Vision Presc", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Date - Disability Dates", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Last Worked", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Authorized Return Work", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Date - Assumed & Relinq", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Date - Repricer Received", fielddb = "" });

        Insert.IntoTable("field").Row(new { name = "Principal Diagnosis", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Admiting Diagnosis", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Patient Reason For Visit", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "External Causes Of Injury", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Diagnosis Related Group", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Other Diagnosis Info", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Principal Procedure Info", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Other Procedure Info", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Occurrence Spam Info", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Occurrence Info", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Value Info", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Condition Info", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Treatment Code Info", fielddb = "" });
        Insert.IntoTable("field").Row(new { name = "Claim Pricing Info", fielddb = "" });

    }

    public override void Down()
    {

    }
}
