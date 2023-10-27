import React from 'react';

//import { Text, View, StyleSheet, styles } from 'react';

function ClaimPage () { 

  return(

    
  
    <div className="container">

      <div className='row'>
        <label className='header-jce'>Submit Claim</label>
        <br></br>
        <label className='header-jce'>Member Information</label>
        <div className='col-12'>
          <div className='row'>
            <div className='col-2'>
             <label className="general-jce">Member ID</label>
            </div>
            <div className='col-2'>
            <input className='w-100'></input>
            </div>
          </div>
        </div>
        <div className='col-2'>
         <label className="general-jce">Name</label>
        </div>

        <div className='col-2'>
         <input className='w-100'></input>
        </div>

        <div className='col-2'>
         <label className="general-jce">Last Name</label>
        </div>

        <div className='col-2'>
         <input className='w-100'>
         </input>
        </div>

        <div className='col-2'>
         <label className="general-jce">Sex</label> 
        </div>

        <div className='col-2'>
         <input className='w-100'></input>
        </div>

        <div className='col-2'>
         <label className="general-jce">Address</label>
        </div>

        <div className='col-10'>
          <input className='w-100'></input>
        </div>

        <div className='col-2'>
          <label className="general-jce">ZipCode</label>
        </div>

        <div className='col-2'>
          <input className='w-100'></input>
        </div>
        <div className='col-2'>
          <label className="general-jce">State</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>
        <div className='col-2'>
          <label className="general-jce">City</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>
        <div className='col-2'>
          <label className="general-jce">DOB</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>
        <div className='col-2'>
          <label className="general-jce">Subscribed Date</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>
      </div>
      
    <hr></hr>
    <div className='row'>
      <label className='header-jce'>Payor Information</label>
          <div className='col-12'>
            <div className='row'>
              <div className='col-2'>
              <label className="general-jce">Payor ID</label>
              </div>
              <div className='col-2'>
              <input className='w-100'></input>
              </div>
              <div className='col-2'>
          <label className="general-jce">Payor Name</label>
          </div>
          <div className='col-2'>
              <input className='w-100'></input>
              </div>
              
            </div>
            
          </div>
          <div className='col-2'>
          <label className="general-jce">Address</label>
          </div>

          <div className='col-10'>
            <input className='w-100'></input>
          </div>

          <div className='col-2'>
          <label className="general-jce">ZipCode</label>
        </div>

        <div className='col-2'>
          <input className='w-100'></input>
        </div>
        <div className='col-2'>
          <label className="general-jce">State</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>
        <div className='col-2'>
          <label className="general-jce">City</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>

        </div>
        <hr></hr>

              <div className='row'>

              <label className='header-jce'>Provider Information</label>
        
        <div className='col-2'>
          <label className="general-jce">Provider ID</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>

        <div className='col-2'>
          <label className="general-jce">Provider Name</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>

        <div className='col-2'>
          <label className="general-jce">Type</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>
        
        <div className='col-2'>
          <label className="general-jce">Address</label>
          </div>

          <div className='col-10'>
            <input className='w-100'></input>
          </div>

          <div className='col-2'>
          <label className="general-jce">ZipCode</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>

        <div className='col-2'>
          <label className="general-jce">State</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>

        <div className='col-2'>
          <label className="general-jce">City</label>
        </div>
        <div className='col-2'>
          <input className='w-100'></input>
        </div>
        
        </div>
                <hr></hr>

              
              <div className='col-6'>
              
                <label className='header-jce' >Claim Information</label>
              </div>
              <div className='col-6'>
              

                <label className='header-jce' >Diagnosis Dates</label>
              </div>
              <div className='col-6'>
              
                <label className='header-jce'>Diagnosis Codes</label>
              </div>
              
              <br></br>
   


              <button className='btn btn-blue m-1'>Search</button>
              <button className='btn btn-blue m-1'>Clean</button>
              <button className='btn btn-blue m-1'>Reset</button>

              
              <button className='btn btn-blue m-5'>Submit</button>

<hr></hr>

     
<div className='col-6'>
              
                <label className='header-jce'>Error Section</label>
              </div>
    
      <div className='row'>
        <div className='col-6 '></div>
          <div className='col-6'>
            <div className='row'> 
              <div className='col-6'>
                <label className="general-jce">Cost for Service</label>
              </div>
              <div className='col-6'>
                <input></input>
              </div>
            </div>
            <div className='row'> 
              <div className='col-6'>
                 <label className="general-jce">Cost of Material</label>
              </div>
              <div className='col-6'>
                <input></input>
              </div>
            </div>
            <div className='row'> 
              <div className='col-6'>
                <label className="general-jce">Cost for Medicine</label>
              </div>
              <div className='col-6'>
                <input></input>
              </div>
            </div>
            <div className='row'> 
              <div className='col-6'>
                <label className="general-jce">Provider Cost</label>
              </div>
              <div className='col-6'>
                <input></input>
              </div>
            </div>
            <div className='row'> 
              <div className='col-6'>
                <label className="general-jce">Total Amount</label>
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