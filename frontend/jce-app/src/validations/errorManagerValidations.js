const handleValidations = (claim) => {
	const errorHandler = {
		5887000047: handlingClaimsInMemberStateCT,
		5887000048: handlingClaimsProcedureCodeCOVID2,
		5887000049: (claim) => handlingClaimsInCO(claim) || handlingClaimsProcedureCodeCOVID2(claim),
		5887000050: (claim) => handlingClaimsProcedureCodeCOVID2(claim) || handlingClaimsInMemberStateWA(claim),
		5887000051: handlingClaimsProcedureCodeCOVID2,
		5887000052: handlingClaimsProcedureCodeCOVID2,
		5887000053: (claim) => handlingClaimsInCO2(claim) || handlingClaimsProcedureCodeCOVID2(claim),
		5887000054: handlingClaimsProcedureCodeCOVID2,
		5887000055: handlingClaimsProcedureCodeCOVID2,
		5887000056: (claim) => handlingClaimsInCO2(claim) || handlingClaimsProcedureCodeCOVID2(claim),
		5887000057: (claim) => handlingClaimsProcedureCodeCOVID2(claim) || handlingClaimsInProviderStateOH(claim),
		5887000058: (claim) => handlingClaimsProcedureCodeCOVID2(claim) || handlingClaimsInProviderStateOH(claim),
		5887000059: (claim) => handlingClaimsProcedureCodeCOVID2(claim) || handlingClaimsInProviderStateOH(claim),
		5887000063: handlingClaimsProcedureCodeCOVID1
	}

	const handler = errorHandler[claim.payor.id]

	if (handler) {
		return handler(claim)
	}
	else {
		return
	}
}

const handlingClaimsInCO = (claim) => {
	if (claim.provider.state === "CO" &&
		claim.provider.zipCode === "80011" &&
		claim.diagnosisCodes.externalCausesOfInjury === "") {
		return {
			title: "External Causes is Mandatory",
			description: "External Cause of Injury is mandatory for this region. If you have any questions, please contact us at 596-8485-5644."
		}
	}
}

const handlingClaimsInCO2 = (claim) => {
	if (claim.member.state === "CO" &&
		(claim.member.zipCode === "80221"
			|| claim.member.zipCode === "80214"
			|| claim.member.zipCode === "80640") &&
		claim.diagnosisCodes.principalProcedureInfo === "") {
		return {
			title: "Missing Principal Procedure Inf",
			description: "Principal Procedure Inf is mandatory in this region."
		}
	}
}

const handlingClaimsProcedureCodeCOVID1 = (claim) => {
	if (claim.payor.state === "NY" &&
		claim.diagnosisCodes.principalProcedureInfo === "COVID1" &&
		claim.diagnosisDates.authorizedReturnWork === "") {
		return {
			title: "Required field is empty.",
			description: "For this procedure code is mandatory to include the Authorized Return work Date."
		}
	}
}

const handlingClaimsProcedureCodeCOVID2 = (claim) => {
	if (claim.diagnosisCodes.principalProcedureInfo === "COVID2" &&
		claim.diagnosisDates.authorizedReturnWork === "") {
		return {
			title: "Required field is empty.",
			description: "For this procedure code is mandatory to include the Authorized Return work Date."
		}
	}
}

const handlingClaimsInMemberStateCT = (claim) => {
	if (claim.member.state === "CT" &&
		claim.diagnosisCodes.principalDiagnosis === "ABA3466" &&
		claim.diagnosisCodes.treatmentCodeInfo === "") {
		return {
			title: "Treatment Code is Mandatory",
			description: "When State is CT then Treatment Code Info is Mandatory, if you have questions, please contact us in www.antem.com/chat or by phone 800-345-22-12"
		}
	}
}

const handlingClaimsInProviderStateOH = (claim) => {
	if (claim.provider.state === "OH" &&
		claim.diagnosisCodes.principalDiagnosis === "" &&
		(claim.provider.zipCode !== "43001" &&
		 claim.provider.zipCode !== "43002" )) {
		return {
			title: "Principal Diagnosis Code is Mandatory",
			description: "Principal Diagnosis Code is Mandatory in Ohio, please contact MDX Services if you have any question (800-366-4451)"
		}	
	}
}

const checkCodeRange = (code) => {
	var numericPart = parseInt(code.substring(3), 10)
	return numericPart >= 100 && numericPart <= 999
}

const handlingClaimsInMemberStateWA = (claim) => {
	if (claim.member.state === "WA" &&
		(claim.diagnosisCodes.otherDiagnosisInfo === "SD22DD" ||
			(checkCodeRange(claim.diagnosisCodes.otherDiagnosisInfo))) &&
		claim.diagnosisDates.lastXRay === "") {
		return {
			title: "Last X-Ray Date is required for this code",
			description: "Date - Last X-Ray is required for procedure code SD22DD or from SDF100 to SDF999, please check with your Payor."
		}
	}
}

export { handleValidations }
