import React, { useEffect } from "react"
import { useSelector } from "react-redux"

//React router
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { routes } from "./routes"

//Views
import Home from "./views/home"
import Test from "./views/test"
import ClaimPage from "./views/Claims/ClaimPage"
import Profile from "./views/Profile/Profile"
import AddUser from "./views/Profile/AddUser"
import Login from "./views/Login/Login"
import Footer from "./nav/Footer/Footer"
import Header from "./nav/Header/Header"
import Navbar from "./views/Home/Navbar"
import NewError from "./views/ErrorsViews/NewError"
import ErrorManager from "./views/ErrorsViews/ErrorManager"
import NotFoundPage from "./views/Home/NotFoundPage"


function App() {
	const navigate = useNavigate()
	const location = useLocation()
	const { isAuthenticated, role } = useSelector((state) => state.user)
	
	useEffect(() => {
		if (!isAuthenticated) {
			navigate(routes.LOGIN)
		}

		if (location.pathname === routes.CLAIMPAGE && 
			(role !== "2" && role !== "4")) {
			navigate(routes.NOTFOUND)
		}

		if (location.pathname === routes.ADDUSER && role != "4"){
			navigate(routes.NOTFOUND)
		}

		if ((location.pathname === routes.ERRORMANAGER || location.pathname === routes.NEWERROR) &&
			(role !== "3" && role !== "4")) {
				navigate(routes.NOTFOUND)
		}
	}, [])

	return (
		<>
			<div className="App">
				{location.pathname === routes.LOGIN ? null : <Header />}
				<div className="content">
					{location.pathname === routes.LOGIN ? null : <Navbar />}
					<Routes>
						<Route exact path={routes.LOGIN} element={<Login />} />

						<Route exact element={<Home title="Home" />} />

						<Route path={routes.PROFILE} element={<Profile title="Profile" />} />
						<Route path={routes.ADDUSER} element={<AddUser title="Create User" />} />

						<Route path={routes.CLAIMPAGE} element={<ClaimPage title="ClaimPage" />} />
						

						<Route path={routes.NEWERROR} element={<NewError title="NewError" />} />
						<Route path={routes.ERRORMANAGER} element={<ErrorManager title="ErrorManager" />} />

						<Route path={routes.NOTFOUND} element={<NotFoundPage title="NotFound" />} />
					</Routes>
				</div>
				{location.pathname === routes.LOGIN ? null : <Footer />}
			</div>
		</>
	)
}

export default App
