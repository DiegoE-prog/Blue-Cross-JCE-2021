import axios from "axios"
import { apiroutes } from "../routes"

const getListPayors = async () => {
	const response = await axios.get(`${apiroutes.BASEROUTE}/api/payor/getlist`)	
	return response
}
export { getListPayors }