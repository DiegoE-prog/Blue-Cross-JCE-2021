import { Time } from "phaser";
import React, {useState} from "react"



function ClaimInformation({ claimInformation, setClaimInformation }) {
	const [entryDateError, setEntryDateError] = useState('');
	const [dischargeDateError, setDischargeDateError] = useState('');
	const [entryHourError, setEntryHourError] = useState('');
	const [dischargeHourError, setDischargeHourError] = useState('');
	const[institutionalClaimCodeDisabled, setInstitutionalClaimCodeDisabled]=useState('');
	const[professionalClaimCodeDisabled, setProfessionalClaimCodeDisabled]=useState('');
	const[numericInstitutionalError, setNumericInstitutionalError]=useState('');

	const[numericProfessionalError, setNumericProfessionalError]=useState('');
	const[numerictypeOfBillError, setNumericTypeOfBillError]=useState('');
	const[numericReferalNumberError, setNumericReferalNumberError]=useState('');
	const[numericServiceCodeError, setNumericServiceCodeError]=useState('');
	const[numericAuthCodeError, setNumericAuthCodeError]=useState('');
	const[numericMedicalRecordError, setNumericMedicalRecordNumberError]=useState('');
	const[numericPayorClaimError, setNumericPayorClaimError]=useState('');
	const[numericAutoAccidentError, setNumericAutoAccidentStateError]=useState('');
	const[numericFileInfoError, setNumericFileInfoError]=useState('');
	const[numericClaimNoteError, setNumericClaimNoteError]=useState('');
	const[numericBillingNoteError, setNumericBillingNoteError]=useState('');


	const handleChange = (e) => {
	  const value = e.target.value;
	  setClaimInformation({
		...claimInformation,
		[e.target.name]: value,
	  });
	};
const validateFullClaimCode=(event,currentInput)=>{
const inputValue=event.target.value;
if(inputValue.length==4){
	if(currentInput=='institutional'){
       setProfessionalClaimCodeDisabled('disabled');
	   claimInformation.professionalClaimCode='';
	}
	else{
		setInstitutionalClaimCodeDisabled('disabled');
		claimInformation.institutionalClaimCode='';
	}
}
}
	const onlyNumbersValidation=(event)=>{
		
		if (!/[0-9]/.test(event.key)) {
			event.preventDefault();
		  }
		

	}

	const maxLengthValidation = (e, inputName, maxLength)=>{
		const inputValue=e.target.value;
	    console.log(inputName);
        if(inputValue.length>maxLength){
			switch(inputName){
              case 'institutional': return setNumericInstitutionalError('Should have max 5 numeric characters');
			  case 'professional': return setNumericProfessionalError('Should have max 5 numeric characters');
			  case 'typeOfBill': return setNumericTypeOfBillError('Should have max 5 numeric characters');
			  case 'referalNumber': return setNumericReferalNumberError('Should have max 6 Alphanumeric characters');
			  case 'serviceCode': return setNumericServiceCodeError('Should have max 6 numeric characters');
			  case 'authCode': return setNumericAuthCodeError('Should have max 6 Alphanumeric characters');
			  case 'medicalRecordNumber': return setNumericMedicalRecordNumberError('Should have max 6 Alphanumeric characters');
			  case 'payorClaim': return setNumericPayorClaimError('Should have max 6 Alphanumeric characters');
			  case 'autoAccidentState': return setNumericAutoAccidentStateError('Should have max 6 Alphanumeric characters');
			  case 'fileInfo': return setNumericFileInfoError('Should have max 6 Alphanumeric characters');
			  case 'claimNote': return setNumericClaimNoteError('Should have max 300 Alphanumeric characters');
			  case 'billingNote': return setNumericBillingNoteError('Should have max 300 Alphanumeric characters');
			}				

		}else{
			switch(inputName){
				case 'institutional': return setNumericInstitutionalError('');
				case 'professional': return setNumericProfessionalError('');
				case 'typeOfBill': return setNumericTypeOfBillError('');
				case 'referalNumber': return setNumericReferalNumberError('');
				case 'serviceCode': return setNumericServiceCodeError('');
				case 'authCode': return setNumericAuthCodeError('');
				case 'medicalRecordNumber': return setNumericMedicalRecordNumberError('');
				case 'payorClaim': return setNumericPayorClaimError('');
				case 'autoAccidentState': return setNumericAutoAccidentStateError('');
				case 'fileInfo': return setNumericFileInfoError('');
				case 'claimNote': return setNumericClaimNoteError('');
				case 'billingNote': return setNumericBillingNoteError('');
			}
		}
	}
  
	const entryDateValidation = (e) => {
	  const inputDate = e.target.value;
	  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if(inputDate!==""){
	  if (dateRegex.test(inputDate)) {
		setEntryDateError('');
	  } else {
		setEntryDateError('Error in date format DD/MM/YYYY');
	  }
	  }else{
		  setEntryDateError('');
	  }
	};

	const dischargeDateValidation = (e) => {
		const inputDate = e.target.value;
		const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
		if(inputDate!==""){

		if (dateRegex.test(inputDate)) {
			setDischargeDateError('');
		} else {
			setDischargeDateError('Error in date format DD/MM/YYYY');
		}
	  }
	  else{
		setDischargeDateError('');
	  }
	  };

	  const entryHourValidation = (e) => {
		const inputDate = e.target.value;
		const dateRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
		const hhmmRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
		if(inputDate!==""){
		if (dateRegex.test(inputDate)) {
			setEntryHourError('');
		} else if(hhmmRegex.test(inputDate)) {
			e.target.value=inputDate+':00';
			setEntryHourError('');
			
		}
		else{
			setEntryHourError('Error in date format HH:MM:SS');
		}
	  }
	  else{
		setEntryHourError('');
	  }
	  };

	  const dischargeHourValidation = (e) => {
		const inputDate = e.target.value;
		const dateRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
		if(inputDate!==""){
		if (dateRegex.test(inputDate)) {
			setDischargeHourError('');
		} else {
			setDischargeHourError('Error in date format HH:MM:SS');
		}
	  }
	  else{
		setDischargeHourError('');
	  }
	  };

	  

return (
		<>
			<div className="col-2">
				<label className="section-jce">Claim Information</label>
			</div>
			<div className="row">
				<div className="col-2">
					<label className="general-jce">Claim Number</label>
				</div>

				<div className="col-10">
					<input className="w-100" name="claimNumber" id="claimNumber" value={claimInformation.claimNumber} onChange={handleChange} readOnly></input>
				</div>

				<div className="col-2">
					<label className="general-jce">Entry Date</label>
				</div>

				<div className="col-2">
					<input className="w-100" name="entryDate" id="entryDate" value={claimInformation.entryDate} onChange={handleChange}onKeyUp={entryDateValidation} onBlur={entryDateValidation} type='date'></input>
				</div>
				
				<div className="col-2">
					<label className="general-jce">Discharge Date</label>
				</div>

				<div className="col-2">
					<input className="w-100" name="dischargeDate" id="dischargeDate" value={claimInformation.dischargeDate} onChange={handleChange}onKeyUp={dischargeDateValidation}onBlur={dischargeDateValidation} type='date' ></input>
					
				</div>
				
			<div className="col-2">
					<label className="general-jce">DD/MM/YYYY</label>
				</div>
				{entryDateError !=="" ? <div className="col-4" style={{ color: 'red' }}>{entryDateError}</div>  : <div className="col-4" style={{ color: 'red' }}></div>}
				{dischargeDateError !=="" ? <div className="col-4" style={{ color: 'red' }}>{dischargeDateError}</div>  : null}
				<div className="row"></div>

				<div className="col-2">
					<label className="general-jce">Entry Hour</label>
				</div>
				<div className="col-2">
					<input className="w-100" name="entryHour" id="entryHour" value={claimInformation.entryHour} onChange={handleChange} onKeyUp={entryHourValidation}onBlur={entryHourValidation} type='time'></input>
				</div>
				<div className="col-2">
					<label className="general-jce">Discharge Hour</label>
				</div>
				<div className="col-2">
					<input className="w-100" name="dischargeHour" id="dischargeHour" value={claimInformation.dischargeHour} onChange={handleChange} onKeyUp={dischargeHourValidation}onBlur={dischargeHourValidation} type='time'></input>
				</div>
				<div className="col-2">
					<label className="general-jce">HH:MM:SS</label>
				</div>
				{entryHourError ? <div className="col-4" style={{ color: 'red' }}>{entryHourError}</div>  : <div className="col-4" style={{ color: 'red' }}></div>}
				{dischargeHourError ? <div className="col-4" style={{ color: 'red' }}>{dischargeHourError}</div>  : null}
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Institutional Claim Code</label>
					</div>
					<div className="col-10">
						<input className="w-100" name="institutionalClaimCode" id="institutionalClaimCode" value={claimInformation.institutionalClaimCode} onChange={handleChange} onKeyPress={onlyNumbersValidation} onKeyDown={(event)=>validateFullClaimCode(event,'institutional')}disabled={institutionalClaimCodeDisabled} onKeyUp={(event)=>maxLengthValidation(event,'institutional',5)}></input>
					</div>
					{numericInstitutionalError ? <div className="col-12" style={{ color: 'red' }}>{numericInstitutionalError}</div> : null}
					<div className="col-2">
						<label className="general-jce">Professional Claim Code</label>
					</div>
					<div className="col-10">
						<input className="w-100" name="professionalClaimCode" id="professionalClaimCode" value={claimInformation.professionalClaimCode} onKeyPress={onlyNumbersValidation} onChange={handleChange}onKeyDown={(event)=>validateFullClaimCode(event,'professional')} disabled={professionalClaimCodeDisabled}onKeyUp={(event)=>maxLengthValidation(event,'professional',5)}></input>
					</div>
					{numericProfessionalError ? <div className="col-12" style={{ color: 'red' }}>{numericProfessionalError}</div> : null}
					<div className="col-2">
						<label className="general-jce">Type Of Bill</label>
					</div>

					<div className="col-2">
						<input className="w-100" name="typeOfBill" id="typeOfBill" value={claimInformation.typeOfBill} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'typeOfBill',5)}></input>
					</div>

					<div className="col-2">
						<label className="general-jce">Referal Num</label>
					</div>
					<div className="col-6">
						<input className="w-100" name="referalNum" id="referalNum" value={claimInformation.referalNum} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'referalNumber',6)}></input>
					</div>
					<div className="row">
  {numerictypeOfBillError && numericReferalNumberError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{numerictypeOfBillError}</div>
      <div className="col-6" style={{ color: 'red' }}>{numericReferalNumberError}</div>
    </>
  ) : (
    <>
      {numerictypeOfBillError ? (
        <div className="col-12" style={{ color: 'red' }}>{numerictypeOfBillError}</div>
      ) : null}

      {numericReferalNumberError ? (
        <div className={numerictypeOfBillError ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {numericReferalNumberError}
        </div>
      ) : null}
    </>
  )}
