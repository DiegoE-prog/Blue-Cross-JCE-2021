import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { routes } from "../routes"


const ProtectedRoute = () => {
    const { isAuthenticated } = useSelector((state) => state.user)
    
    return isAuthenticated ? <Outlet/> : <Navigate to={routes.LOGIN} />
}

export default ProtectedRoute