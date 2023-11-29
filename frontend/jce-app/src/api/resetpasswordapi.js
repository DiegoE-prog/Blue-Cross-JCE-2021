import axios from "axios"
import { apiroutes } from "../routes"

const getValidateIfHaveQuestion = async (userId) => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/resetpassword/GetValidateIfHaveQuestion/${userId}`)
}

export { getValidateIfHaveQuestion }
