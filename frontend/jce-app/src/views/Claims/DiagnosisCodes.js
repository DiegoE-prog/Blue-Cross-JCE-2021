import React from "react"
import { useState } from "react"

function DiagnosisCodes({ diagnosisCodes, setDiagnosisCodes }) {
	const [principalDiagnosisError, setPrincipalDiagnosisError]=useState('');
	const [admitingDiagnosisError, setAdmitingDiagnosisError]=useState('');
	const [patientReasonForVisitError, setPatientReasonForVisitError]=useState('');
	const [externalCausesOfInjuryError, setExternalCausesOfInjuryError]=useState('');
	const [diagnosisRelatedGroupError, setDiagnosisRelatedGroupError]=useState('');
	const [otherDiagnosisInfoError, setOtherDiagnosisInfoError]=useState('');
	const [principalProcedureInfoError, setPrincipalProcedureInfoError]=useState('');
	const [otherProcedureInfoError, setOtherProcedureInfoError]=useState('');
	const [occurrenceSpamInfoError, setOcurrenceSpamInfoError]=useState('');
	const [occurrenceInfoError, setOccurrenceInfoError]=useState('');
	const [valueInfoError, setValueInfoError]=useState('');
	const [conditionInfoError, setConditionInfoError]=useState('');
	const[treatmentCodeInfoError, setTreatmentInfoError]=useState('');
	const [claimPricingInfoError, setClaimPricingInfoError]=useState('');

	const handleChange = (e) => {
		const value = e.target.value
		setDiagnosisCodes({
			...diagnosisCodes,
			[e.target.name]: value
		})
	}
	const maxLengthValidation = (e, inputName, maxLength)=>{
		const inputValue=e.target.value;
		const errorText="Should have 6 Alphanumeric characters"
	    console.log(inputName);
        if(inputValue.length<maxLength){
			switch(inputName){

              case 'principalDiagnosis': return setPrincipalDiagnosisError(errorText);
			  case 'admitingDiagnosis': return setAdmitingDiagnosisError(errorText);
			  case 'patientReasonForVisit': return setPatientReasonForVisitError(errorText);
			  case 'externalCausesOfInjury': return setExternalCausesOfInjuryError(errorText);
			  case 'diagnosisRelatedGroup': return setDiagnosisRelatedGroupError (errorText);
			  case 'otherDiagnosisInfo': return setOtherDiagnosisInfoError(errorText);
			  case 'principalProcedureInfo': return setPrincipalProcedureInfoError(errorText);
			  case 'otherProcedureInfo': return setOtherProcedureInfoError(errorText);
			  case 'occurrenceSpamInfo': return setOcurrenceSpamInfoError(errorText);
			  case 'ocurrenceInfo': return setOccurrenceInfoError(errorText);
			  case 'valueInfo': return setValueInfoError(errorText);
			  case 'conditionInfo': return setConditionInfoError(errorText);
			  case 'treatmentCodeInfo': return setTreatmentInfoError(errorText);
			  case 'claimPricingInfo': return  setClaimPricingInfoError(errorText);
			}				

		}else{
			switch(inputName){
				case 'principalDiagnosis': return setPrincipalDiagnosisError('');
				case 'admitingDiagnosis': return setAdmitingDiagnosisError('');
				case 'patientReasonForVisit': return setPatientReasonForVisitError('');
				case 'externalCausesOfInjury': return setExternalCausesOfInjuryError('');
				case 'diagnosisRelatedGroup': return setDiagnosisRelatedGroupError ('');
				case 'otherDiagnosisInfo': return setOtherDiagnosisInfoError('');
				case 'principalProcedureInfo': return setPrincipalProcedureInfoError('');
				case 'otherProcedureInfo': return setOtherProcedureInfoError('');
				case 'occurrenceSpamInfo': return setOcurrenceSpamInfoError('');
				case 'ocurrenceInfo': return setOccurrenceInfoError('');
				case 'valueInfo': return setValueInfoError('');
				case 'conditionInfo': return setConditionInfoError('');
				case 'treatmentCodeInfo': return setTreatmentInfoError('');
				case 'claimPricingInfo': return  setClaimPricingInfoError('');
			}
		}
	}
	return (
		<>
			<div className="col-6">
				<label className="section-jce">Diagnosis Codes</label>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Principal Diagnosis</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="principalDiagnosis" id="principalDiagnosis" value={diagnosisCodes.principalDiagnosis} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'principalDiagnosis',6)}maxLength='6'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Admiting Diagnosis</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="admitingDiagnosis" id="admitingDiagnosis" value={diagnosisCodes.admitingDiagnosis} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'admitingDiagnosis',6)}maxLength='6'></input>
					</div>
				</div>
				<div className="row">
  {principalDiagnosisError   && admitingDiagnosisError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{principalDiagnosisError  }</div>
      <div className="col-6" style={{ color: 'red' }}>{admitingDiagnosisError}</div>
    </>
  ) : (
    <>
      {principalDiagnosisError   ? (
        <div className="col-12" style={{ color: 'red' }}>{principalDiagnosisError  }</div>
      ) : null}

      {admitingDiagnosisError ? (
        <div className={principalDiagnosisError   ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {admitingDiagnosisError}
        </div>
      ) : null}
    </>
  )}
