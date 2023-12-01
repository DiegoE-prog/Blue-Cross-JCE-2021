

namespace JCE.Data.Entities;

public class Claim
{
    public int claimid { get; set; }
    public string member_id_table_id { get; set; }
    public string payor_id_table_id { get; set; }
    public string provider_id_table_id { get; set; }
    public int claimnumber { get; set; }
    public string entrydate { get; set; }
    public string entryhour { get; set; }
    public string dischargedate { get; set; }
    public string dischargehour { get; set; }
    public int institutionalclaimcode { get; set; }
    public int professionalclaimcode { get; set; }
    public int typeofbill { get; set; }
    public string referalnumber { get; set; }
    public int servicecode { get; set; }
    public string authcode { get; set; }
    public string medicalrecordnumber { get; set; }
    public string payorclaimcontrolnumber { get; set; }
    public string autoaccidentstate { get; set; }
    public string fileinformation { get; set; }
    public string claimnote { get; set; }
    public string billingnote { get; set; }
    public string onsetofsymptom { get; set; }
    public string initialtreatment { get; set; }
    public string lastsentdate { get; set; }
    public string acutemanifestation { get; set; }
    public string accident { get; set; }
    public string lastmenstrualdate { get; set; }
    public string lastxray { get; set; }
    public string hearingvisionpresc { get; set; }
    public string disabilitydate { get; set; }
    public string lastworked { get; set; }
    public string authorizedreturnwork { get; set; }
    public string assumedandrelinq { get; set; }
    public string repricerreceived { get; set; }
    public string principaldiagnosis { get; set; }
    public string admitingdiagnosis { get; set; }
    public string patientreasonforvisit { get; set; }
    public string externalcausesofinjury { get; set; }
    public string diagnosisrelatedgroup { get; set; }
    public string otherdiagnosisinfo { get; set; }
    public string principalprocedureinfo { get; set; }
    public string otherprocedureinfo { get; set; }
    public string occurrencespaminfo { get; set; }
    public string occurrenceinfo { get; set; }
    public string valueinfo { get; set; }
    public string conditioninfo { get; set; }
    public string treatmentcodeinfo { get; set; }
    public string claimpricinginfo { get; set; }
    public string costforservice { get; set; }
    public string costofmaterial { get; set; }
    public string costformedicine { get; set; }
    public string providercost { get; set; }
    public string totalamount { get; set; }
}
