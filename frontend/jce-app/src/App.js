import React from "react"

//React router
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

//Views
import Home from "./views/home"
import LoginIndex from "../src/components/Login/LoginIndex"
import Test from "./views/test"

function App() {
	return (
		<>
			<div>
				{/*Header*/}

				<div className="content">
					<Routes>
						<Route exact path={routes.LOGIN} element={<LoginIndex />} />
						<Route path={routes.HOME} element={<Home />} />
						<Route path={routes.TEST} element={<Test />} />
					</Routes>
				</div>

				{/*Footer*/}
			</div>
		</>
	)
}

export default App
