import React from "react"
import { routes } from "../../routes"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Navbar() {
	const { role } = useSelector((state) => state.user)

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

						{role === "1" || role === "4" ? (
							<li className="nav-item m-1">
								<Link className="nav-link btn btn-menu" to="">
									Provider Finder
								</Link>
							</li>
						) : null}

						{role === "2" || role === "4" ? (
							<li className="nav-item m-1">
								<Link className="nav-link btn btn-menu" to={routes.CLAIMPAGE}>
									Submit Claim
								</Link>
							</li>
						) : null}

						{role === "3" || role === "4" ? (
							<li className="nav-item m-1">
								<Link className="nav-link btn btn-menu" to="">
									Error Manager
								</Link>
							</li>
						) : null}

						{role === "3" || role === "4" ? (
							<li className="nav-item m-1">
								<Link className="nav-link btn btn-menu" to="">
									Payor Registration
								</Link>
							</li>
						) : null}

						{role === "4" ? (
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
