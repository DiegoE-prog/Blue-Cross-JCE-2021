import React from "react"

//React router
import { Route, Routes, useLocation } from "react-router-dom"
import { routes } from "./routes"

//Views
import Home from "./views/home"
import Test from "./views/test"
import ClaimPage from "./views/Claims/ClaimPage"
import Profile from "./views/profile"
import LoginIndex from "../src/views/Login/LoginIndex"
import Footer from "./nav/Footer/Footer"
import Header from "./nav/Header/Header"

function App() {
	const location = useLocation()

	console.log(location)

	return (
		<>
			<div className="App">
				{location.pathname === routes.LOGIN ? null : <Header />}
				<div className="content">
					<Routes>
						<Route exact path={routes.LOGIN} element={<LoginIndex />} />
						<Route exact element={<Home title="Home" />} />
						<Route path={routes.PROFILE} element={<Profile title="Profile" />} />
						<Route path={routes.CLAIMPAGE} element={<ClaimPage title="ClaimPage" />} />
						<Route path={routes.TEST} element={<Test title="Test" />} />
					</Routes>
				</div>
				{location.pathname === routes.LOGIN ? null : <Footer />}
			</div>
		</>
	)
}

export default App
