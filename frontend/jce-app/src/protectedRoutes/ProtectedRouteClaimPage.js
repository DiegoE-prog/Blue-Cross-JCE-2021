import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { routes } from "../routes"

const ProtectedRouteClaimPage = () => {
	const { role } = useSelector((state) => state.user)
	const hasRights = (role === "2" || role === "4" ? true : false)
	return hasRights ? <Outlet /> : <Navigate to={routes.NOTFOUND} />
}

export default ProtectedRouteClaimPage
