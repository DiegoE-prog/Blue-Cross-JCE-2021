import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { routes } from "../routes"

const ProtectedRouteErrorManager = () => {
	const { role } = useSelector((state) => state.user)
	const hasRights = (role === "3" || role === "4" ? true : false)
	return hasRights ? <Outlet /> : <Navigate to={routes.NOTFOUND} />
}

export default ProtectedRouteErrorManager
