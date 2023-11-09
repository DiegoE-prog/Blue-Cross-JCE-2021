const handleValidations = (claim) => {
	switch (claim.payor.id) {
		case "5887000049":
			return handlingClaimsInCO(claim)
		case "5887000056":
			return handlingClaimsInCO2(claim)
		case "5887000053":
			return handlingClaimsInCO2(claim)
		case "5887000063":
			return handlingClaimsProcedureCodeCOVID1(claim)
		default:
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

export { handleValidations }
