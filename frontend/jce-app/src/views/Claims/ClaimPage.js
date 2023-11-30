import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import MemberInformation from "./MemberInformation"
import PayorInformation from "./PayorInformation"
import ProviderInformation from "./ProviderInformation"
import ClaimInformation from "./ClaimInformation"
import DiagnosisDates from "./DiagnosisDates"
import DiagnosisCodes from "./DiagnosisCodes"
import CostSection from "./CostSection"
import { handleValidations } from "../../validations/errorManagerValidations"
import { useEffect } from "react"
import { GetAllMembers } from "../../api/memberapi"
import { getListPayors } from "../../api/payorapi"
import { GetAllProviders } from "../../api/providerapi"
import { handleConditions, test } from "../../validations/errorManagerConditions"
import { getListConditionPayor } from "../../api/errorapi"
import { routes } from "../../routes"
import axios from "axios"
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils"

function ClaimPage(props) {
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
		state: "",
		city: ""
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

	const [errorMessage, setErrorMessage] = useState({
		title: "",
		description: ""
	})

	const [errorMessageConditions, setErrorMessageConditions] = useState({
		title: "",
		description: ""
	})

	const resetErrorMessage = () => {
		setErrorMessage({
			title: "",
			description: ""
		})
	}

	const handleSubmit = async (e) => {
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

		resetErrorMessage()
		/*const error = handleValidations(claim)		
		if (error !== undefined)
			setErrorMessage({
				title: error.title,
				description: error.description
			})*/

		try {
			const response = await getListConditionPayor(claim.payor.id)
			console.log(response.data)
			const errorcondition = handleConditions(claim, response)
			if (errorcondition !== undefined)
				setErrorMessageConditions({
					title: errorcondition.title,
					description: errorcondition.description
				})
		} catch (error) {
			// alert('Validate Payor Information please...');
		}
	}
	const [responseFromMemberAPI, setResponseFromMemberAPI] = useState()
	useEffect(() => {
		async function fetchMember() {
			try {
				const response = await GetAllMembers()
				setResponseFromMemberAPI(response.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchMember()
	}, [])

	const [responseFromPayorAPI, setResponseFromPayorAPI] = useState()
	useEffect(() => {
		async function fetchPayor() {
			try {
				const response = await getListPayors()
				setResponseFromPayorAPI(response.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchPayor()
	}, [])

	const [responseFromProviderAPI, setResponseFromProviderAPI] = useState()
	useEffect(() => {
		async function fetchProvider() {
			try {
				const response = await GetAllProviders()
				setResponseFromProviderAPI(response.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchProvider()
	}, [])

	return (
		<div className="container">
			<MemberInformation member={member} setMember={setMember} members={responseFromMemberAPI} />
			<hr />
			<PayorInformation payor={payor} setPayor={setPayor} payors={responseFromPayorAPI} />
			<hr />
			<ProviderInformation provider={provider} setProvider={setProvider} providers={responseFromProviderAPI} />
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
					<label className="text-danger">
						{errorMessage.title}
						{errorMessageConditions.title}
					</label>
					<br />
					<label className="text-danger">
						{errorMessage.description}
						{errorMessageConditions.description}
					</label>
					<br />
				</span>
			</div>
			<br></br>
			<button className="btn btn-blue m-1">Search</button>
			<button className="btn btn-blue m-1">Clean</button>
			<button className="btn btn-blue m-1">Reset</button>
			<button id="botonSubmit" className="btn btn-blue m-4" onClick={handleSubmit}>
				Submit
			</button>
			<hr></hr>
		</div>
	)
}

export default ClaimPage
