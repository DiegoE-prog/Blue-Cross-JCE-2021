
using JCE.Business.Dtos.ClaimDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;


namespace JCE.Business.Services;

public class ClaimService : IClaimService
{
    private readonly IClaimRepository _claimRepository;

    public ClaimService(IClaimRepository claimRepository)
    {
        _claimRepository = claimRepository;

    }

    public async Task<bool> AddClaim(CreateClaimDto claim)
    {
        var success = await _claimRepository.AddClaim(new Claim
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

        });
        return success;

    }


}
