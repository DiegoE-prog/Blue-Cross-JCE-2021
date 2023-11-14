import axios from "axios"
import { apiroutes } from "../routes"

const getListPayors = async () => {
	const response = await axios.get(`${apiroutes.BASEROUTE}/api/payor/GetList`)	
	return response
}
export { getListPayors }
