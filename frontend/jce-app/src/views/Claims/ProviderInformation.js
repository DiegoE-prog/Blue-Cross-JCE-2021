import React from "react"

function ProviderInformation({ provider, setProvider }) {
	const handleChange = (e) => {
		const value = e.target.value
		setProvider({
			...provider,
			[e.target.name]: value
		})
	}

	return (
		<div className="row">
			<label className="section-jce">Provider Information</label>

			<div className="col-2">
				<label className="general-jce">Provider ID</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="id" id="id" value={provider.id} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">Provider Name</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="name" id="name" value={provider.name} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">Type</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="type" id="type" value={provider.type} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">Address</label>
			</div>

			<div className="col-10">
				<input className="w-100" name="address" id="address" value={provider.address} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">ZipCode</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="zipCode" id="zipCode" value={provider.zipCode} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">State</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="state" id="state" value={provider.state} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">City</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="city" id="city" value={provider.city} onChange={handleChange}></input>
			</div>
		</div>
	)
}

export default ProviderInformation
