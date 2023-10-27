import React from "react"

//React router
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

//Views
import Home from "./views/home"
import Test from "./views/test"
import Profile from "./views/profile"
import LoginIndex from "../src/views/Login/LoginIndex"
import Footer from "./nav/Footer/Footer"
import Header from "./nav/Header/Header"
import Navbar from "./views/Home/Navbar"

function App() {
	return (
		<>
			<div className="App">
				<div className="content">
					<Header />
					<Navbar />
					<Routes>
						<Route exact path={routes.LOGIN} element={<LoginIndex />} />
						<Route exact element={<Home title="Home" />} />
						<Route path={routes.PROFILE} element={<Profile title="Profile" />} />
						<Route path={routes.TEST} element={<Test title="Test" />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default App
