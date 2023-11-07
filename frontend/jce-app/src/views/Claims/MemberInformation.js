import React from "react"

function MemberInformation({ member, setMember }) {
	const handleChange = (e) => {
		const value = e.target.value
		setMember({
			...member,
			[e.target.name]: value
		})
	}

	return (
		<div className="row">
			<label className="header-jce">Submit Claim</label>
			<br></br>
			<label className="section-jce">Member Information</label>
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Member ID</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="id" id="id" value={member.id} onChange={handleChange}></input>
					</div>
				</div>
			</div>
			<div className="col-2">
				<label className="general-jce">Name</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="name" id="name" value={member.name} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">Last Name</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="lastName" id="lastName" value={member.lastName} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">Sex</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="sex" id="sex" value={member.sex} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">Address</label>
			</div>

			<div className="col-10">
				<input className="w-100" name="address" id="address" value={member.address} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">ZipCode</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="zipCode" id="zipCode" value={member.zipCode} onChange={handleChange}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">State</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="state" id="state" value={member.state} onChange={handleChange}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">City</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="city" id="city" value={member.city} onChange={handleChange}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">DOB</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="dob" id="dob" value={member.dob} onChange={handleChange}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">Subscribed Date</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="subscribedDate" id="subscribedDate" value={member.subscribedDate} onChange={handleChange}></input>
			</div>
		</div>
	)
}

export default MemberInformation
