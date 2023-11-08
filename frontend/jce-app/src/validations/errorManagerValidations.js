const handleValidations = (claim) => {
	console.log(claim)
	switch (claim.payor.id) {
		case "5887000049":
			return handlingClaimsInCO(claim)
		default:
			return
	}
}

const handlingClaimsInCO = (claim) => {
	if (claim.provider.state === "CO" && claim.provider.zipCode === "80011") {
		if (claim.diagnosisCodes.externalCausesOfInjury === "") {
			return {
				title: "External Causes is Mandatory",
				description: "External Cause of Injury is mandatory for this region, if you have some doubt, please contact us (596-8485-5644)"
			}
		}
	}
}

export { handleValidations }
