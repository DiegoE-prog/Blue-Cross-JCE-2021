import React from "react"
import LanguajeDropDownList from "./LanguajeDropDownList"
import BlueCrossLogo from "../../logos/BlueCrossHeader.png"
import SearchBar from "./SearchBar"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/slices/userSlice"

function Header() {
	const dispatch = useDispatch()
	
	const onLogout = (e) => {
		dispatch(logout())
	}

	return (
		<div>
			<div className="row">
				<div className="col-6">
					<div className="row">
						<div className="col-sm-2 col-xl-1">
							<p className="general-jce p-2">Language</p>
						</div>
						<div className="col-3 pl-4 m-1">
							<LanguajeDropDownList />
						</div>
					</div>
				</div>
				<div className="col-6" style={{ display: "flex", flexDirection: "column-reverse" }}>
					<p className="general-jce text-end p-2">
						Welcome Dr(a). Oswaldo Toledo
						<br />
						<a href="" onClick={onLogout}>
							Logout
						</a>
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="row">
						<div className="col-12">
							<img src={BlueCrossLogo} style={{ width: 150, height: 50 }} alt="Blue Cross Logo" />
						</div>
					</div>
				</div>
				<div className="col-6">
					<SearchBar />
				</div>
			</div>
		</div>
	)
}

export default Header
