import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

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
  { name: '', title: '', visible: false },
  { name: 'error_id', title: 'Error ID' },
  { name: 'message', title: 'Message' },
  { name: 'description', title: 'Description', className: 'rowtable' },
  { name: 'created_by', title: 'Created By' },
];
const rows = [
  { '': <button  className="btn btn-blue" variant="text" color="red">Details</button>, error_id: 123456789, message: 'Invalid Enter Procedure 1', description: 'DevExpress', created_by: 'Luis' },
  { '': <button  className="btn btn-blue" variant="text" color="red">Details</button>, error_id: 234567890, message: 'Invalid Enter Procedure 2 ', description: 'DevExpress', created_by: 'Luis Miguel' },
  { '': <button  className="btn btn-blue" variant="text" color="red">Details</button>, error_id: 345678901, message: 'Invalid Enter Procedure 3', description: 'DevExpress', created_by: 'Luis' },
  { '': <button  className="btn btn-blue" variant="text" color="red">Details</button>, error_id: 4567890123, message: 'Invalid Enter Procedure 4', description: 'DevExpress', created_by: 'Luis Miguel' },
  { '': <button  className="btn btn-blue" variant="text" color="red">Details</button>, error_id: 4567890123, message: 'Invalid Enter Procedure 5', description: 'DevExpress', created_by: 'Luis Miguel' },
];



function ErrorManager(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
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
                <input className="general-jce w-100 text-start" type="text" id="error_id" name="error_id" />
              </div>

              <div className="col-3">
                <h5 className="general-jce text-end">Payor</h5>
              </div>
              <div className="col-2">
              <input className="general-jce w-100 text-start" type="text" id="payor" name="payor" />
              </div>

              <div className="col-2"></div>

              <div className="col-2">
                <h5 className="general-jce text-end">Message</h5>
              </div>
              <div className="col-3">              
                <input className="general-jce w-100 text-start" type="text" id="message" name="message" />
              </div>

              <div className="col-3">
                <h5 className="general-jce text-end">Field</h5>
              </div>
              <div className="col-2">
              <input className="general-jce w-100 text-start" type="text" id="field" name="field" />
              </div>

              <div className="col-2"></div>

              <div className="col-2">
                <h5 className="general-jce text-end">Description</h5>
              </div>
              <div className="col-3">              
                <input className="general-jce w-100 text-start" type="text" id="description" name="description" />
              </div>

              <div className="col-3">
                <h5 className="general-jce text-end">Created by</h5>
              </div>
              <div className="col-2">
              <input className="general-jce w-100 text-start" type="text" id="created_by" name="created_by" />
              </div>
          </div>
          <br/>
          <div className="row">
          <div className="col-1"></div>                    
            <div className="col-4 d-grid gap-2">
              <button className="btn btn-blue m-1 btn-block">Create New Error</button>
            </div>        
            <div className="col-3"></div>
            <div className="col-2 d-grid gap-2 align-items-end">
              <button className="btn btn-blue m-1 btn-block ">Clean</button>
            </div>
            <div className="col-2 d-grid gap-2 align-items-start">
              <button className="btn btn-blue m-1 btn-block">Search</button>
            </div>
          </div>
          <br/><br/>
          <div className="row">
            <Paper>
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
            </Paper>
          </div>
        </div>
      </div>
    </div>   
  );
}

export default ErrorManager;