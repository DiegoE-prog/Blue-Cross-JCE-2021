import { getListConditionPayor } from "../api/errorapi";

const handleConditions = (claim,response) => { // Marca la función como async
  try {
    // Find Payor
	console.log(claim);	
	console.log(response.data.data);
	// return handlingClaimsDiagnosisCodes(claim.diagnosisCodes)
	for (const data of response.data.data) {
		if('Principal Diagnosis' === data.fieldClaim){		
			return handlingClaimsDiagnosisCodes(claim, data.nameCondition);		
		}
	}      

  } catch (error) {
    console.error('Error:', error);
  }
};


const handlingClaimsDiagnosisCodes = (diagnosisCodes,nameCondition) => {
	const regex = /^[A-Z][A-Z][0-9][0-9][A-Z][A-Z]$/;
	switch (nameCondition) {
		case "Matches":
			if (regex.test(diagnosisCodes.principalDiagnosis)){
				return {
					title: "TEST ERROR 2116 BAC",
					description: "Principal Diagnosis Code dont have to be in the following format 'AANNAA' where A is an alpha characters and N is a number from 0 to 9"
				}
			}
		break;
	    case "Doesn't Match":
			if (!regex.test(diagnosisCodes.principalDiagnosis)){		
				return {
					title: "TEST ERROR 2116 BAC NOT",
					description: "Principal Diagnosis Code have to be in the following format 'AANNAA' where A is an alpha characters and N is a number from 0 to 9."
				  }
			}
		break;	
		default:
		  return
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

export { handleConditions}
