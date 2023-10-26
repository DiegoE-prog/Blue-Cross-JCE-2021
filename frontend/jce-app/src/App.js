import React from "react"

//React router
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

//Views
import Home from "./views/home"
import LoginIndex from "../src/views/Login/LoginIndex"
import Profile from "./views/profile"
import Navbar from "./views/Home/Navbar"

function App() {
	return (
		<>
			<div>
				<div className="content">
					<Navbar />
					<Routes>
						<Route exact path={routes.LOGIN} element={<LoginIndex />} />
						<Route path={routes.HOME} element={<Home />} />
						<Route path={routes.PROFILE} element={<Profile title="Profile" />} />
					</Routes>
				</div>
			</div>
		</>
	)
}

export default App
