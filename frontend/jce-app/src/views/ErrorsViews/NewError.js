import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux"
import { getlastId } from "../../api/errorapi"

function NewError(props) {
  const [errorId, setErrorId] = useState(null); // Estado para almacenar el valor de errorid
  const { role,username } = useSelector((state) => state.user)
  
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


    document.title = props.title;
  }, [props.title]);
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
              <select className="form-select text-start" multiple aria-label="Multiple select example">
                {/* <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> */}
              </select>
            </div>
            <div className="col-4 text-center">
              <div className="row">
                <div className="col-3 text-center"></div>
                <div className="col-6 text-center">
                  <button class="btn btn-blue btn-sm">&lt;&lt; ADD</button>
                </div>
                <div className="col-3 text-center"></div>                
                <br/><br/>
              </div>
              <div className="row">
              <div className="col-3 text-center"></div>
                <div className="col-6 text-center">
                  <button class="btn btn-blue btn-sm">REMOVE &gt;&gt;</button>
                </div>
                <div className="col-3 text-center"></div>                                
              </div>
            </div>
            <div className="col-4">
              <select className="form-select text-end general-jce" multiple aria-label="Multiple select example">
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
              {/* <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Field</th>
                  <th scope="col">Condition</th>
                  <th scope="col">Value</th>
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <th className="text-center"><p><a href="#">Remove</a></p></th>
                  <td>
                    <div className="row">                      
                      <div className="col-3">                      
                        <h5 className="general-jce text-end">Field</h5>
                      </div>
                      <div className="col-9 text-start">
                        <select className="form-select general-jce" aria-label="Default select example">
                          <option value="0">Member ID</option>
                          <option value="0">Name</option>
                          <option value="1">Last Name</option>
                          <option value="1">Sex</option>
                          <option value="1">Address</option>
                          <option value="1">ZipCode</option>
                          <option value="1">State</option>
                          <option value="1">City</option>
                          <option value="1">DOB</option>
                          <option value="1">Subscribed Date</option>
                          <option value="1">Payor ID</option>
                          <option value="1">Payor Name</option>
                          <option value="1">Provider ID</option>
                          <option value="1">Provider Name</option>
                          <option value="1">Type</option>                          
                          <option value="2">Cost for Service</option>
                          <option value="2">Cost of Material</option>
                          <option value="2">Cost for Medicine</option>
                          <option value="2">Provider Cost</option>
                          <option value="2">Total Amount</option>
                          <option value="2">Procedure Code</option>
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
                          <select className="form-select general-jce" aria-label="Default select example">
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
                          <input className="general-jce w-100 text-start" type="text" id="error_id" name="error_id" />  
                        </div>
                      </div>                    
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div className="row">
            <p><a href="#">Add Condition</a></p>
          </div>

          <hr className="border border-black border-1 opacity-75"></hr>
{/* 
          <div className="row">
            <div className="col-2">
                <h5 className="general-jce text-end">Group</h5>
              </div>
              <div className="col-3">              
                <input className="general-jce w-100 text-start" type="text" id="error_id" name="error_id" />
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
              <table className="table rowtable table-bordered">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Field</th>
                  <th scope="col">Condition</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th ><p><a href="#">Remove</a></p></th>
                  <td>
                    <input className="general-jce w-100 text-start" type="text" id="error_id" name="error_id" />
                  </td>
                  <td>
                   <input className="general-jce w-100 text-start" type="text" id="error_id" name="error_id" />
                  </td>
                  <td><input className="general-jce w-100 text-start" type="text" id="error_id" name="error_id" /></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div className="row">
            <p><a href="#">Add Condition</a></p>
          </div>

          <hr className="border border-black border-1 opacity-75"></hr> */}

          <div className="row">
            <div className="col-4">
              <a class="nav-link btn btn-blue" href="/home">Add Group</a>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
                <a class="nav-link btn btn-blue" href="/home">Cancel</a>
            </div>
            <div className="col-2">
              <a class="nav-link btn btn-blue" href="/home">Save</a>
            </div>
          </div>

        </div>
      </div>
    </div>   
  );
}

export default NewError;