import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { routes } from "../../routes"
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { useSelector } from "react-redux";
import { 
  getListSearchError
} from "../../api/errorapi"

const table = (
  <Table
    borderColor="red"
  />
);

const styles = {
  '.description-column': {
    backgroundColor: 'red',
  },
};

const columns = [
  // { name: '', title: '', visible: true },
  { name: undefined, title: undefined, visible: false},
  { name: 'errorId', title: 'Error ID' },
  { name: 'userName', title: 'User Name' },
  { name: 'message', title: 'Message' },
  { name: 'description', title: 'Description', className: 'rowtable' },
];


function ErrorManager(props) {
  const [errorMsn, setErrorMsn] = useState(0);
  const location = useLocation();
  const newData = location.state ? location.state.newData : null;
  const {status,msn} = useSelector((state) => state.error)
  const [errorManager, setErrorManager] = useState({
    errorid: null,
    payor: "",
    message: "",
    field: "",
    description: "",          
    createdby: ""
  });
  const [data, setData] = useState([]);
  const handleChange = (e) => {
		const value = e.target.value
		setErrorManager({
			...errorManager,
			[e.target.name]: value
		})
	}

  const handleClearError = () => {
    setErrorManager({
      errorid: null,
      payor: "",
      message: "",
      field: "",
      description: "",          
      createdby: ""
    });
  };

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const validateErrorManager = (errorManager) => {
    if (!errorManager.errorid || !errorManager.payor || !errorManager.message || !errorManager.field || !errorManager.description || !errorManager.createdby) {
      return false;
    }
    return true;
  };
  const searchError = async () => {
    try {
      // if (!validateErrorManager(errorManager)) {
      //   setErrorMsn(404);
      //   return;
      // }
      const response = await getListSearchError(errorManager);
      // if (!response.data.success) {            
      //   setErrorMsn(404);
      //   return;
      // }
      if (response.data.success) {
        // if (data.length === 0) {
        //     setErrorMsn(404);
        //     return;
        // }
        const data = response.data.data;  
        console.log(data);
        for (const row of data) {
          row.undefined = (
            <button className="btn btn-blue" variant="text" color="red">
              Details
            </button>
          );
        }
        setData(data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      setErrorMsn(404);
      return;
    }      
  };
  

  return (
    <div style={{ margin: "20px" }}>
      <h1 className="header-jce">Error Manager</h1>
      <div style={{ margin: "20px" }}>
        <div className="content mb-4">
          <div className="row">
            <div className="col-2">
                <h5 className="general-jce text-end">Error ID</h5>
              </div>
              <div className="col-3">              
                <input className="general-jce w-100 text-start" type="text" id="errorid" name="errorid"  value={errorManager.errorid} onChange={handleChange} />
              </div>

              <div className="col-3">
                <h5 className="general-jce text-end">Payor</h5>
              </div>
              <div className="col-2">
              <input className="general-jce w-100 text-start" type="text" id="payor" name="payor" value={errorManager.payor} onChange={handleChange} />
              </div>

              <div className="col-2"></div>

              <div className="col-2">
                <h5 className="general-jce text-end">Message</h5>
              </div>
              <div className="col-3">              
                <input className="general-jce w-100 text-start" type="text" id="message" name="message"  value={errorManager.message} onChange={handleChange}/>
              </div>

              <div className="col-3">
                <h5 className="general-jce text-end">Field</h5>
              </div>
              <div className="col-2">
              <input className="general-jce w-100 text-start" type="text" id="field" name="field" value={errorManager.field} onChange={handleChange}/>
              </div>

              <div className="col-2"></div>

              <div className="col-2">
                <h5 className="general-jce text-end">Description</h5>
              </div>
              <div className="col-3">              
                <input className="general-jce w-100 text-start" type="text" id="description" name="description" value={errorManager.description} onChange={handleChange}/>
              </div>

              <div className="col-3">
                <h5 className="general-jce text-end">Created by</h5>
              </div>
              <div className="col-2">
              <input className="general-jce w-100 text-start" type="text" id="createdby" name="createdby" value={errorManager.createdby} onChange={handleChange} />
              </div>
          </div>
          <br/>
          <div className="row">
          <div className="col-1"></div>                    
            <div className="col-4 d-grid gap-2">
              <Link className="btn btn-blue m-1 btn-block" to={routes.NEWERROR}>
                Create New Error
							</Link>
            </div>        
            <div className="col-3"></div>
            <div className="col-2 d-grid gap-2 align-items-end">
              <button className="btn btn-blue m-1 btn-block" onClick={handleClearError}>Clean</button>
            </div>
            <div className="col-2 d-grid gap-2 align-items-start">
              <button className="btn btn-blue m-1 btn-block" onClick={searchError}>Search</button>
            </div>
          </div>
          <br/><br/>
          <div className="row">
            <div className="col-4">
              <h1 className="header-jce">Result</h1>
            </div>
            <div className="col-4 text-center">
              {status === 200 && (
                <p className="fw-normal text-success">The Error was saved</p>
              )}
              {errorMsn === 404 && (
                <p className="fw-normal text-danger">No Results Found</p>
              )}              
            </div>
            <div className="col-4"></div>            
          </div>
          <br/>
          <div className="row">
            {/* <Paper>
            <Grid
              rows={rows}
              columns={columns}
            >      
            <SortingState
              defaultSorting={[{ columnName: ['error_id','message','description','created_by'], direction: 'asc' }]}
            />
            <IntegratedSorting />
              <Table/>
              <TableHeaderRow showSortingControls />
            </Grid>
            </Paper> */}
            <Paper>
              <Grid
                rows={data} 
                columns={columns}
              >
                <SortingState
                  defaultSorting={[{ columnName: ['errorId', 'message', 'description', 'userName'], direction: 'asc' }]}
                />
                <IntegratedSorting />
                <Table />
                <TableHeaderRow showSortingControls />
              </Grid>
            </Paper>            
          </div>
        </div>
      </div>
    </div>   
  );
}

export default ErrorManager;