import React, { useState } from "react"
import MemberInformation from "./MemberInformation"
import PayorInformation from "./PayorInformation"
import ProviderInformation from "./ProviderInformation"
import ClaimInformation from "./ClaimInformation"
import DiagnosisDates from "./DiagnosisDates"
import DiagnosisCodes from "./DiagnosisCodes"
import CostSection from "./CostSection"

function ClaimPage() {
	const [member, setMember] = useState({
		id: "",
		name: "",
		lastName: "",
		sex: "",
		address: "",
		zipCode: "",
		state: "",
		city: "",
		dob: "",
		subscribedDate: ""
	})

	const [payor, setPayor] = useState({
		id: "",
		name: "",
		address: "",
		zipCode: "",
		state: ""
	})

	const [provider, setProvider] = useState({
		id: "",
		name: "",
		type: "",
		address: "",
		zipCode: "",
		state: "",
		city: ""
	})

	const [claimInformation, setClaimInformation] = useState({
		claimNumber: "",
		entryDate: "",
		dischargeDate: "",
		entryHour: "",
		dischargeHour: "",
		institutionalClaimCode: "",
		professionalClaimCode: "",
		typeOfBill: "",
		referalNum: "",
		serviceCode: "",
		authCode: "",
		medicalRecordNumber: "",
		payerClaimControlNum: "",
		autoAccidentState: "",
		fileInf: "",
		claimNote: "",
		billingNote: ""
	})

	const [diagnosisDates, setDiagnosisDates] = useState({
		onsetOfSymptom: "",
		initialTreatment: "",
		lastSentDate: "",
		acuteManifestation: "",
		accident: "",
		lastMenstrualDate: "",
		lastXRay: "",
		hearingVisionPresc: "",
		disabilityDates: "",
		lastWorked: "",
		authorizedReturnWork: "",
		assumedRelinq: "",
		repricerReceived: ""
	})

	const [diagnosisCodes, setDiagnosisCodes] = useState({
		principalDiagnosis: "",
		admitingDiagnosis: "",
		patientReasonForVisit: "",
		externalCausesOfInjury: "",
		diagnosisRelatedGroup: "",
		otherDiagnosisInfo: "",
		principalProcedureInfo: "",
		otherProcedureInfo: "",
		occurrenceSpamInfo: "",
		ocurrenceInfo: "",
		valueInfo: "",
		conditionInfo: "",
		treatmentCodeInfo: "",
		claimPricingInfo: ""
	})

	const [costs, setCosts] = useState({
		costForService: "",
		costOfMaterial: "",
		costForMedicine: "",
		providerCost: "",
		totalAmount: ""
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		const claim = {
			member: member,
			payor: payor,
			provider: provider,
			claimInformation: claimInformation,
			diagnosisDates: diagnosisDates,
			diagnosisCodes: diagnosisCodes,
			costs: costs
		}
		console.log(claim)
	}

	return (
		<div className="container">
			<MemberInformation member={member} setMember={setMember} />
			<hr />
			<PayorInformation payor={payor} setPayor={setPayor} />
			<hr />
			<ProviderInformation provider={provider} setProvider={setProvider} />
			<hr />
			<ClaimInformation claimInformation={claimInformation} setClaimInformation={setClaimInformation} />
			<hr />
			<DiagnosisDates diagnosisDates={diagnosisDates} setDiagnosisDates={setDiagnosisDates} />
			<hr />
			<DiagnosisCodes diagnosisCodes={diagnosisCodes} setDiagnosisCodes={setDiagnosisCodes} />
			<hr />
			<CostSection costs={costs} setCosts={setCosts} />
			<br></br>
			<br></br>
			<br></br>
			<div className="row">
				<span style={{ textAlign: "center" }} className="border border-danger mt-5">
					<label className="text-danger"></label>
				</span>
			</div>
			<br></br>
			<button className="btn btn-blue m-1">Search</button>
			<button className="btn btn-blue m-1">Clean</button>
			<button className="btn btn-blue m-1">Reset</button>
			<button className="btn btn-blue m-4" onClick={handleSubmit}>
				Submit
			</button>
			<hr></hr>
		</div>
	)
}

export default ClaimPage
