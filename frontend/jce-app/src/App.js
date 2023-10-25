import React from "react"

//React router
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

//Views
import Home from "./views/home"
import Test from "./views/test"
import Footer from "./nav/Footer/Footer"
import Header from "./nav/Header/Header"

function App() {
	return (
		<>
			<div className="App">
				<Header />
				<div className="content">
					<Routes>
						<Route exact path={routes.HOME} element={<Home />} />
						<Route path={routes.TEST} element={<Test />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default App
