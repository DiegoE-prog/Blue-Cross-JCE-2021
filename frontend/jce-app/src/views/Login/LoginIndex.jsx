import React, { useState } from "react"
import BlueCrossLogo from "../../logos/BlueCrossHeader.png"
import { useNavigate } from "react-router-dom"

function Index() {
	const navigate = useNavigate()

	const [user, setUser] = useState({
		username: "",
		password: ""
	})

	const handleChange = (e) => {
		const value = e.target.value
		setUser({
			...user,
			[e.target.name]: value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		navigate("/home")
	}

	const resetFields = () => {
		setUser({
			username: "",
			password: ""
		})
	}

	const containerStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh"
	}

	return (
		<div style={containerStyle}>
			<div className="col-md-4">
				<div className="text-center mb-3">
					<img src={BlueCrossLogo} alt="Blue Cross Logo" />
				</div>
				<form>
					<div className="form-group row mb-3">
						<label htmlFor="username" className="general-jce col-sm-4" style={{ textAlign: "right" }}>
							Username
						</label>
						<input className="general-jce col-sm-6" type="text" name="username" id="username" value={user.username} onChange={handleChange} />
					</div>
					<div className="form-group row mb-3">
						<label htmlFor="password" className="general-jce col-sm-4" style={{ textAlign: "right" }}>
							Password
						</label>
						<input className="general-jce col-sm-6" type="password" name="password" id="password" value={user.password} onChange={handleChange} />
					</div>
					<div className="form-group row text-center">
						<div className="col-sm-6">
							<button type="reset" className="btn btn-blue" onClick={resetFields}>
								Reset
							</button>
						</div>
						<div className="col-sm-6">
							<button type="submit" className="btn btn-blue" onClick={handleSubmit}>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Index
