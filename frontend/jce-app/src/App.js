import React from "react"

//React router
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

//Views
import Home from "./views/home"
import IndexLogin from "../src/components/Login/IndexLogin"
import Test from "./views/test"

function App() {
	return (
		<>
			<div>
				{/*Header*/}

				<div className="content">
					<Routes>
						<Route exact path={routes.HOME} element={<IndexLogin />} />
						<Route path={routes.TEST} element={<Test />} />
					</Routes>
				</div>

				{/*Footer*/}
			</div>
		</>
	)
}

export default App
