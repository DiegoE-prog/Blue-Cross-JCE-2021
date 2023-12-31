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

const getListConditionPayor = async (payorId) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/error/GetListConditionPayor/${payorId}`)
}

const getListAllErrors = async () => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/error/GetListAllErrors`)
}

const deleteError = async (errorId) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/error/DeleteError/${errorId}`)
}

const getErrorById = async (errorId) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/error/GetErrorById/${errorId}`)
}

const updateError = async (error) => {
	return await axios.put(`${apiroutes.BASEROUTE}/api/error/UpdateError`, error)
}

export { getlastId, getListField, saveNewError, getListConditionPayor, getListSearchError, getListAllErrors, deleteError, getErrorById, updateError }
