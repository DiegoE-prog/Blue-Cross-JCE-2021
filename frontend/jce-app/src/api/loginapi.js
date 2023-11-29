import axios from "axios"
import { apiroutes } from "../routes"

const login = async (credentials) => {
	const cns= await axios.post(`${apiroutes.BASEROUTE}/api/auth`, credentials)
	console.log(cns);
	return cns;
}

export { login }
