import React from "react";
import { useState } from "react";

function CostSection({ costs, setCosts }) {
  const [costForServiceError, setCostForServiceError] = useState('');
  const [costOfMaterialError, setCostForMaterialError] = useState('');
  const [costForMedicineError, setCostForMedicineError] = useState('');
  const [providerCostError, setProviderCostError] = useState('');
  const[totalValue, setTotalValue]=useState('');


  const sumValues=(e)=>{
    const costOfService=costs.costForService || 0;
    const costOfMaterial=costs.costOfMaterial || 0;
    const costForMedicine=costs.costForMedicine|| 0;
    const providerCost=costs.providerCost || 0;
    const totalAm=Number(costOfService)+Number(costOfMaterial)+Number(costForMedicine)+Number(providerCost);
    setTotalValue(totalAm);
  }
  
  const onKeyValidation=(e)=>{
    if(e.key=='Tab' || e.key=='Enter'){
      sumValues(e);
       
      }


  }

  const decimalValidation = (e, inputName) => {
    const inputValue = e.target.value;
    const isValidFormat = /^\d{1,6}\.\d{2}$/;
    const errorMessage = "Money format needed";
    if (/^\d{7}$/.test(inputValue)) {
     e.target.value=e.target.value.substring(0,inputValue.length-1);
    }
    if (inputValue&&!isValidFormat.test(inputValue)) {
      switch (inputName) {
        case "costForService":
          return setCostForServiceError(errorMessage);
        case "costOfMaterial":
          return setCostForMaterialError(errorMessage);
        case "costForMedicine":
          return setCostForMedicineError(errorMessage);
        case "providerCost":
          return setProviderCostError(errorMessage);
      }
    } else {
      switch (inputName) {
        case "costForService":
          return setCostForServiceError("");
        case "costOfMaterial":
          return setCostForMaterialError("");
        case "costForMedicine":
          return setCostForMedicineError("");
        case "providerCost":
          return setProviderCostError("");
      }
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setCosts({
      ...costs,
      [e.target.name]: value,
    });
  };

  return (
    <div className="row">
      <div className="col-6 "></div>
      <div className="col-6">
        <div className="row">
          <div className="col-6">
            <label className="general-jce">Cost for Service</label>
          </div>
          <div className="col-6">
            <input
            onBlur={sumValues}
              onKeyDown={onKeyValidation}
              name="costForService"
              id="costForService"
              value={costs.costForService}
              maxLength='10'
              onChange={handleChange}
              onKeyUp={(event) => decimalValidation(event, "costForService")}
            ></input>
          </div>
        </div>
		{costForServiceError?<div className="row"><div className="col-12" style={{color: 'red'}}>{costForServiceError}</div></div>: null}
        <div className="row">
          <div className="col-6">
            <label className="general-jce">Cost of Material</label>
          </div>
          <div className="col-6">
            <input
            onBlur={sumValues}
            onKeyDown={onKeyValidation}
              name="costOfMaterial"
              id="costOfMaterial"
              value={costs.costOfMaterial}
              maxLength='10'
              onChange={handleChange}
              onKeyUp={(event) => decimalValidation(event, "costOfMaterial")}
            ></input>
          </div>
        </div>
		{costOfMaterialError?<div className="row"><div className="col-12" style={{color: 'red'}}>{costOfMaterialError}</div></div>: null}
        <div className="row">
          <div className="col-6">
            <label className="general-jce">Cost for Medicine</label>
          </div>
          <div className="col-6">
            <input
            onBlur={sumValues}
            onKeyDown={onKeyValidation}
              name="costForMedicine"
              id="costForMedicine"
              value={costs.costForMedicine}
              maxLength='10'
              onChange={handleChange}
              onKeyUp={(event) =>
                decimalValidation(event, "costForMedicine")
              }
            ></input>
          </div>
        </div>
		{costForMedicineError?<div className="row"><div className="col-12" style={{color: 'red'}}>{costForMedicineError}</div></div>: null}
        <div className="row">
          <div className="col-6">
            <label className="general-jce">Provider Cost</label>
          </div>
          <div className="col-6">
            <input
            onBlur={sumValues}
              onKeyDown={onKeyValidation}
              name="providerCost"
              id="providerCost"
              value={costs.providerCost}
              maxLength='10'
              onChange={handleChange}
              onKeyUp={(event) => decimalValidation(event, "providerCost")}
            ></input>
          </div>
        </div>
		{providerCostError?<div className="row"><div className="col-12" style={{color: 'red'}}>{providerCostError}</div></div>: null}
        <div className="row">
          <div className="col-6">
            <label className="general-jce">Total Amount</label>
          </div>
          <div className="col-6">
            <input
              name="totalAmount"
              id="totalAmount"
              value={costs.totalAmount || totalValue}
              maxLength='10'
              onChange={handleChange}
			  readOnly
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostSection;
