import React from 'react';

//import { Text, View, StyleSheet, styles } from 'react';

function ClaimPage () { 

  return(
  
    <div className="container">
<div className="col-12 mt-2 pl-2" style={{position:'absolute',top:'50%',left:"90%"}}></div>
<div className='col-6'>
                <label style={{textAlign: "left", textDecorationLine: 'underline',fontWeight: 'bold',fontStyle: 'Arial', fontSize: 16}} >Submit Claim</label>
              </div>
              <br></br>
              
  
  <div className="col-12 mt-5 pl-5" style={{position:'absolute',top:'50%',left:"50%"}}></div>
   
  <div className='col-12'>
  &nbsp;&nbsp;&nbsp;
              
                <label style={{textAlign: "left", textDecorationLine: 'underline',fontWeight: 'bold',fontStyle: 'Arial', fontSize: 16}} >Member Information</label>
      <br></br>
      
      <br></br>
      <div className='col-6'>
      
  &nbsp;&nbsp;&nbsp;
                <label>Member ID</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input></input>
              </div>
              <div className='col-10'>
  &nbsp;&nbsp;&nbsp;
  
                <label>Name</label>
                 {''}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input></input>
                &nbsp;<label>Last Name</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input></input>
                &nbsp;<label>Sex</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input></input>
              </div>
              <div className='col-10'>
  &nbsp;&nbsp;&nbsp;
                <label>Address</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input style={{width: "754px"}}></input>
              </div>
              <div className='col-10'>
  &nbsp;&nbsp;&nbsp;
                <label>ZipCode</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input></input>
                &nbsp;<label>State</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input></input>
                &nbsp;<label>City</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input></input>
              </div>
              <div className='col-10'>
  &nbsp;&nbsp;&nbsp;
                <label>DOB</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input></input>
                &nbsp;<label>Subscribed Date</label>
                &nbsp;&nbsp;<input></input>
              </div>
              <hr></hr>
              </div>
              <div className='col-6'>
              &nbsp;&nbsp;&nbsp;
                <label>Payor Information</label>
              </div>
              <div className='col-6'>
              &nbsp;&nbsp;&nbsp;
                <label>Provider Information</label>
              </div>
              <div className='col-6'>
              &nbsp;&nbsp;&nbsp;
                <label>Claim Information</label>
              </div>
              <div className='col-6'>
              &nbsp;&nbsp;&nbsp;

                <label>Diagnosis Dates</label>
              </div>
              <div className='col-6'>
              &nbsp;&nbsp;&nbsp;
                <label>Diagnosis Codes</label>
              </div>
              <div className='col-6'>
              &nbsp;&nbsp;&nbsp;
                <label>Error Section</label>
              </div>
              <br></br>
              <br></br>
              <br></br>

              <button style={{ backgroundColor: '#4ab2f1', color: 'white' }}>Search</button>
              <button style={{ backgroundColor: '#4ab2f1',  color: 'white'}}>Clean</button>
              <button style={{ backgroundColor: '#4ab2f1', color: 'white' }}>Reset</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <button style={{ backgroundColor: '#4ab2f1', color: 'white' }}>Submit</button>
<br></br>
<hr></hr>
      
  
    
         <br></br>
      <div className="col-12 mt-5 pl-5" style={{position:'absolute',top:'50%',left:"50%"}}>
  
       

      </div>
      <div className='row'>
        <div className='col-6 '></div>
          <div className='col-6'>
            <div className='row'> 
              <div className='col-6'>
                <label>Cost for Service</label>
              </div>
              <div className='col-6'>
                <input></input>
              </div>
            </div>
            <div className='row'> 
              <div className='col-6'>
                 <label>Cost of Material</label>
              </div>
              <div className='col-6'>
                <input></input>
              </div>
            </div>
            <div className='row'> 
              <div className='col-6'>
                <label>Cost for Medicine</label>
              </div>
              <div className='col-6'>
                <input></input>
              </div>
            </div>
            <div className='row'> 
              <div className='col-6'>
                <label>Provider Cost</label>
              </div>
              <div className='col-6'>
                <input></input>
              </div>
            </div>
            <div className='row'> 
              <div className='col-6'>
                <label>Total Amount</label>
              </div>
              <div className='col-6'>
                <input></input>
              </div>
            </div>
          </div>
      </div>

      <div className='row'>
        <span style={{textAlign:'center'}} className='border border-danger mt-5' >
        <label className='text-danger' class="hidden" ></label>
        </span>
        
      </div>
      <br></br>
     
     </div>

     
  )



  
}

export default ClaimPage;