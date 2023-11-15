import React from "react"

function ProviderInformation({ provider, setProvider, providers }) {
	const handleChange = (e) => {
		const value = e.target.value
		setProvider({
			...provider,
			[e.target.name]: value
		})
	}

	const onKeyDown = (e) => {
		if (e.key === "Tab" || e.key==="Enter") {
			e.preventDefault();
			//console.log("Tab");
			//console.log(members[0].member_id_table);
			//console.log(member.id);
			
			providers.forEach(providerInArray => {
				console.log(providerInArray);
				if(provider.id === providerInArray.provider_id_table)
				 {
	 
			  setProvider({
				

				  id: providerInArray.provider_id_table,
				  name: providerInArray.providername,
				  address: providerInArray.provideraddress,
				  zipCode:providerInArray.zipcode,
				  state: providerInArray.state,
				  city: providerInArray.city,
			      type:providerInArray.type
			 
			  })
			}
		});	
	
	}
	
}

	return (
		<div className="row">
			<label className="section-jce">Provider Information</label>

			<div className="col-2">
				<label className="general-jce">Provider ID</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="id" id="id" value={provider.id} onChange={handleChange} onKeyDown={onKeyDown}></input>
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
