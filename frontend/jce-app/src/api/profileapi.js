import axios from "axios"
import { apiroutes } from "../routes"

const getUserProfile = async (userId) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/profile/${userId}`)
}

const updatePhoneAndEmail = async (update) => {
	return await axios.patch(`${apiroutes.BASEROUTE}/api/profile/phone-email`, update)
}

export { getUserProfile, updatePhoneAndEmail }
