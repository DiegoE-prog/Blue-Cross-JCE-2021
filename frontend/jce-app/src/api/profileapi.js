import axios from "axios"
import { apiroutes } from "../routes"

const getUserProfile = async (userId) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/profile/GetUserProfile/${userId}`)
}

export { getUserProfile }
