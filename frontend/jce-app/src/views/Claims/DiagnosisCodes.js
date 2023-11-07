import React from "react"

function DiagnosisCodes({ diagnosisCodes, setDiagnosisCodes }) {
	const handleChange = (e) => {
		const value = e.target.value
		setDiagnosisCodes({
			...diagnosisCodes,
			[e.target.name]: value
		})
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
						<input className="w-100" name="principalDiagnosis" id="principalDiagnosis" value={diagnosisCodes.principalDiagnosis} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Admiting Diagnosis</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="admitingDiagnosis" id="admitingDiagnosis" value={diagnosisCodes.admitingDiagnosis} onChange={handleChange}></input>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Patient Reason For Visit</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="patientReasonForVisit" id="patientReasonForVisit" value={diagnosisCodes.patientReasonForVisit} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">External Causes Of Injury</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="externalCausesOfInjury" id="externalCausesOfInjury" value={diagnosisCodes.externalCausesOfInjury} onChange={handleChange}></input>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Diagnosis Related Group</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="diagnosisRelatedGroup" id="diagnosisRelatedGroup" value={diagnosisCodes.diagnosisRelatedGroup} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Other Diagnosis Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="otherDiagnosisInfo" id="otherDiagnosisInfo" value={diagnosisCodes.otherDiagnosisInfo} onChange={handleChange}></input>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Principal Procedure Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="principalProcedureInfo" id="principalProcedureInfo" value={diagnosisCodes.principalProcedureInfo} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Other Procedure Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="otherProcedureInfo" id="otherProcedureInfo" value={diagnosisCodes.otherProcedureInfo} onChange={handleChange}></input>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Occurrence Spam Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="occurrenceSpamInfo" id="occurrenceSpamInfo" value={diagnosisCodes.occurrenceSpamInfo} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Occurrence Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="ocurrenceInfo" id="ocurrenceInfo" value={diagnosisCodes.ocurrenceInfo} onChange={handleChange}></input>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Value Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="valueInfo" id="valueInfo" value={diagnosisCodes.valueInfo} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Condition Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="conditionInfo" id="conditionInfo" value={diagnosisCodes.conditionInfo} onChange={handleChange}></input>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Treatment Code Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="treatmentCodeInfo" id="treatmentCodeInfo" value={diagnosisCodes.treatmentCodeInfo} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Claim Pricing Info</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="claimPricingInfo" id="claimPricingInfo" value={diagnosisCodes.claimPricingInfo} onChange={handleChange}></input>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
					<div className="col-2">
						<label className="general-jce" style={{ color: "red" }}>
							ERROR MESSAGE AREA
						</label>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		</>
	)
}

export default DiagnosisCodes
