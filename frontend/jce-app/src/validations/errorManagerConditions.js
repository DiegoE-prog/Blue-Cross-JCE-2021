import { getListConditionPayor } from "../api/errorapi";

const handleConditions = (claim,response) => {
  try {
    // Find Payor
	for (const data of response.data.data) {
		if('Principal Diagnosis' === data.fieldClaim){	
			if (data.nameCondition === 'Matches' || data.nameCondition === "Doesn't Match") {
				return handlingClaimsDiagnosisCodes(claim, data);
			}
			if (response.data.data.includes("Is Entered") || response.data.data.includes("Is Entered")) {
				return handlingClaimsAdminDiagnosis(claim, data, response);
			}
			if (data.nameCondition === 'In List' || data.nameCondition === 'Not in List') {
				return handlingClaimsDiagnosisList(claim, data);
			}
			if (data.nameCondition === 'Equal to' || data.nameCondition === 'Not equals to') {			
				return handlingClaimsDiagnosisDirect(claim, data);
			}								
		}
		if('Date - Initial Treatment' === data.fieldClaim){
			if (data.nameCondition === 'Equal to' || data.nameCondition === 'Not equals to') {			
				return handlingClaimsDiagnosisDirect(claim, data);
			}								
		}
	}      
  } catch (error) {
    // console.error('Error:', error);
  }
};

const handlingClaimsDiagnosisDirect = (claim,data) => {
	switch (data.nameCondition) {
		case 'Equal to':
			if (claim.diagnosisCodes.principalDiagnosis === data.value){				
				return {
					title: 'TEST ERROR 2113 ' + data.value,
					// description: 'The Principal Diagnosis Code cannot be ' + data.value
					description: data.description 
				}
			}
			if (claim.diagnosisDates.initialTreatment === data.value){				
				return {
					title: 'TEST ERROR 2113 ' + data.value,
					// description: 'The Principal Diagnosis Code cannot be ' + data.value
					description: data.description 
				}
			}
		break;
	    case "Not equals to":
			if (claim.diagnosisCodes.principalDiagnosis !== data.value){		
				return {
					title: 'TEST ERROR 2113 ' + data.value + ' NOT',
					// description: 'The Principal Diagnosis Code have to be ' + data.value 
					description: data.description
				}
			}
			if (claim.diagnosisDates.initialTreatment !== data.value){		
				return {
					title: 'TEST ERROR 2113 ' + data.value + ' NOT',
					// description: 'The Principal Diagnosis Code have to be ' + data.value 
					description: data.description
				}
			}
		break;	
		default:
		  return
	  }	
}

const handlingClaimsDiagnosisList = (claim, data) => {
	switch (data.nameCondition) {
	  case "In List":
		
		const values = data.value.split(",");
		const listItems = values.map((value, index) => {
		  return `${index + 1}. ${value}`;
		});
		// if (values.includes(claim.diagnosisCodes.principalDiagnosis)) {
			return {
			title: "TEST ERROR 2114 BAC",
			// description: (
			//   <>
			// 	The Principal Diagnosis Code cannot be one of the following list:
			// 	<br />
			// 	{listItems.join(" \n ")}
			//   </>
			// ),
			description: data.description
		  };
		// }
		break;
	  case "Not in List":
		const valuesArray = data.value.split(",");
  
		// if (!valuesArray.includes(claim.diagnosisCodes.principalDiagnosis)) {
		  return {
			title: "TEST ERROR 2114 BAC NOT",
			// description: (
			//   <>
			// 	The Principal Diagnosis Code must be one of the following list:
			// 	<br />
			// 	{listItems.join("<br />")}
			//   </>
			// ),
			description: data.description
		  };
		// }
		break;
	  default:
		return;
	}
  };

const handlingClaimsAdminDiagnosis = (claim,data,response) => {
	if(response.data.data.includes("Is Entered")){
		if (data.value ===  claim.diagnosisCodes.principalDiagnosis){				
			if (claim.diagnosisCodes.admitingDiagnosis === null || claim.diagnosisCodes.admitingDiagnosis === undefined){
			}else{
				return {
					title: "TEST ERROR 2115 BAC",
					// description: 'When Principal Diagnosis Code is ' + data.value + ' then Admiting Diagnosis have to be empty'
					description: data.description
				}
			}
		}
	}
	if(response.data.data.includes("Not Entered")){
		if (data.value ===  claim.diagnosisCodes.principalDiagnosis){				
			if (claim.diagnosisCodes.admitingDiagnosis === null || claim.diagnosisCodes.admitingDiagnosis === undefined){
				return {
					title: "TEST ERROR 2115 BAC NOT",
					// description: "When Principal Diagnosis Code is " + data.value + " then Admiting Diagnosis doesn't have to be empty"
					description: data.description
				}
			}
		}
	}
}

const handlingClaimsDiagnosisCodes = (claim,data) => {
	// const regex = /^[A-Za-z][A-Za-z][0-9][0-9][A-Za-z][A-Za-z]$/;	
	const regex = new RegExp( `^${data.value}$`, 'i');
	console.log(data.value);
	switch (data.nameCondition) {
		case 'Matches':
			if (regex.test(claim.diagnosisCodes.principalDiagnosis)){				
				return {
					title: "TEST ERROR 2116 BAC",
					// description: "Principal Diagnosis Code dont have to be in the following format 'AANNAA' where A is an alpha characters and N is a number from 0 to 9"
					description: data.description
				}
			}
		break;
	    case "Doesn't Match":
			if (!regex.test(claim.diagnosisCodes.principalDiagnosis)){		
				return {
					title: "TEST ERROR 2116 BAC NOT",
					// description: "Principal Diagnosis Code have to be in the following format 'AANNAA' where A is an alpha characters and N is a number from 0 to 9."
					description: data.description
				}
			}
		break;	
		default:
		  return
	  }	
}

export { handleConditions}
