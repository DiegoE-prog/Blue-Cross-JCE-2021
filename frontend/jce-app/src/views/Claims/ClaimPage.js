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
import { createclaim, getlastclaimid } from "../../api/claimapi"

function ClaimPage(props) {
	const [isDisable, setIsDisable] = useState(false)
	const [successMesage, setSuccessMessage] = useState("")

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

	useEffect(() => {})

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

	// Automatically scrolls to top when the claim is saved
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [successMesage])

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

		const claimToSend = {
			member_id_table_id: member.id,
			payor_id_table_id: payor.id,
			provider_id_table_id: provider.id,
			// Claim Information
			claimnumber: claimInformation.claimNumber !== "" ? parseInt(claimInformation.claimNumber) : 0,
			entrydate: claimInformation.entryDate,
			entryhour: claimInformation.entryHour,
			dischargedate: claimInformation.dischargeDate,
			dischargehour: claimInformation.dischargeHour,
			institutionalclaimcode: claimInformation.institutionalClaimCode !== "" ? parseInt(claimInformation.institutionalClaimCode) : 0,
			professionalclaimcode: claimInformation.professionalClaimCode !== "" ? parseInt(claimInformation.professionalClaimCode) : 0,
			typeofbill: claimInformation.typeOfBill !== "" ? parseInt(claimInformation.typeOfBill) : 0,
			referalnumber: claimInformation.referalNum,
			servicecode: claimInformation.serviceCode !== "" ? parseInt(claimInformation.serviceCode) : 0,
			authcode: claimInformation.authCode,
			medicalrecordnumber: claimInformation.medicalRecordNumber,
			payorclaimcontrolnumber: claimInformation.payerClaimControlNum,
			autoaccidentstate: claimInformation.autoAccidentState,
			fileinformation: claimInformation.fileInf,
			claimnote: claimInformation.claimNote,
			billingnote: claimInformation.billingNote,
			// Diagnosis dates
			onsetofsymptom: diagnosisDates.onsetOfSymptom,
			initialtreatment: diagnosisDates.initialTreatment,
			lastsentdate: diagnosisDates.lastSentDate,
			acutemanifestation: diagnosisDates.acuteManifestation,
			accident: diagnosisDates.accident,
			lastmenstrualdate: diagnosisDates.lastMenstrualDate,
			lastxray: diagnosisDates.lastXRay,
			hearingvisionpresc: diagnosisDates.hearingVisionPresc,
			disabilitydate: diagnosisDates.disabilityDates,
			lastworked: diagnosisDates.lastWorked,
			authorizedreturnwork: diagnosisDates.authorizedReturnWork,
			assumedandrelinq: diagnosisDates.assumedRelinq,
			repricerreceived: diagnosisDates.repricerReceived,
			// Diagnosis codes
			principaldiagnosis: diagnosisCodes.principalDiagnosis,
			admitingdiagnosis: diagnosisCodes.admitingDiagnosis,
			patientreasonforvisit: diagnosisCodes.patientReasonForVisit,
			externalcausesofinjury: diagnosisCodes.externalCausesOfInjury,
			diagnosisrelatedgroup: diagnosisCodes.diagnosisRelatedGroup,
			otherdiagnosisinfo: diagnosisCodes.otherDiagnosisInfo,
			principalprocedureinfo: diagnosisCodes.principalProcedureInfo,
			otherprocedureinfo: diagnosisCodes.otherProcedureInfo,
			occurrencespaminfo: diagnosisCodes.occurrenceSpamInfo,
			occurrenceinfo: diagnosisCodes.ocurrenceInfo,
			valueinfo: diagnosisCodes.valueInfo,
			conditioninfo: diagnosisCodes.conditionInfo,
			treatmentcodeinfo: diagnosisCodes.treatmentCodeInfo,
			claimpricinginfo: diagnosisCodes.claimPricingInfo,
			// Costs section
			costforservice: costs.costForService,
			costofmaterial: costs.costOfMaterial,
			costformedicine: costs.costForMedicine,
			providercost: costs.providerCost,
			totalamount: costs.totalAmount
		}

		console.log(claimToSend)

		resetErrorMessage()
		// const error = handleValidations(claim)		
		// if (error !== undefined)
		// 	setErrorMessage({
		// 		title: error.title,
		// 		description: error.description
		// 	})

		try {
			const response = await getListConditionPayor(claim.payor.id)
			console.log(response.data)
			// const errorcondition = handleConditions(claim, response)
			const errorcondition = handleValidations(claim)
			if (errorcondition !== undefined)
				setErrorMessageConditions({
					title: errorcondition.title,
					description: errorcondition.description
				})
		} catch (error) {}

		var response = createclaim(claimToSend)
		response
			.then((response) => {
				if (response.data.success) {
					setIsDisable(true)
					setSuccessMessage(`Claim information was successfully saved, your claim number is ${claimInformation.claimNumber}`)
				}
			})
			.catch((error) => {
				console.error("Error creating claim", error)
			})
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
		async function fetchClaimId() {
			const response = getlastclaimid()
			response.then((response) => {
				if (response.data.success) {
					setClaimInformation({ ...claimInformation, claimNumber: response.data.data })
				}
			})
		}
		fetchClaimId()
	}, [])

	return (
		<div className="container">
			{successMesage !== "" ? (
				<div className="col-12" style={{ color: "green" }}>
					{successMesage}
				</div>
			) : null}
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
			<button id="botonSubmit" className="btn btn-blue m-4" onClick={handleSubmit} disabled={isDisable}>
				Submit
			</button>
			<hr></hr>
		</div>
	)
}

export default ClaimPage
