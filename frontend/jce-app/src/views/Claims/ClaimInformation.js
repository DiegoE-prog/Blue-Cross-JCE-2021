import React, {useState} from "react"

function ClaimInformation({ claimInformation, setClaimInformation }) {
	const [dateError, setDateError] = useState('');
  
	const handleChange = (e) => {
	  const value = e.target.value;
	  setClaimInformation({
		...claimInformation,
		[e.target.name]: value,
	  });
	};
  
	const dateValidation = (e) => {
	  const inputDate = e.target.value;
	  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if(inputDate!==""){
	  if (dateRegex.test(inputDate)) {
		setDateError('');
	  } else {
		setDateError('Error in Date Format DD/MM/YYYY');
	  }
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
					<input className="w-100" name="entryDate" id="entryDate" value={claimInformation.entryDate} onChange={handleChange}onBlur={dateValidation}></input>
				
   {dateError ? <div style={{ color: 'red' }}>{dateError}</div>  : null}
  

				</div>

				<div className="col-2">
					<label className="general-jce">Discharge Date</label>
				</div>

				<div className="col-2">
					<input className="w-100" name="dischargeDate" id="dischargeDate" value={claimInformation.dischargeDate} onChange={handleChange}onBlur={dateValidation}></input>
					{dateError ? <div style={{ color: 'red' }}>{dateError}</div>  : null}
				</div>

			<div className="col-2">
					<label className="general-jce">DD/MM/YYYY</label>
				</div>
				<div className="row"></div>
				<div className="col-2">
					<label className="general-jce">Entry Hour</label>
				</div>
				<div className="col-2">
					<input className="w-100" name="entryHour" id="entryHour" value={claimInformation.entryHour} onChange={handleChange}></input>
				</div>
				<div className="col-2">
					<label className="general-jce">Discharge Hour</label>
				</div>
				<div className="col-2">
					<input className="w-100" name="dischargeHour" id="dischargeHour" value={claimInformation.dischargeHour} onChange={handleChange}></input>
				</div>
				<div className="col-2">
					<label className="general-jce">HH:MM:SS</label>
				</div>
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Institunional Claim Code</label>
					</div>
					<div className="col-10">
						<input className="w-100" name="institutionalClaimCode" id="institutionalClaimCode" value={claimInformation.institutionalClaimCode} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Professional Claim Code</label>
					</div>
					<div className="col-10">
						<input className="w-100" name="professionalClaimCode" id="professionalClaimCode" value={claimInformation.professionalClaimCode} onChange={handleChange}></input>
					</div>

					<div className="col-2">
						<label className="general-jce">Type Of Bill</label>
					</div>

					<div className="col-2">
						<input className="w-100" name="typeOfBill" id="typeOfBill" value={claimInformation.typeOfBill} onChange={handleChange}></input>
					</div>

					<div className="col-2">
						<label className="general-jce">Referal Num</label>
					</div>
					<div className="col-6">
						<input className="w-100" name="referalNum" id="referalNum" value={claimInformation.referalNum} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Service Code</label>
					</div>

					<div className="col-2">
						<input className="w-100" name="serviceCode" id="serviceCode" value={claimInformation.serviceCode} onChange={handleChange}></input>
					</div>

					<div className="col-2">
						<label className="general-jce">Auth Code</label>
					</div>

					<div className="col-4">
						<input className="w-100" name="authCode" id="authCode" value={claimInformation.authCode} onChange={handleChange}></input>
					</div>
					<div className="row">
						<div className="col-2">
							<label className="general-jce">Medical Record Number</label>
						</div>
						<div className="col-2">
							<input className="w-100" name="medicalRecordNumber" id="medicalRecordNumber" value={claimInformation.medicalRecordNumber} onChange={handleChange}></input>
						</div>

						<div className="col-2">
							<label className="general-jce">Payer Claim Control Num</label>
						</div>

						<div className="col-2">
							<input className="w-100" name="payerClaimControlNum" id="payerClaimControlNum" value={claimInformation.payerClaimControlNum} onChange={handleChange}></input>
						</div>
						<div className="row">
							<div className="col-2">
								<label className="general-jce">Auto Accident State</label>
							</div>
							<div className="col-2">
								<input className="w-100" name="autoAccidentState" id="autoAccidentState" value={claimInformation.autoAccidentState} onChange={handleChange}></input>
							</div>
							<div className="col-2">
								<label className="general-jce">File Inf</label>
							</div>
							<div className="col-2">
								<input className="w-100" name="fileInf" id="fileInf" value={claimInformation.fileInf} onChange={handleChange}></input>
							</div>
							<div className="row">
								<div className="col-2">
									<label className="general-jce">Claim Note</label>
								</div>
								<div className="col-10">
									<input className="w-100" style={{ height: "50px" }} name="claimNote" id="claimNote" value={claimInformation.claimNote} onChange={handleChange}></input>
								</div>
							</div>
							<div className="row">
								<div className="col-2">
									<label className="general-jce">Billing Note</label>
								</div>
								<div className="col-10">
									<input className="w-100" style={{ height: "50px" }} name="billingNote" id="billingNote" value={claimInformation.billingNote} onChange={handleChange}></input>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ClaimInformation
