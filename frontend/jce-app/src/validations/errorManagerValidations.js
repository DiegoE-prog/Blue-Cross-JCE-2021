const handleValidations = (claim) => {
	const errorHandler = {
		5887000048: handlingClaimsProcedureCodeCOVID2,
		5887000049: (claim) => handlingClaimsInCO(claim) || handlingClaimsProcedureCodeCOVID2(claim),
		5887000050: handlingClaimsProcedureCodeCOVID2,
		5887000051: handlingClaimsProcedureCodeCOVID2,
		5887000052: handlingClaimsProcedureCodeCOVID2,
		5887000053: (claim) => handlingClaimsInCO2(claim) || handlingClaimsProcedureCodeCOVID2(claim),
		5887000054: handlingClaimsProcedureCodeCOVID2,
		5887000055: handlingClaimsProcedureCodeCOVID2,
		5887000056: (claim) => handlingClaimsInCO2(claim) || handlingClaimsProcedureCodeCOVID2(claim),
		5887000057: handlingClaimsProcedureCodeCOVID2,
		5887000058: handlingClaimsProcedureCodeCOVID2,
		5887000059: handlingClaimsProcedureCodeCOVID2,
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

export { handleValidations }
