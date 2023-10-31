import axios from "axios"
import { apiroutes } from "../routes"

const login = async (credentials) => {
	return await axios.post(`${apiroutes.BASEROUTE}/api/auth`, credentials)
}

export { login }
