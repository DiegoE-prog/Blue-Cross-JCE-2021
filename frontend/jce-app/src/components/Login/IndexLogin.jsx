import React, { useState } from "react"
import BlueCrossLogo from "../../logos/BlueCrossHeader.png"

function Index() {
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	}

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
		alert("This user is a test " + user.username + " " + user.password)
	}

	const resetFields = () => {
		setUser({
			username: "",
			password: ""
		})
	}

	return (
		<div style={style}>
			<div>
				<img src={BlueCrossLogo} alt="Blue Cross Logo" />
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" value={user.username} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" value={user.password} onChange={handleChange} />
				</div>
				<div>
					<button onClick={resetFields}>Reset</button>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	)
}

export default Index
