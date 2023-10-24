import React from 'react';

//import { Text, View, StyleSheet, styles } from 'react';

const TextBoxOnRight = () => {
  return (
    <div className="container">

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

     </div>


  );
}

export default TextBoxOnRight;