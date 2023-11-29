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
  getListSearchError,
  getListAllErrors,
  deleteError
} from "../../api/errorapi"
import { setStatus } from "../../redux/slices/errorSlice"
import { useDispatch } from "react-redux"
//Alert components
import {
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";

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
  // { name: 'delete', title: 'Delete'},
  { name: undefined, title: undefined, visible: false},
  { name: 'errorId', title: 'Error ID' },
  { name: 'userName', title: 'User Name' },
  { name: 'message', title: 'Message' },
  { name: 'description', title: 'Description', className: 'rowtable' },
];


function ErrorManager(props) {
  const dispatch = useDispatch();
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
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [errorIdDelete, seterrorIdDelete] = useState(false);
  const [errorID, setErrorID] = useState(null);
  const [errorMsnDelete, setErrorMsnDelete] = useState(0);

  const handleChange = (e) => {
		const value = e.target.value
		setErrorManager({
			...errorManager,
			[e.target.name]: value
		})
	}

  const handleClearError = async () => {
    setErrorManager({
      errorid: "",
      payor: "",
      message: "",
      field: "",
      description: "",          
      createdby: ""
    });
    dispatch(setStatus({status: 0, msn: ''}))   
    setErrorMsn(''); 
    setData([]);
    setErrorMsnDelete(0)
  };

  const handleDeleteError = async () => {
    try {
      console.log(`Deleting error ID ${errorID}`);
      const response = await deleteError(errorID);
      if (response) {
        //Ejecutar consulta otra ver
        try {
          const response = await getListAllErrors();
          if (response.data.success) {
            const data = response.data.data;            
            for (const row of data) {                 
              const errorID = row.errorId;       
              row.undefined = (
                <>
                  <button
                    className="btn btn-blue"
                    variant="text"
                    color="red"
                    onClick={() => {
                      setErrorID(errorID);
                      setOpen(true);
                    }}
                  >
                    Delete
                </button>
                &nbsp;
                <button className="btn btn-blue" variant="text" color="red">
                  Details
                </button>
                </>
              );
            }
            setData(data);
          } else {
            console.log(response.data.message);
          }
        } catch (error) {
          // setErrorMsn(404);
          setOpen(false);
          return;
        } 
        setErrorMsnDelete(200);
        setOpen(false);
      } else {
        setErrorMsnDelete(400);
        console.log(`Error deleting error ID ${errorID}:`, response);
      }
    } catch (error) {
      setErrorMsnDelete(500);
      console.log(`Unexpected error deleting error ID ${errorID}:`, error);
    }
  };

  useEffect(() => {
    document.title = props.title;    
    const searchError = async () => {
      try {
        const response = await getListAllErrors();
        if (response.data.success) {
          const data = response.data.data;            
          for (const row of data) {                 
            const errorID = row.errorId;       
            row.undefined = (
              <>
                <button
                  className="btn btn-blue"
                  variant="text"
                  color="red"
                  onClick={() => {
                    setErrorID(errorID);
                    setOpen(true);
                  }}
                >
                  Delete
              </button>
              &nbsp;
              <button className="btn btn-blue" variant="text" color="red">
                Details
              </button>
              </>
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
    searchError();
  }, [errorID,props.title]);

  const validateErrorManager = (errorManager) => {
    if (!errorManager.errorid || !errorManager.payor || !errorManager.message || !errorManager.field || !errorManager.description || !errorManager.createdby) {
      return false;
    }
    return true;
  };
  const searchError = async () => {
    try {
      dispatch(setStatus({status: 0, msn: ''}))   
      setErrorMsn(''); 
      const response = await getListSearchError(errorManager);
      if (response.data.success) {
        const data = response.data.data;                
        for (const row of data) {                 
          const errorID = row.errorId;       
          row.undefined = (
            <>
              <button
                className="btn btn-blue"
                variant="text"
                color="red"
                onClick={() => {
                  setErrorID(errorID);
                  setOpen(true);
                }}
              >
                Delete
            </button>
            &nbsp;
            <button className="btn btn-blue" variant="text" color="red">
              Details
            </button>
            </>
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
  
  const handlePageChange = (e) => {
    setPageIndex(e.pageIndex);
  };

  const handleOpen = (event) => {
    setErrorID(event.target.value);
    console.log(errorID);
    console.log(event.target.value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              {errorMsnDelete === 200 && (
                <p className="fw-normal text-success">Error was deleted</p>
              )}              
            </div>
            <div className="col-4"></div>            
          </div>
          <br/>
          <div className="row">
            <Paper>
              <Grid
                rows={data}
                columns={columns}
                paging={{
                  pageSize: pageSize,
                  pageIndex: pageIndex,
                  onPageChange: handlePageChange,
                }}
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

      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">
                This action will delete permanently the selected record, please confirm if you want to continue.
                </DialogTitle>
                <DialogActions>
                <button
                    className="btn btn-danger"
                    onClick={handleDeleteError}
                    autoFocus
                >
                    Yes
                </button>
                <button className="btn btn-classic" onClick={handleClose}>
                    No
                </button>
                </DialogActions>
          </Dialog>
    </div>   
  );
}

export default ErrorManager;