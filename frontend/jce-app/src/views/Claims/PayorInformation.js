import React from "react"
import { useState } from "react";

function PayorInformation({ payor, setPayor, payors }) {
	const [idSeted,setId]=useState('');
	const [payorIdLengthError, setPayorIdLengthError]=useState('');
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
		 setId('hola')
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
	const onlyNumbersValidation=(event)=>{
		
		if (!/[0-9]/.test(event.key)) {
			event.preventDefault();
		  }
		  
       
	}

	const maxLengthValidation = (e, maxLength)=>{
		const inputValue=e.target.value;
		

	    
        if(inputValue.length>maxLength){
			setPayorIdLengthError('Only 10 numeric characters are allowed.');
		}else{
			setPayorIdLengthError('');
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
						<input className="w-100"maxLength='11' onKeyPress={onlyNumbersValidation} name="id" id="id" value={payor.id} onChange={handleChange} onKeyDown={onKeyDown}onKeyUp={(e)=>maxLengthValidation(e,10)} ></input>
					</div>
					<div className="col-2">
						<label className="general-jce">Payor Name</label>
					</div>
					<div className="col-2">
						<input className="w-100" name="name" id="name" value={payor.name} onChange={handleChange} readOnly={payor.name}></input>
					</div>
					{payorIdLengthError?<div style={{ color: 'red' }} className="col-8">{payorIdLengthError}</div>:null}
				</div>
			</div>
			<div className="col-2">
				<label className="general-jce">Address</label>
			</div>

			<div className="col-10">
				<input className="w-100" name="address" id="address" value={payor.address} onChange={handleChange} readOnly={payor.address}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">ZipCode</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="zipCode" id="zipCode" value={payor.zipCode} onChange={handleChange} readOnly={payor.zipCode}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">State</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="state" id="state" value={payor.state} onChange={handleChange} readOnly={payor.state}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">City</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="city" id="city" value={payor.city} onChange={handleChange} readOnly={payor.city}></input>
			</div>
		</div>
	)
}

export default PayorInformation
