import React, { useEffect } from "react"

//React router
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

//Views
import Home from "./views/home"
import ClaimPage from "./views/Claims/ClaimPage"
import Profile from "./views/Profile/Profile"
import AddUser from "./views/Profile/AddUser"
import Login from "./views/Login/Login"
import NewError from "./views/ErrorsViews/NewError"
import ErrorManager from "./views/ErrorsViews/ErrorManager"
import NotFoundPage from "./views/Home/NotFoundPage"
import ProtectedRoute from "./protectedRoutes/ProtectedRoute"
import MainLayout from "./views/Home/MainLayout"

// Protection for routes
import ProtectedRouteClaimPage from "./protectedRoutes/ProtectedRouteClaimPage"
import ProtectedRouteErrorManager from "./protectedRoutes/ProtectedRouteErrorManager"
import ProtectedRouteOnlyAdmin from "./protectedRoutes/ProtectedRouteOnlyAdmin"

function App() {
	return (
		<>
			<div className="App">
				<div className="content">
					<Routes>
						<Route path="/" element={<ProtectedRoute />}>
							<Route
								path={routes.HOME}
								element={
									<MainLayout>
										<Home title="Home" />
									</MainLayout>
								}
							/>
							<Route
								path={routes.PROFILE}
								element={
									<MainLayout>
										<Profile title="Profile" />
									</MainLayout>
								}
							/>
							<Route
								path={routes.NOTFOUND}
								element={
									<MainLayout>
										<NotFoundPage title="NotFound" />
									</MainLayout>
								}
							/>
							<Route path={routes.CLAIMPAGE} element={<ProtectedRouteClaimPage />}>
								<Route
									path={routes.CLAIMPAGE}
									element={
										<MainLayout>
											<ClaimPage title="ClaimPage" />
										</MainLayout>
									}
								/>
							</Route>

							<Route path={routes.ERRORMANAGER} element={<ProtectedRouteErrorManager />}>
								<Route
									path={routes.ERRORMANAGER}
									element={
										<MainLayout>
											<ErrorManager title="ErrorManager" />
										</MainLayout>
									}
								/>
								<Route
									path={routes.NEWERROR}
									element={
										<MainLayout>
											<NewError title="NewError" />
										</MainLayout>
									}
								/>
							</Route>
							<Route path={routes.ADDUSER} element={<ProtectedRouteOnlyAdmin />}>
								<Route
									path={routes.ADDUSER}
									element={
										<MainLayout>
											<AddUser title="Create User" />
										</MainLayout>
									}
								/>
							</Route>
						</Route>
						<Route path={routes.LOGIN} element={<Login />} />
					</Routes>
				</div>
			</div>
		</>
	)
}

export default App
