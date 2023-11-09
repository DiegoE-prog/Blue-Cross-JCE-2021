import axios from "axios"
import { apiroutes } from "../routes"

const getlastId = async () => {
	const response = await axios.get(`${apiroutes.BASEROUTE}/api/error/GetLastId`)	
	return response
}

const getListField = async () => {
	const response = await axios.get(`${apiroutes.BASEROUTE}/api/error/GetListField`)	
	return response
}

const saveNewError = async (newError) => {
	return await axios.post(`${apiroutes.BASEROUTE}/api/error/AddNewError`, newError)
}

const getListSearchError = async (errorManager) => {
	const response = await axios.post(`${apiroutes.BASEROUTE}/api/error/GetListSearchError`, errorManager)	
	return response
}

export { getlastId, getListField, saveNewError, getListSearchError}
