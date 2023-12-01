import axios from "axios"
import { apiroutes } from "../routes"

const createclaim = async (claim) => {
	return await axios.post(`${apiroutes.BASEROUTE}/api/claim`, claim)

    
}

export {createclaim};