import React from "react"
import { useState } from "react"

function MemberInformation({ member, setMember, members }) {
	const [memberIdLengthError, setMemberIdLengthError]=useState('');
	const handleChange = (e) => {
		
		const value = e.target.value
		setMember({
			...member,
			[e.target.name]: value
		})
	}
	const onKeyDown = (e) => {
		if (e.key === "Tab" || e.key==="Enter") {
			e.preventDefault();
			//console.log("Tab");
			//console.log(members[0].member_id_table);
			//console.log(member.id);
			
			members.forEach(memberInArray => {
				console.log(memberInArray);
				if(member.id === memberInArray.member_id_table)
				 {
	 
			  setMember({
				

				  city: memberInArray.city,
                  dob: memberInArray.dob,
                  lastName: memberInArray.lastname,
                  id:memberInArray.member_id_table,
                  address: memberInArray.memberaddress,
                  name: memberInArray.membername,
                  sex: memberInArray.sex,
                  state: memberInArray.state,
                  subscribedDate: memberInArray.subscribedDate,
                  zipCode: memberInArray.zipcode
			  
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
			setMemberIdLengthError('Only 10 numeric characters are allowed.');
			
		}else{
			setMemberIdLengthError('');

		}
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
					</div>					<div className="col-2">
						<input className="w-100" maxLength='11' name="id" id="id" value={member.id} onChange={handleChange} onKeyDown={onKeyDown}onKeyUp={(e)=>maxLengthValidation(e,10)} onKeyPress={onlyNumbersValidation}></input>
					</div>
					{memberIdLengthError?<div style={{ color: 'red' }} className="col-8">{memberIdLengthError}</div>:null}
				</div>
			</div>
			<div className="col-2">
				<label className="general-jce">Name</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="name" id="name" value={member.name} onChange={handleChange} readOnly={member.name}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">Last Name</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="lastName" id="lastName" value={member.lastName} onChange={handleChange} readOnly={member.lastName}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">Sex</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="sex" id="sex" value={member.sex} onChange={handleChange} readOnly={member.sex}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">Address</label>
			</div>

			<div className="col-10">
				<input className="w-100" name="address" id="address" value={member.address} onChange={handleChange} readOnly={member.address}></input>
			</div>

			<div className="col-2">
				<label className="general-jce">ZipCode</label>
			</div>

			<div className="col-2">
				<input className="w-100" name="zipCode" id="zipCode" value={member.zipCode} onChange={handleChange} readOnly={member.zipCode}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">State</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="state" id="state" value={member.state} onChange={handleChange} readOnly={member.state}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">City</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="city" id="city" value={member.city} onChange={handleChange} readOnly={member.city}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">DOB</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="dob" id="dob" value={member.dob} onChange={handleChange} readOnly={member.dob}></input>
			</div>
			<div className="col-2">
				<label className="general-jce">Subscribed Date</label>
			</div>
			<div className="col-2">
				<input className="w-100" name="subscribedDate" id="subscribedDate" value={member.subscribedDate} onChange={handleChange} readOnly={member.subscribedDate}></input>
			</div>
		</div>
	)
}
	
export default MemberInformation
