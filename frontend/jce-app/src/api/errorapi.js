import axios from "axios"
import { apiroutes } from "../routes"

const getlastId = async () => {
	const response = await axios.get(`${apiroutes.BASEROUTE}/api/error/GetLastId`)	
	return response
}

export { getlastId }
