import React from "react"

function DiagnosisDates({ diagnosisDates, setDiagnosisDates }) {
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
						<input className="w-100" name="onsetOfSymptom" id="onsetOfSymptom" value={diagnosisDates.onsetOfSymptom} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Initial Treatment</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="initialTreatment" id="initialTreatment" value={diagnosisDates.initialTreatment} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Last Sent Date</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="lastSentDate" id="lastSentDate" value={diagnosisDates.lastSentDate} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Acute Manifestation</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="acuteManifestation" id="acuteManifestation" value={diagnosisDates.acuteManifestation} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Accident</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="accident" id="accident" value={diagnosisDates.accident} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Last Menstrual Date</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="lastMenstrualDate" id="lastMenstrualDate" value={diagnosisDates.lastMenstrualDate} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Last X-Ray</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="lastXRay" id="lastXRay" value={diagnosisDates.lastXRay} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Hearing-Vision Presc</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="hearingVisionPresc" id="hearingVisionPresc" value={diagnosisDates.hearingVisionPresc} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Disability Dates</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="disabilityDates" id="disabilityDates" value={diagnosisDates.disabilityDates} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Last Worked</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="lastWorked" id="lastWorked" value={diagnosisDates.lastWorked} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Authorized Return Work</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="authorizedReturnWork" id="authorizedReturnWork" value={diagnosisDates.authorizedReturnWork} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Assumed & Relinq</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="assumedRelinq" id="assumedRelinq" value={diagnosisDates.assumedRelinq} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>

			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Date - Repricer Received </label>
					</div>
					<div className="col-2">
						<input className="w-100" name="repricerReceived" id="repricerReceived" value={diagnosisDates.repricerReceived} onChange={handleChange}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">DD/MM/YYY</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default DiagnosisDates
