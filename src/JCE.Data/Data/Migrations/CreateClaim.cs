using FluentMigrator;
using System.Reflection.Emit;

namespace JCE.Data.Data.Migrations;

[Migration(91120230146)]
public class CreateClaim : Migration
{
    public override void Up()
    {
        Create.Table("claims").WithColumn("claimid").AsInt32().PrimaryKey().Identity()
            .WithColumn("member_id_table_id").AsString()
            .WithColumn("payor_id_table_id").AsString()
            .WithColumn("provider_id_table_id").AsString()
            .WithColumn("claimnumber").AsInt32()
            .WithColumn("entrydate").AsString(15).Nullable()
            .WithColumn("entryhour").AsString(250).Nullable()
            .WithColumn("dischargedate").AsString(15).Nullable()
            .WithColumn("dischargehour").AsString(15).Nullable()

        .WithColumn("institutionalclaimcode").AsInt32().Nullable()
       .WithColumn("professionalclaimcode").AsInt32().Nullable()
       .WithColumn("typeofbill").AsInt32().Nullable()
       .WithColumn("referalnumber").AsString().Nullable()
       .WithColumn("servicecode").AsInt32().Nullable()
       .WithColumn("authcode").AsString(6).Nullable()

       .WithColumn("medicalrecordnumber").AsString().Nullable()
       .WithColumn("payorclaimcontrolnumber").AsString().Nullable()
       .WithColumn("autoaccidentstate").AsString().Nullable()
       .WithColumn("fileinformation").AsString().Nullable()
       .WithColumn("claimnote").AsString().Nullable()
       .WithColumn("billingnote").AsString().Nullable()

        .WithColumn("onsetofsymptom").AsString().Nullable()
       .WithColumn("initialtreatment").AsString().Nullable()
       .WithColumn("lastsentdate").AsString().Nullable()
       .WithColumn("acutemanifestation").AsString().Nullable()
       .WithColumn("accident").AsString().Nullable()
       .WithColumn("lastmenstrualdate").AsString().Nullable()

       .WithColumn("lastxray").AsString().Nullable()
       .WithColumn("hearingvisionpresc").AsString().Nullable()
       .WithColumn("disabilitydate").AsString().Nullable()
       .WithColumn("lastworked").AsString().Nullable()
       .WithColumn("authorizedreturnwork").AsString().Nullable()
       .WithColumn("assumedandrelinq").AsString().Nullable()
       .WithColumn("repricerreceived").AsString().Nullable()
       .WithColumn("principaldiagnosis").AsString().Nullable()
       .WithColumn("admitingdiagnosis").AsString().Nullable()
       .WithColumn("patientreasonforvisit").AsString().Nullable()
       .WithColumn("externalcausesofinjury").AsString().Nullable()
       .WithColumn("diagnosisrelatedgroup").AsString().Nullable()
       .WithColumn("otherdiagnosisinfo").AsString().Nullable()
       .WithColumn("principalprocedureinfo").AsString().Nullable()
       .WithColumn("otherprocedureinfo").AsString().Nullable()
       .WithColumn("occurrencespaminfo").AsString().Nullable()
       .WithColumn("occurrenceinfo").AsString().Nullable()
       .WithColumn("valueinfo").AsString().Nullable()
       .WithColumn("conditioninfo").AsString().Nullable()
       .WithColumn("treatmentcodeinfo").AsString().Nullable()
       .WithColumn("claimpricinginfo").AsString().Nullable()
       .WithColumn("costforservice").AsString().Nullable()
       .WithColumn("costofmaterial").AsString().Nullable()
       .WithColumn("costformedicine").AsString().Nullable()
       .WithColumn("providercost").AsString().Nullable()
       .WithColumn("totalamount").AsString().Nullable();

    }

    public override void Down()
    {
        Delete.Table("claims");
    }
}
