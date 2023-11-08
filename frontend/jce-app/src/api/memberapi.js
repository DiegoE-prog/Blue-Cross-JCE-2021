import axios from "axios"
import { apiroutes } from "../routes"

const GetAllMembers = async () => {
	return await axios.get(`${apiroutes.BASEROUTE}/api/member/getlist`)
}

export { GetAllMembers }