</div>
					<div className="col-2">
						<label className="general-jce">Service Code</label>
					</div>

					<div className="col-2">
						<input className="w-100" name="serviceCode" id="serviceCode" value={claimInformation.serviceCode} onKeyPress={onlyNumbersValidation} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'serviceCode',6)}></input>
					</div>

					<div className="col-2">
						<label className="general-jce">Auth Code</label>
					</div>

					<div className="col-4">
						<input className="w-100" name="authCode" id="authCode" value={claimInformation.authCode} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'authCode',6)}></input>
					</div>
				
					<div className="row">
  {numericServiceCodeError && numericAuthCodeError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{numericServiceCodeError}</div>
      <div className="col-6" style={{ color: 'red' }}>{numericAuthCodeError}</div>
    </>
  ) : (
    <>
      {numericServiceCodeError ? (
        <div className="col-12" style={{ color: 'red' }}>{numericServiceCodeError}</div>
      ) : null}

      {numericAuthCodeError ? (
        <div className={numericServiceCodeError ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {numericAuthCodeError}
        </div>
      ) : null}
    </>
  )}
</div>
					<div className="row">
						<div className="col-2">
							<label className="general-jce">Medical Record Number</label>
						</div>
						<div className="col-2">
							<input className="w-100" name="medicalRecordNumber" id="medicalRecordNumber" value={claimInformation.medicalRecordNumber} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'medicalRecordNumber',6)}></input>
						</div>

						<div className="col-2">
							<label className="general-jce">Payer Claim Control Num</label>
						</div>

						<div className="col-2">
							<input className="w-100" name="payerClaimControlNum" id="payerClaimControlNum" value={claimInformation.payerClaimControlNum} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'payorClaim',6)}></input>
						</div>
						<div className="row">
  {numericMedicalRecordError  && numericPayorClaimError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{numericMedicalRecordError }</div>
      <div className="col-6" style={{ color: 'red' }}>{numericPayorClaimError}</div>
    </>
  ) : (
    <>
      {numericMedicalRecordError  ? (
        <div className="col-12" style={{ color: 'red' }}>{numericMedicalRecordError }</div>
      ) : null}

      {numericPayorClaimError ? (
        <div className={numericMedicalRecordError  ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {numericPayorClaimError}
        </div>
      ) : null}
    </>
  )}
