import React, {useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux"
import { getListPayors } from "../../api/payorapi"
import { 
          getlastId,
          getListField
        } from "../../api/errorapi"

function NewError(props) {
  const [errorId, setErrorId] = useState(null); 
  const {role,username } = useSelector((state) => state.user)
  const [payors, setPayors] = useState([]); 
  const [fields, setFields] = useState([]); 
  // const [leftOptions, setLeftOptions] = useState([]);
  const [rightOptions, setRightOptions] = useState([]);

  const tbodyRef = useRef(null);
  const [tbodyContent, setTbodyContent] = useState('');
  const tbodyData = useRef(null);
  const [tbodyNew, setTbodyNew] = useState('');
  // const [tbodyNew, setTbodyNew] = useState(
  //   <>
  //     <tr>
  //       <td>Nuevo Contenido 1, Celda 1</td>
  //       <td>Nuevo Contenido 1, Celda 2</td>
  //     </tr>
  //     <tr>
  //       <td>Nuevo Contenido 2, Celda 1</td>
  //       <td>Nuevo Contenido 2, Celda 2</td>
  //     </tr>
  //   </>
  // );
  

  useEffect(() => {
    const getlastIdApi = async () => {
      try {
        const response = await getlastId();
        if (response.data.success) {
          setErrorId(response.data.data.errorid);          
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
          // setPayors(payorsArray);   
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
// const [rightOptions, setRightOptions] = useState([]);
const [selectedLeft, setSelectedLeft] = useState([]);
const [selectedRight, setSelectedRight] = useState([]);

const moveToRight = () => {
  // Update the state of the selectedLeft and selectedRight variables
  const newLeft = leftOptions.filter(opt => !selectedLeft.includes(opt.payorid));
  const toMove = leftOptions.filter(opt => selectedLeft.includes(opt.payorid));
  setRightOptions([...rightOptions, ...toMove]);
  setLeftOptions(newLeft);
  setSelectedLeft([]);

  // Log the values of the selectedLeft and selectedRight variables
  console.log('selectedLeft:', selectedLeft);
  console.log('selectedRight:', selectedRight);
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
  console.log('selectedLeft:', selectedLeft);
  console.log('selectedRight:', selectedRight.length);
  if (selectedRight.length === 0) {
    alert('Please select one item from Payer List.');
    return;
  }
};
///// End List Payor /////

///// Start New Tr  /////
// const [conditionRows, setConditionRows] = useState([0]); // Inicializamos con una fila
const [conditionRows, setConditionRows] = useState([{ fieldValue: '' }]);
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

const copyTbodyContent  = () => {
  if (tbodyRef.current) {
    const tbody = tbodyRef.current;
    const content = tbody.innerHTML;
    const tbodyData = tbodyRef.current.querySelectorAll("tr");
    // console.log(tbodyData);
    // console.log(tbodyData[0]);
    const newTbodyData = [];
    for (const row of tbodyData) {
      newTbodyData.push(row);
      // newTbodyData.push(<tr key={row.textContent}>{row.textContent}</tr>);
    }    
    // console.log(newTbodyData[0].children[0]);
    // console.log(newTbodyData[0].children[1].textContent);
    // console.log(newTbodyData[0].children[2].textContent);
    // console.log(newTbodyData[0].children[3].textContent);
    let element = document.createElement("td");
    element = newTbodyData[0].children[0];
    // const fieldsArray = Array.isArray(fieldsList.data.data) ? fieldsList.data.data : [];
    // setFields(fieldsArray); 
    const fieldsArray = Array.isArray([newTbodyData[0].children[0],newTbodyData[0].children[1]]);
    setTbodyNew(fieldsArray);

    console.log(tbodyNew);
    console.log(fieldsArray);
    for (let i = 0; i < tbodyNew.length; i++) {
      console.log("fieldsArray[i]");
      console.log(tbodyNew[i]);
    }
    // setTbodyNew(newTbodyData);
    
    // setTbodyNew(tbody.innerHTML); // Actualiza el contenido del tbody
    // setTbodyNew(tbodyData.map((row, index) => (
    //   <tr key={index}>
    //     {row.textContent}
    //   </tr>
    // )));

    // if (tbodyData.current) {
    //   // tbodyData.current.innerHTML = content; // Asigna el nuevo contenido al tbody usando la referencia      
    // }
    // console.log('Contenido del tbody copiado a la variable:', content);
  }
};
///// End New Tr  /////
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
                <input className="general-jce w-100 text-start" type="text" id="error_id" name="error_id" value={errorId}  readOnly/>
              </div>
              <div className="col-3">
                <h5 className="general-jce text-end">Created by</h5>
              </div>
              <div className="col-2">
              <input className="general-jce w-100 text-start" type="text" id="created_by" name="created_by" value={username} disabled/>
              </div>

              <div className="col-2"></div>
          </div>
          <div className="row">
          <div className="col-2">
                <h5 className="general-jce text-end">Message</h5>
              </div>
              <div className="col-3">              
                <input className="general-jce w-100 text-start" type="text" id="message" name="message"  />
              </div>
              <div className="col-3"></div>
              <div className="col-2"></div>
              <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-2">
                <h5 className="general-jce text-end">Description</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                              <option value="0">Equal to</option>
                              <option value="1">Doesn't match</option>
                              <option value="2">Matches</option>
                              <option value="3">is Less than</option>
                              <option value="4">Is More than</option>
                              <option value="5">In List</option>
                              <option value="6">Starts with</option>
                              <option value="7">Ends with</option>
                              <option value="8">Not in List</option>
                              <option value="9">Is Entered</option>
                              <option value="10">Is Not Entered</option>
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

          {/* <hr className="border border-black border-1 opacity-75"></hr> */}

          <div className="row">
            <div className="col-12">
              <table className="table table-bordered" id="tablegroup">
              <tbody id="tbodygroupdata" ref={tbodyData}>   
                {tbodyNew}     
                {/* {fields.map(field => (
                              <option key={field.fieldid} value={field.fieldid}>
                                {field.name}
                              </option>
                ))}         */}
              </tbody>
              </table>
            </div>
          </div>

          <hr className="border border-black border-1 opacity-75"></hr>

          <div className="row">
            <div className="col-4">
              <a classclassName="nav-link btn btn-blue" href="#tbodygroupdata" id="addGroup" onClick={copyTbodyContent}>Add Group</a>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
                <a classclassName="nav-link btn btn-blue" href="/home">Cancel</a>
            </div>
            <div className="col-2">
              <a classclassName="nav-link btn btn-blue" href="/home">Save</a>
            </div>
          </div>

        </div>
      </div>
    </div>   
  );
}

export default NewError;