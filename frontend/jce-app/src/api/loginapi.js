import axios from "axios"
import { apiroutes } from "../routes"

const login = async (credentials) => {
	const response = await axios.post(`${apiroutes.BASEROUTE}/api/auth`, credentials)
	return response
}

export { login }
