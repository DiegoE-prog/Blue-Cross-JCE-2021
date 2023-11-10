import axios from "axios"
import { apiroutes } from "../routes"
const GetAllProviders = async () => {
		return await axios.get(`${apiroutes.BASEROUTE}/api/provider/getlist`)
}

export { GetAllProviders }