</div>
			</div>



			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Patient Reason For Visit</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="patientReasonForVisit" id="patientReasonForVisit" value={diagnosisCodes.patientReasonForVisit} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'patientReasonForVisit',6)}maxLength='6'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">External Causes Of Injury</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="externalCausesOfInjury" id="externalCausesOfInjury" value={diagnosisCodes.externalCausesOfInjury} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'externalCausesOfInjury',6)}maxLength='6'></input>
					</div>
				</div>
				<div className="row">
  {patientReasonForVisitError   && externalCausesOfInjuryError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{patientReasonForVisitError  }</div>
      <div className="col-6" style={{ color: 'red' }}>{externalCausesOfInjuryError}</div>
    </>
  ) : (
    <>
      {patientReasonForVisitError   ? (
        <div className="col-12" style={{ color: 'red' }}>{patientReasonForVisitError  }</div>
      ) : null}

      {externalCausesOfInjuryError ? (
        <div className={patientReasonForVisitError   ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {externalCausesOfInjuryError}
        </div>
      ) : null}
    </>
  )}
</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Diagnosis Related Group</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="diagnosisRelatedGroup" id="diagnosisRelatedGroup" value={diagnosisCodes.diagnosisRelatedGroup} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'diagnosisRelatedGroup',6)}maxLength='6' ></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Other Diagnosis Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="otherDiagnosisInfo" id="otherDiagnosisInfo" value={diagnosisCodes.otherDiagnosisInfo} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'otherDiagnosisInfo',6)}maxLength='6'></input>
					</div>
				</div>
				<div className="row">
  {diagnosisRelatedGroupError   && otherDiagnosisInfoError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{diagnosisRelatedGroupError  }</div>
      <div className="col-6" style={{ color: 'red' }}>{otherDiagnosisInfoError}</div>
    </>
  ) : (
    <>
      {diagnosisRelatedGroupError   ? (
        <div className="col-12" style={{ color: 'red' }}>{diagnosisRelatedGroupError  }</div>
      ) : null}

      {otherDiagnosisInfoError ? (
        <div className={diagnosisRelatedGroupError   ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {otherDiagnosisInfoError}
        </div>
      ) : null}
    </>
  )}
</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Principal Procedure Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="principalProcedureInfo" id="principalProcedureInfo" value={diagnosisCodes.principalProcedureInfo} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'principalProcedureInfo',6)}maxLength='6' ></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Other Procedure Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="otherProcedureInfo" id="otherProcedureInfo" value={diagnosisCodes.otherProcedureInfo} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'otherProcedureInfo',6)}maxLength='6'></input>
					</div>
				</div>
				<div className="row">
  {principalProcedureInfoError   && otherProcedureInfoError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{principalProcedureInfoError  }</div>
      <div className="col-6" style={{ color: 'red' }}>{otherProcedureInfoError}</div>
    </>
  ) : (
    <>
      {principalProcedureInfoError   ? (
        <div className="col-12" style={{ color: 'red' }}>{principalProcedureInfoError  }</div>
      ) : null}

      {otherProcedureInfoError ? (
        <div className={principalProcedureInfoError   ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {otherProcedureInfoError}
        </div>
      ) : null}
    </>
  )}
</div>
			</div>



			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Occurrence Spam Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="occurrenceSpamInfo" id="occurrenceSpamInfo" value={diagnosisCodes.occurrenceSpamInfo} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'occurrenceSpamInfo',6)}maxLength='6'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Occurrence Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="ocurrenceInfo" id="ocurrenceInfo" value={diagnosisCodes.ocurrenceInfo} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'ocurrenceInfo',6)}maxLength='6'></input>
					</div>
				</div>
				<div className="row">
  {occurrenceSpamInfoError   && occurrenceInfoError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{occurrenceSpamInfoError  }</div>
      <div className="col-6" style={{ color: 'red' }}>{occurrenceInfoError}</div>
    </>
  ) : (
    <>
      {occurrenceSpamInfoError   ? (
        <div className="col-12" style={{ color: 'red' }}>{occurrenceSpamInfoError  }</div>
      ) : null}

      {occurrenceInfoError ? (
        <div className={occurrenceSpamInfoError   ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {occurrenceInfoError}
        </div>
      ) : null}
    </>
  )}
</div>
			</div>
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Value Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="valueInfo" id="valueInfo" value={diagnosisCodes.valueInfo} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'valueInfo',6)}maxLength='6'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Condition Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="conditionInfo" id="conditionInfo" value={diagnosisCodes.conditionInfo} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'conditionInfo',6)}maxLength='6'></input>
					</div>
				</div>
				<div className="row">
  {valueInfoError   && conditionInfoError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{valueInfoError  }</div>
      <div className="col-6" style={{ color: 'red' }}>{conditionInfoError}</div>
    </>
  ) : (
    <>
      {valueInfoError   ? (
        <div className="col-12" style={{ color: 'red' }}>{valueInfoError}</div>
      ) : null}

      {conditionInfoError ? (
        <div className={valueInfoError   ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {conditionInfoError}
        </div>
      ) : null}
    </>
  )}
</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Treatment Code Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="treatmentCodeInfo" id="treatmentCodeInfo" value={diagnosisCodes.treatmentCodeInfo} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'treatmentCodeInfo',6)}maxLength='6'></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Claim Pricing Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="claimPricingInfo" id="claimPricingInfo" value={diagnosisCodes.claimPricingInfo} onChange={handleChange} onKeyUp={(event)=>maxLengthValidation(event,'claimPricingInfo',6)}maxLength='6'></input>
					</div>
				</div>
				<div className="row">
  {treatmentCodeInfoError   && claimPricingInfoError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{treatmentCodeInfoError  }</div>
      <div className="col-6" style={{ color: 'red' }}>{claimPricingInfoError}</div>
    </>
  ) : (
    <>
      {treatmentCodeInfoError   ? (
        <div className="col-12" style={{ color: 'red' }}>{treatmentCodeInfoError  }</div>
      ) : null}

      {claimPricingInfoError ? (
        <div className={treatmentCodeInfoError   ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {claimPricingInfoError}
        </div>
      ) : null}
    </>
  )}
</div>
			</div>

		</>
	)
}

export default DiagnosisCodes