</div>
						<div className="row">
							<div className="col-2">
								<label className="general-jce">Auto Accident State</label>
							</div>
							<div className="col-2">
								<input className="w-100" name="autoAccidentState" id="autoAccidentState" value={claimInformation.autoAccidentState} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'autoAccidentState',6)}></input>
							</div>
							<div className="col-2">
								<label className="general-jce">File Inf</label>
							</div>
							<div className="col-2">
								<input className="w-100" name="fileInf" id="fileInf" value={claimInformation.fileInf} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'fileInfo',6)}></input>
							</div>
							
							<div className="row">
  {numericAutoAccidentError   && numericFileInfoError ? (
    <>
      <div className="col-6" style={{ color: 'red' }}>{numericAutoAccidentError  }</div>
      <div className="col-6" style={{ color: 'red' }}>{numericFileInfoError}</div>
    </>
  ) : (
    <>
      {numericAutoAccidentError   ? (
        <div className="col-12" style={{ color: 'red' }}>{numericAutoAccidentError  }</div>
      ) : null}

      {numericFileInfoError ? (
        <div className={numericAutoAccidentError   ? 'col-6' : 'col-6 offset-6'} style={{ color: 'red' }}>
          {numericFileInfoError}
        </div>
      ) : null}
    </>
  )}
</div>
							<div className="row">
								<div className="col-2">
									<label className="general-jce">Claim Note</label>
								</div>
								<div className="col-10">
									<input className="w-100" style={{ height: "50px" }} name="claimNote" id="claimNote" value={claimInformation.claimNote} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'claimNote',300)}></input>
								</div>
							</div>
							{numericClaimNoteError ? <div className="col-12" style={{ color: 'red' }}>{numericClaimNoteError}</div> : null}
							<div className="row">
								<div className="col-2">
									<label className="general-jce">Billing Note</label>
								</div>
								<div className="col-10">
									<input className="w-100" style={{ height: "50px" }} name="billingNote" id="billingNote" value={claimInformation.billingNote} onChange={handleChange}onKeyUp={(event)=>maxLengthValidation(event,'billingNote',300)}></input>
								</div>
							</div>
							{numericBillingNoteError ? <div className="col-12" style={{ color: 'red' }}>{numericBillingNoteError}</div> : null}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ClaimInformation
