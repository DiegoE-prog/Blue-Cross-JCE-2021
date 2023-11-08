import React, {useEffect, useState, useRef } from "react";
import { setStatus } from "../../redux/slices/errorSlice"
import { routes } from "../../routes"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { getListPayors } from "../../api/payorapi"
import { 
          getlastId,
          getListField,
          saveNewError
        } from "../../api/errorapi"
import { useDispatch } from "react-redux"

function NewError(props) {
  
  const [errorId, setErrorId] = useState(null); 
  const {userId,role,username } = useSelector((state) => state.user)
  const [payors, setPayors] = useState([]); 
  const [fields, setFields] = useState([]); 
  const [rightOptions, setRightOptions] = useState([]);

  const tbodyRef = useRef(null);
  const [tbodyContent, setTbodyContent] = useState('');
  const tbodyData = useRef(null);
  const [tbodyNew, setTbodyNew] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newError, setnewError] = useState({
    errorid: "",
    createdby: [0,username],
    message: "",
    description: ""
  });

  const handleChange = (e) => {
		const value = e.target.value
		setnewError({
			...newError,
			[e.target.name]: value
		})
	}

  useEffect(() => {
    const getlastIdApi = async () => {
      try {
        const response = await getlastId();
        if (response.data.success) {
          setErrorId(response.data.data.errorid);     
          setnewError({
            ...newError,
            errorid: response.data.data.errorid
          });             
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }      
    };
    getlastIdApi();

    const fetchPayors = async () => {
      try {
        const payorsList = await getListPayors();
        if (payorsList.data.success) {
          const payorsArray = Array.isArray(payorsList.data.data) ? payorsList.data.data : []; // Verificar si es un array
          setRightOptions(payorsArray);
        } else {
          alert(payorsList.data.message);
        }        
      } catch (error) {
        console.error('Error fetching payors:', error);
      }
    };

    fetchPayors();

    const fetchFields = async () => {
      try {
        const fieldsList = await getListField();
        if (fieldsList.data.success) {
          const fieldsArray = Array.isArray(fieldsList.data.data) ? fieldsList.data.data : [];
          setFields(fieldsArray);          
        } else {
          alert(fieldsList.data.message);
        }        
      } catch (error) {
        console.error('Error fetching fields:', error);
      }
    };

    fetchFields();
    document.title = props.title;
  }, [props.title]);

///// Start List Payor /////
const [leftOptions, setLeftOptions] = useState([]);
const [selectedLeft, setSelectedLeft] = useState([]);
const [selectedRight, setSelectedRight] = useState([]);

const moveToRight = () => {
  const newLeft = leftOptions.filter(opt => !selectedLeft.includes(opt.payorid));
  const toMove = leftOptions.filter(opt => selectedLeft.includes(opt.payorid));
  setRightOptions([...rightOptions, ...toMove]);
  setLeftOptions(newLeft);
  setSelectedLeft([]);
  // console.log('selectedLeft:', selectedLeft);
  // console.log('selectedRight:', selectedRight);
  if (selectedLeft.length === 0) {
    alert('Please select one item from Payer.');
    return;
  }
};

const moveToLeft = () => {
  // Update the state of the selectedLeft and selectedRight variables
  const newRight = rightOptions.filter(opt => !selectedRight.includes(opt.payorid));
  const toMove = rightOptions.filter(opt => selectedRight.includes(opt.payorid));
  setLeftOptions([...leftOptions, ...toMove]);
  setRightOptions(newRight);
  setSelectedRight([]);
  // Log the values of the selectedLeft and selectedRight variables
  // console.log('selectedLeft:', selectedLeft);
  // console.log('selectedRight:', selectedRight.length);
  if (selectedRight.length === 0) {
    alert('Please select one item from Payer List.');
    return;
  }
};
///// End List Payor /////
///// Start New Tr  /////
const [conditionRows, setConditionRows] = useState([{ fieldValue: '', selectedValue:1, selectedField:1 }]);
const addConditionRow = () => {
  setConditionRows([
    ...conditionRows,
    { fieldValue: conditionRows[conditionRows.length - 1].fieldValue, selectedValue: conditionRows[conditionRows.length - 1].selectedValue, selectedField: conditionRows[conditionRows.length - 1].selectedField }, // Nuevo campo con el valor del último input
  ]);
};
const handleInputChange = (value, index) => {
  const updatedRows = [...conditionRows];
  updatedRows[index].fieldValue = value;
  setConditionRows(updatedRows);
};
const handleSelectChange = (value, index, field) => {
  const updatedRows = [...conditionRows];
  if (field === 'selectedValue') {
    updatedRows[index].selectedValue = value;
  } else {
    updatedRows[index].selectedField = value;
  }
  setConditionRows(updatedRows);
};


///// End New Tr  /////
///// Start Save New Error  /////

const submitNewError = async () => {
  try {
    const errorId = newError.errorid;
    const createdby = newError.createdby[1];
    const message = newError.message;
    const description = newError.description;
    const selectedLeft = leftOptions.map(opt => opt.payorid)
    const conditionRowsValues = conditionRows.map((row) => ({
      selectedField: row.selectedField,
      selectedValue: row.selectedValue,
      fieldValue: row.fieldValue,
    }));

    const errorsave = {
      errorid: errorId,
      userId: userId,
      createdby: createdby,
      message: message,
      description: description,
      payors: selectedLeft,
      condition: conditionRowsValues,
    };
    console.log(errorsave);
    const response = await saveNewError(errorsave);
    console.log(response);
    dispatch(setStatus({status: 200, msn: 'Ok'}))
    navigate(routes.ERRORMANAGER);
  } catch (error) {
    console.error('Error:', error);
  }
};
///// End Save New Error  /////
  return (
    <div style={{ margin: "20px" }}>
      <h1 className="header-jce">Create New Error</h1>
      <div style={{ margin: "20px" }}>
        <div className="content mb-4">
          <div className="row">
             <div className="col-2">
                <h5 className="general-jce text-end">Error ID</h5>
              </div>
              <div className="col-3">          
                <input className="general-jce w-100 text-start" type="text" id="error_id" name="error_id" value={newError.errorid}  readOnly/>
              </div>
              <div className="col-3">
                <h5 className="general-jce text-end">Created by</h5>
              </div>
              <div className="col-2">
              <input className="general-jce w-100 text-start" type="text" id="created_by" name="created_by" value={newError.createdby[1]} disabled/>
              </div>

              <div className="col-2"></div>
          </div>
          <div className="row">
          <div className="col-2">
                <h5 className="general-jce text-end">Message</h5>
              </div>
              <div className="col-3">              
                <input className="general-jce w-100 text-start" type="text" id="message" name="message" value={newError.message} onChange={handleChange} />
              </div>
              <div className="col-3"></div>
              <div className="col-2"></div>
              <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-2">
                <h5 className="general-jce text-end" >Description</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <textarea className="form-control general-jce" id="description" name="description" rows="3" value={newError.description} onChange={handleChange}></textarea>
            </div>
            <div className="col-2"></div>
          </div><br/>
          <div className="row">
            <div className="col-4">
                <h5 className="general-jce text-center">Payor</h5>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
                <h5 className="general-jce text-center">Payor List</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <select multiple className="form-select text-end general-jce" size="5" value={selectedLeft} onChange={e => setSelectedLeft([...e.target.selectedOptions].map(opt => Number(opt.value)))}>
                {leftOptions.map(opt => (
                    <option key={opt.payorid} value={opt.payorid}>{opt.payor_id_table}</option>
                ))}
              </select>
            </div>
            <div className="col-4 text-center">
              <div className="row">
                <div className="col-3 text-center"></div>
                <div className="col-6 text-center">
                  <button className="btn btn-blue btn-sm"onClick={moveToLeft}>&lt;&lt; ADD</button>
                </div>
                <div className="col-3 text-center"></div>
                <br /><br />
              </div>
              <div className="row">
              <div className="col-3 text-center"></div>
              <div className="col-6 text-center">
                <button className="btn btn-blue btn-sm" onClick={moveToRight}>REMOVE &gt;&gt;</button>
              </div>
              <div className="col-3 text-center"></div>                                
              </div>
            </div>
            <div className="col-4">
              <select multiple className="form-select text-end general-jce" size="5" value={selectedRight} onChange={e => setSelectedRight([...e.target.selectedOptions].map(opt => Number(opt.value)))}>
                {rightOptions.map(opt => (
                    <option key={opt.payorid} value={opt.payorid}>{opt.payor_id_table}</option>
                ))}
              </select>
            </div>
          </div><br/>
          <hr className="border border-black border-1 opacity-75"></hr>

          <div className="row">
              <div className="col-2">
                <h5 className="general-jce text-end">Group</h5>
              </div>
              <div className="col-3">              
                <select className="form-select general-jce" aria-label="Default select example">
                  <option selected>Meets the following Conditions</option>
                  <option value="1">Doesn't meet the following conditions</option>
                </select>
              </div>
              <div className="col-5 text-center">
                <p className="fw-normal text-danger">Error Message AREA</p>
              </div>
              <div className="col-2">
                <p><a href="#">Remove Group</a></p>
              </div>
          </div><br/>

          <div className="row">
            <div className="col-12">
              <table className="table table-bordered">
              <tbody id="tbodydata" ref={tbodyRef}>
                 {conditionRows.map((row, index) => (
                  <tr key={index}>
                    <th className="text-center"><p><a href="#">Remove</a></p></th>
                    <td>
                      <div className="row">                      
                        <div className="col-3">                      
                          <h5 className="general-jce text-end">Field</h5>
                        </div>
                        <div className="col-9 text-start">
                          <select className="form-select general-jce" id="fieldList" value={row.selectedField} onChange={(e) => handleSelectChange(e.target.value, index, 'selectedField')}>
                            {fields.map(field => (
                              <option key={field.fieldid} value={field.fieldid}>
                                {field.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="row">                      
                          <div className="col-3">                      
                            <h5 className="general-jce text-end">Condition</h5>
                          </div>
                          <div className="col-9 text-start">
                            <select className="form-select general-jce" value={row.selectedValue} onChange={(e) => handleSelectChange(e.target.value, index, 'selectedValue')}>
                              <option value="1">Equal to</option>
                              <option value="2">Doesn't match</option>
                              <option value="3">Matches</option>
                              <option value="4">is Less than</option>
                              <option value="5">Is More than</option>
                              <option value="6">In List</option>
                              <option value="7">Starts with</option>
                              <option value="8">Ends with</option>
                              <option value="9">Not equals to</option>
                              <option value="10">Not in List</option>
                              <option value="11">Is Entered</option>
                              <option value="12">Is Not Entered</option>
                            </select>
                          </div>
                        </div>
                    </td>
                    <td>
                    <div className="row">                      
                          <div className="col-3">                      
                            <h5 className="general-jce text-end">Value</h5>
                          </div>
                          <div className="col-9 text-start">
                            <input className="general-jce w-100 text-start" type="text" value={row.fieldValue} id="error_id" name="error_id"  onChange={(e) => handleInputChange(e.target.value, index)} />  
                          </div>
                        </div>                    
                    </td>
                  </tr>
                ))}
                <tr>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div className="row">
            <p><a href="#tbodydata"  id="addConditon" onClick={addConditionRow}>Add Condition</a></p>
          </div>

          <hr className="border border-black border-1 opacity-75"></hr>

          <div className="row">
            <div className="col-8"></div>
            <div className="col-2">
                <a classclassName="nav-link btn btn-blue" href="/home">Cancel</a>
            </div>
            <div className="col-2">
              <a classclassName="nav-link btn btn-blue" href="#" onClick={submitNewError}>Save</a>
            </div>
          </div>

        </div>
      </div>
    </div>   
  );
}

export default NewError;