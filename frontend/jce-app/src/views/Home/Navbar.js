import React, { useState } from "react"
import { routes } from "../../routes"
import { Link } from "react-router-dom"

function Navbar() {
	const [user] = useState({
		Username: "Diego",
		U_Ui_Role: "4"
	})

	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<ul className="navbar-nav">
						<li className="nav-item m-1">
							<Link className="nav-link btn btn-menu" to={routes.HOME}>
								Home Page
							</Link>
						</li>

						{user.U_Ui_Role === "1" || user.U_Ui_Role === "4" ? (
							<li className="nav-item m-1">
								<Link className="nav-link btn btn-menu" to="">
									Provider Finder
								</Link>
							</li>
						) : null}

						{user.U_Ui_Role === "2" || user.U_Ui_Role === "4" ? (
							<li className="nav-item m-1">
								<Link className="nav-link btn btn-menu" to="">
									Submit Claim
								</Link>
							</li>
						) : null}

						{user.U_Ui_Role === "3" || user.U_Ui_Role === "4" ? (
							<li className="nav-item m-1">
								<Link className="nav-link btn btn-menu" to="">
									Error Manager
								</Link>
							</li>
						) : null}

						{user.U_Ui_Role === "3" || user.U_Ui_Role === "4" ? (
							<li className="nav-item m-1">
								<Link className="nav-link btn btn-menu" to="">
									Payor Registration
								</Link>
							</li>
						) : null}

						{user.U_Ui_Role === "4" ? (
							<li className="nav-item m-1">
								<Link className="nav-link btn btn-menu" to="">
									Users
								</Link>
							</li>
						) : null}

						<li className="nav-item m-1">
							<Link className="nav-link btn btn-menu" to={routes.PROFILE}>
								Config
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
