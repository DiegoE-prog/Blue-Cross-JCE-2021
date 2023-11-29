import axios from "axios"
import { apiroutes } from "../routes"

const getUserProfileById = async (userId) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/profile/${userId}`)
}

const getUserProfileByUsername = async (username) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/profile/username/${username}`)
}

const getUserProfilesByFilter = async(filter) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/profile/search`, { params: filter})
}

const createUserProfile = async (user) => {
	return await axios.post(`${apiroutes.BASEROUTE}/api/profile/create`, user)
}

const resetUserPassword = async (userId) => {
	return await axios.patch(`${apiroutes.BASEROUTE}/api/profile/reset-password/${userId}`)
}

const updatePhoneAndEmail = async (update) => {
	return await axios.patch(`${apiroutes.BASEROUTE}/api/profile/phone-email`, update)
}

const deleteUserProfile = async (userId) => {
	return await axios.delete(`${apiroutes.BASEROUTE}/api/profile/${userId}`)
}

export { getUserProfileById, getUserProfileByUsername, getUserProfilesByFilter, createUserProfile, resetUserPassword, updatePhoneAndEmail, deleteUserProfile }
