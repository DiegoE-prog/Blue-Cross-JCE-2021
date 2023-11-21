import React, { useEffect } from "react"

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
import { useSelector } from "react-redux"

function App() {
	const navigate = useNavigate()
	const { isAuthenticated } = useSelector((state) => state.user)
	
	useEffect(() => {
		if (!isAuthenticated) {
			navigate(routes.LOGIN)
		}
	}, [])

	const location = useLocation()
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
						<Route path={routes.TEST} element={<Test title="Test" />} />
						<Route path={routes.NEWERROR} element={<NewError title="NewError" />} />s
						<Route path={routes.ERRORMANAGER} element={<ErrorManager title="ErrorManager" />} />
					</Routes>
				</div>
				{location.pathname === routes.LOGIN ? null : <Footer />}
			</div>
		</>
	)
}

export default App
