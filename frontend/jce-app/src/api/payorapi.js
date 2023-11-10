import axios from "axios"
import { apiroutes } from "../routes"

const getListPayors = async () => {
		return await axios.get(`${apiroutes.BASEROUTE}/api/payor/getlist`)
}

export { getListPayors }
