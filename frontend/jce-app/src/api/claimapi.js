import axios from "axios"
import { apiroutes } from "../routes"

const createclaim = async (claim) => {
	return await axios.post(`${apiroutes.BASEROUTE}/api/claim`, claim)
    
    
}

const getlastclaimid= async()=>{
	return await axios.get(`${apiroutes.BASEROUTE}/api/claim/GetLastClaim`)
}

export {createclaim, getlastclaimid};