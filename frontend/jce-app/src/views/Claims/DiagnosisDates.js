
import React from "react"
import { useState } from "react"

function DiagnosisDates({ diagnosisDates, setDiagnosisDates }) {
	const[onsetOfSymptomError, setOnSetOfSymptomError]=useState('');
	const[initialTreatmentError, setInitialTreatmentError]=useState('');
	const[lastSentDateError, setLastSentDateError]=useState('');
	const[acuteManifestationError,setAcuteManifestationError]=useState('');
	const[accidentError, setaccidentError]=useState('');
	const[lastMenstrualDateError, setLastMenstrualDateError]=useState('');
	const[lastXRayError, setLastXRayError]=useState('');
	const[hearingVisionPrescError, setHearingVisionPrescError]=useState('');
	const[disabilityDatesError, setDisabilityDatesError]=useState('');
	const[lastWorkedError, setLastWorkedError]=useState('');
	const[authorizedReturnWorkError, setAuthorizedReturnWorkError]=useState('');
	const[assumedRelinqError, setAssumedRelinqError]=useState('');
	const[repricerReceivedError, setRepricerReceivedError]=useState('');

	const dateFormatValidation=(e, inputName)=>{
		const inputValue=e.target.value;
		const textError='Error in Date Format DD/MM/YYYY';
		const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
		console.log(inputName);
		if(inputValue&&!dateRegex.test(inputValue)){
			switch(inputName){
               case 'onsetOfSymptom':
				   return setOnSetOfSymptomError(textError);
				   case 'initialTreatment':
					   return setInitialTreatmentError(textError);
					      case'lastSentDate':
						    return setLastSentDateError(textError);
							  case'acuteManifestation':
							    return setAcuteManifestationError(textError);
								  case'accident':
								    return setaccidentError(textError);
									  case'lastMenstrualDate':
									    return setLastMenstrualDateError(textError);
										  case'lastXRay':
										    return setLastXRayError(textError);
											  case 'hearingVisionPresc':
												 return setHearingVisionPrescError(textError);
												   case 'disabilityDates':
													   return setDisabilityDatesError(textError);
													     case 'lastWorked':
															 return setLastWorkedError(textError);
															   case 'authorizedReturnWork':
																   return setAuthorizedReturnWorkError(textError);
																     case 'assumedRelinq':
																		 return setAssumedRelinqError(textError);
																		   case 'repricerReceived':
																			   return setRepricerReceivedError(textError);

			}
		}else{
			switch(inputName){
				case 'onsetOfSymptom':
					return setOnSetOfSymptomError('');
					case 'initialTreatment':
						return setInitialTreatmentError('');
						   case'lastSentDate':
							 return setLastSentDateError('');
							   case'acuteManifestation':
								 return setAcuteManifestationError('');
								   case'accident':
									 return setaccidentError('');
									   case'lastMenstrualDate':
										 return setLastMenstrualDateError('');
										   case'lastXRay':
											 return setLastXRayError('');
											   case 'hearingVisionPresc':
												  return setHearingVisionPrescError('');
													case 'disabilityDates':
														return setDisabilityDatesError('');
														  case 'lastWorked':
															  return setLastWorkedError('');
																case 'authorizedReturnWork':
																	return setAuthorizedReturnWorkError('');
																	  case 'assumedRelinq':
																		  return setAssumedRelinqError('');
																			case 'repricerReceived':
																				return setRepricerReceivedError('');
 
			 }

		}
	}

	const handleChange = (e) => {
		const value = e.target.value
		setDiagnosisDates({
			...diagnosisDates,
			[e.target.name]: value
		})
	}

	return (
		<>
			<div className="col-12">
				<label className="section-jce">Diagnosis Dates</label>
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Onset of Symptom</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="onsetOfSymptom" id="onsetOfSymptom" value={diagnosisDates.onsetOfSymptom} onChange={handleChange}onKeyUp={(event)=>dateFormatValidation(event, 'onsetOfSymptom')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{onsetOfSymptomError?<div className="col-6" style={{color: 'red'}}>{onsetOfSymptomError}</div>: null}
				</div>
			</div>
            
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Initial Treatment</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="initialTreatment" id="initialTreatment" value={diagnosisDates.initialTreatment} onChange={handleChange}onKeyUp={(event)=>dateFormatValidation(event, 'initialTreatment')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{initialTreatmentError?<div className="col-6" style={{color: 'red'}}>{initialTreatmentError}</div>: null}
				</div>
			</div>
			
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Last Sent Date</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="lastSentDate" id="lastSentDate" value={diagnosisDates.lastSentDate} onChange={handleChange}onKeyUp={(event)=>dateFormatValidation(event, 'lastSentDate')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{lastSentDateError?<div className="col-6" style={{color: 'red'}}>{lastSentDateError}</div>: null}
				</div>
			</div>
            
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Acute Manifestation</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="acuteManifestation" id="acuteManifestation" value={diagnosisDates.acuteManifestation} onChange={handleChange}onKeyUp={(event)=>dateFormatValidation(event, 'acuteManifestation')} maxLength='10' ></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{acuteManifestationError?<div className="col-6" style={{color: 'red'}}>{acuteManifestationError}</div>: null}
				</div>
			</div>
           
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Accident</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="accident" id="accident" value={diagnosisDates.accident} onChange={handleChange} onKeyUp={(event)=>dateFormatValidation(event, 'accident')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{accidentError?<div className="col-6" style={{color: 'red'}}>{accidentError}</div>: null}
				</div>
			</div>
            
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Last Menstrual Date</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="lastMenstrualDate" id="lastMenstrualDate" value={diagnosisDates.lastMenstrualDate} onChange={handleChange}onKeyUp={(event)=>dateFormatValidation(event, 'lastMenstrualDate')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{lastMenstrualDateError?<div className="col-6" style={{color: 'red'}}>{lastMenstrualDateError}</div>: null}
				</div>
			</div>
			
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Last X-Ray</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="lastXRay" id="lastXRay" value={diagnosisDates.lastXRay} onChange={handleChange} onKeyUp={(event)=>dateFormatValidation(event, 'lastXRay')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{lastXRayError?<div className="col-6" style={{color: 'red'}}>{lastXRayError}</div>: null}
				</div>
			</div>
			
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Hearing-Vision Presc</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="hearingVisionPresc" id="hearingVisionPresc" value={diagnosisDates.hearingVisionPresc} onChange={handleChange}onKeyUp={(event)=>dateFormatValidation(event, 'hearingVisionPresc')} maxLength='10' ></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{hearingVisionPrescError?<div className="col-6" style={{color: 'red'}}>{hearingVisionPrescError}</div>: null}
				</div>
			</div>
			
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Disability Dates</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="disabilityDates" id="disabilityDates" value={diagnosisDates.disabilityDates} onChange={handleChange}onKeyUp={(event)=>dateFormatValidation(event, 'disabilityDates')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{disabilityDatesError?<div className="col-6" style={{color: 'red'}}>{disabilityDatesError}</div>: null}
				</div>
			</div>
			
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Last Worked</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="lastWorked" id="lastWorked" value={diagnosisDates.lastWorked} onChange={handleChange} onKeyUp={(event)=>dateFormatValidation(event, 'lastWorked')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{lastWorkedError?<div className="col-6" style={{color: 'red'}}>{lastWorkedError}</div>: null}
				</div>
			</div>
			
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Authorized Return Work</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="authorizedReturnWork" id="authorizedReturnWork" value={diagnosisDates.authorizedReturnWork} onChange={handleChange} onKeyUp={(event)=>dateFormatValidation(event, 'authorizedReturnWork')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{authorizedReturnWorkError?<div className="col-6" style={{color: 'red'}}>{authorizedReturnWorkError}</div>: null}
				</div>
			</div>
			
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Assumed & Relinq</label>
					</div>

					<div className="col-2">
						<input className="w-100" name="assumedRelinq" id="assumedRelinq" value={diagnosisDates.assumedRelinq} onChange={handleChange} onKeyUp={(event)=>dateFormatValidation(event, 'assumedRelinq')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{assumedRelinqError?<div className="col-6" style={{color: 'red'}}>{assumedRelinqError}</div>: null}
				</div>
			</div>
     
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Repricer Received </label>
					</div>
					<div className="col-2">
						<input className="w-100" name="repricerReceived" id="repricerReceived" value={diagnosisDates.repricerReceived} onChange={handleChange} onKeyUp={(event)=>dateFormatValidation(event, 'repricerReceived')} maxLength='10'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
					{repricerReceivedError?<div className="col-6" style={{color: 'red'}}>{repricerReceivedError}</div>: null}
				</div>
			</div>
			
		</>
	)
}

export default DiagnosisDates
