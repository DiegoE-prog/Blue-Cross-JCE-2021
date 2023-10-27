import React, { useState } from "react"

function LanguajeDropDownList() {
	const [option, setOption] = useState("en")

	const handleSelectChange = (e) => {
		setOption(e.target.value)
	}

	return (
		<select value={option} onChange={handleSelectChange} className="general-jce">
			<option value="en">English</option>
			<option value="es">Spanish</option>
			<option value="fr">French</option>
		</select>
	)
}

export default LanguajeDropDownList
