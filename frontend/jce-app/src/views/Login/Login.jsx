import React, { useEffect, useState } from "react"
import BlueCrossLogo from "../../logos/BlueCrossHeader.png"
import { useNavigate } from "react-router"
import { routes } from "../../routes"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/userSlice"
import { login } from "../../api/loginapi"

function Login() {
	const [messageError, setMessageError] = useState("")

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [loginAttemps, setLoginAttemps] = useState(1)

	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
		blockuser: false
	})

	useEffect(() => {
		setLoginAttemps(1)
	}, [credentials.username])

	useEffect(() => {
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			blockuser: false
		}))
	}, [credentials.username])

	const handleChange = (e) => {
		const value = e.target.value
		setCredentials({
			...credentials,
			[e.target.name]: value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (credentials.username === "" || credentials.password === "") {
			setMessageError("Username and password are mandatory fields")
			return
		}

		if (loginAttemps >= 3) {
			setCredentials({ ...credentials, blockuser: true })
			setLoginAttemps(0)
		}

		try {
			const response = await login(credentials)
			dispatch(setUser({ username: response.data.data.username, role: response.data.data.role }))
			navigate(routes.HOME)
		} catch (error) {
			setMessageError(error.response.data.message)
			if (error.response.data.message === "Password is incorrect") {
				setLoginAttemps(loginAttemps + 1)
			}
		}
	}

	const resetFields = () => {
		setCredentials({
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
						<input className="general-jce col-sm-6" type="text" name="username" id="username" value={credentials.username} onChange={handleChange} />
					</div>
					<div className="form-group row mb-3">
						<label htmlFor="password" className="general-jce col-sm-4" style={{ textAlign: "right" }}>
							Password
						</label>
						<input className="general-jce col-sm-6" type="password" name="password" id="password" value={credentials.password} onChange={handleChange} />
					</div>
					<div className="form-group row mb-3">{messageError && <p className="general-jce col-sm-12 text-center text-danger">{messageError}</p>}</div>
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

export default Login
