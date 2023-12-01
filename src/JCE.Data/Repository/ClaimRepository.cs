using Dapper;
using JCE.Data.Data.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Data.Repository;

public class ClaimRepository : IClaimRepository
{
    private readonly IDataContext _context;

    public ClaimRepository(IDataContext context)
    {
        _context = context;
    }

    public async Task<int> GetLastClaim()
    {
        using var connection = _context.CreateConnection();

        var sql = $"select max(claimnumber)+1 from claims";

        var claims = await connection.QueryAsync<int>(sql);

        return claims.First();
    }

    public async Task<bool> AddClaim(Claim claim)
    {
        using var connection = _context.CreateConnection();

        var sql = $"INSERT INTO `claims`(`member_id_table_id`,`payor_id_table_id`,`provider_id_table_id`,`claimnumber`,`entrydate`,`entryhour`,`dischargedate`,`dischargehour`,`institutionalclaimcode`,`professionalclaimcode`,`typeofbill`,`referalnumber`,`servicecode`,`authcode`,`medicalrecordnumber`,`payorclaimcontrolnumber`,`autoaccidentstate`,`fileinformation`,`claimnote`,`billingnote`,`onsetofsymptom`,`initialtreatment`,`lastsentdate`,`acutemanifestation`,`accident`,`lastmenstrualdate`,`lastxray`,`hearingvisionpresc`,`disabilitydate`,`lastworked`,`authorizedreturnwork`,`assumedandrelinq`,`repricerreceived`,`principaldiagnosis`,`admitingdiagnosis`,`patientreasonforvisit`,`externalcausesofinjury`,`diagnosisrelatedgroup`,`otherdiagnosisinfo`,`principalprocedureinfo`,`otherprocedureinfo`,`occurrencespaminfo`,`occurrenceinfo`,`valueinfo`,`conditioninfo`,`treatmentcodeinfo`,`claimpricinginfo`,`costforservice`,`costofmaterial`,`costformedicine`,`providercost`,`totalamount`) " +
                  $"VALUES (@member_id_table_id, @payor_id_table_id, @provider_id_table_id, @claimnumber, @entrydate, @entryhour, @dischargedate, @dischargehour, @institutionalclaimcode, @professionalclaimcode, @typeofbill, @referalnumber, @servicecode, @authcode, @medicalrecordnumber, @payorclaimcontrolnumber, @autoaccidentstate, @fileinformation, @claimnote, @billingnote, @onsetofsymptom, @initialtreatment, @lastsentdate, @acutemanifestation, @accident, @lastmenstrualdate, @lastxray, @hearingvisionpresc, @disabilitydate, @lastworked, @authorizedreturnwork, @assumedandrelinq, @repricerreceived, @principaldiagnosis, @admitingdiagnosis, @patientreasonforvisit, @externalcausesofinjury, @diagnosisrelatedgroup, @otherdiagnosisinfo, @principalprocedureinfo, @otherprocedureinfo, @occurrencespaminfo, @occurrenceinfo, @valueinfo, @conditioninfo, @treatmentcodeinfo, @claimpricinginfo, @costforservice, @costofmaterial, @costformedicine, @providercost, @totalamount)";


        var affectedRows = await connection.ExecuteAsync(sql, new
        {
            member_id_table_id = claim.member_id_table_id,
            payor_id_table_id = claim.payor_id_table_id,
            provider_id_table_id = claim.provider_id_table_id,
            claimnumber = claim.claimnumber,
            entrydate = claim.entrydate,
            entryhour = claim.entryhour,
            dischargedate = claim.dischargedate,
            dischargehour = claim.dischargehour,
            institutionalclaimcode = claim.institutionalclaimcode,
            professionalclaimcode = claim.professionalclaimcode,
            typeofbill = claim.typeofbill,
            referalnumber = claim.referalnumber,
            servicecode = claim.servicecode,
            authcode = claim.authcode,
            medicalrecordnumber = claim.medicalrecordnumber,
            payorclaimcontrolnumber = claim.payorclaimcontrolnumber,
            autoaccidentstate = claim.autoaccidentstate,
            fileinformation = claim.fileinformation,
            claimnote = claim.claimnote,
            billingnote = claim.billingnote,
            onsetofsymptom = claim.onsetofsymptom,
            initialtreatment = claim.initialtreatment,
            lastsentdate = claim.lastsentdate,
            acutemanifestation = claim.acutemanifestation,
            accident = claim.accident,
            lastmenstrualdate = claim.lastmenstrualdate,
            lastxray = claim.lastxray,
            hearingvisionpresc = claim.hearingvisionpresc,
            disabilitydate = claim.disabilitydate,
            lastworked = claim.lastworked,
            authorizedreturnwork = claim.authorizedreturnwork,
            assumedandrelinq = claim.assumedandrelinq,
            repricerreceived = claim.repricerreceived,
            principaldiagnosis = claim.principaldiagnosis,
            admitingdiagnosis = claim.admitingdiagnosis,
            patientreasonforvisit = claim.patientreasonforvisit,
            externalcausesofinjury = claim.externalcausesofinjury,
            diagnosisrelatedgroup = claim.diagnosisrelatedgroup,
            otherdiagnosisinfo = claim.otherdiagnosisinfo,
            principalprocedureinfo = claim.principalprocedureinfo,
            otherprocedureinfo = claim.otherprocedureinfo,
            occurrencespaminfo = claim.occurrencespaminfo,
            occurrenceinfo = claim.occurrenceinfo,
            valueinfo = claim.valueinfo,
            conditioninfo = claim.conditioninfo,
            treatmentcodeinfo = claim.treatmentcodeinfo,
            claimpricinginfo = claim.claimpricinginfo,
            costforservice = claim.costforservice,
            costofmaterial = claim.costofmaterial,
            costformedicine = claim.costformedicine,
            providercost = claim.providercost,
            totalamount = claim.totalamount
        }
        );

        return affectedRows > 0;
    }






}
