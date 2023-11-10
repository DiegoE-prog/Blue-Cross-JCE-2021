import React from "react"

function PayorInformation({ payor, setPayor, payors }) {
	const handleChange = (e) => {
		const value = e.target.value
		setPayor({
			...payor,
			[e.target.name]: value
		})
	}
		const onKeyDown = (e) => {
			if (e.key === "Tab" || e.key==="Enter") {
				e.preventDefault();
				//console.log("Tab");
				//console.log(members[0].member_id_table);
				//console.log(member.id);
				
				payors.forEach(payorInArray => {
					console.log(payorInArray);
					if(payor.id === payorInArray.payor_id_table)
					 {
		 
				  setPayor({
					
	
					  id: payorInArray.payor_id_table,
					  name: payorInArray.payorname,
					  address: payorInArray.payoraddress,
					  zipCode:payorInArray.zipcode,
					  state: payorInArray.state,
					  city: payorInArray.city,
				
				 
				  })
				}
			});	
		
		}
		
	}

	return (
		<div className="row">
			<label className="section-jce">Payor Information</label>
			<div className="col-12">
				<div className="row">
					<div className="col-2">
						<label className="general-jce">Payor ID</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="id" id="id" value={payor.id} onChange={handleChange} onKeyDown={onKeyDown}></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Payor Name</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="name" id="name" value={payor.name} onChange={handleChange}></input>
					</div>
				</div>
			</div>
			<div className="col-2">
				<label className="general-jce">Address</label>
			</div>

			<div className="col-10">
				<input className="w-100" name="address" id="address" value={payor.address} onChange={handleChange}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">ZipCode</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="zipCode" id="zipCode" value={payor.zipCode} onChange={handleChange}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">State</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="state" id="state" value={payor.state} onChange={handleChange}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">City</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="city" id="city" value={payor.city} onChange={handleChange}></input>
			</div>
		</div>
	)
}

export default PayorInformation
