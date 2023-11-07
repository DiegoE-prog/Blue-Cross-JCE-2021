import axios from "axios"
import { apiroutes } from "../routes"

const getSecurityQuestions = async (userId) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/securityquestions/${userId}`)
}

const updateSecurityQuestions = async (update) => {
	return await axios.patch(`${apiroutes.BASEROUTE}/api/securityquestions`, update)
}

export { getSecurityQuestions, updateSecurityQuestions }
