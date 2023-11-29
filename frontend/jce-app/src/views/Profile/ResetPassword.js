import React, { useEffect, useState } from "react"
//import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { routes } from "../../routes";

//Alert components
import {
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";

//List of user Roles
import { userRoles } from "../../userRoles";

//API calls
import { getUserProfileByUsername, resetUserPassword } from "../../api/profileapi";

function ResetPassword(props) {

  //Page title
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  //Reset alert window
  const [resetAlertState, setResetAlertState] = useState(false)

  //Query messages
  const [resetPasswordMessage, setResetPasswordMessage] = useState()

  //Username to search
  const [usernameSearch, setUsernameSearch] = useState("")

  //Enable Reset Button
  const [enableResetButton, setEnableResetButton] = useState(false)

  //Personal information
  const emptyUserInfo = {
    userId: "",
    role: "",
    name: "",
    lastName: ""
  }
  const [userInfo, setUserInfo] = useState(emptyUserInfo)

  const getProfileInfo = async(event) => 
  {
    event.preventDefault();

    try
    {
      const response = await getUserProfileByUsername(usernameSearch)
      //console.log(response.data.data)
      setUserInfo(response.data.data)

      //Adjust error message and reset button
      setResetPasswordMessage("")
      setEnableResetButton(true)

    }catch(error)
    {
      console.log(error)
      //Empty information fields
      setUserInfo(emptyUserInfo)

      //Adjust error message and reset button
      setResetPasswordMessage(<h5 className="general-jce f-message mt-2">Invalid User</h5>)
      setEnableResetButton(false)
    }

  }

  //Reset window control
  const handleResetWindow = () => 
  {
      setResetAlertState(current => !current);
  }

  const resetPassword = async() => 
  {
    try
        {
            //Create the user
            const response = await resetUserPassword(userInfo.userId);

            //Show a message verifying the user creation algon with the temporal Password
            setResetPasswordMessage(<h5 className="general-jce s-message mt-2">The password of this user was restored, the temporal password is {response.data.data.password}</h5>);

        }catch(error)
        {
            console.log(error);

            //Failed to create user error message
            setResetPasswordMessage(<h5 className="general-jce f-message mt-2">Error. User Password could not be reset</h5>);
        }

    //Close the pop-up
    setResetAlertState(false)
    //Block the reset button
    setEnableResetButton(false)
  }
  

  return (
    <div style={{ margin: "20px" }}>
      <h2 className="header-jce">Reset Password</h2>

      <div style={{ margin: "20px" }}>
        <div className="content mb-4">      
          <div className="row">

            <div className="col-10 mx-auto">

              <form onSubmit={getProfileInfo}>
                <div className="row">
                  <div className="col-6">
                      <h5 className="general-jce">User</h5>
                      <input className="general-jce w-100" type="text" id="username" name="username" value={usernameSearch} onChange={e => setUsernameSearch(e.target.value)}/>
                  </div>

                  <div className="col-6">
                      <button type="submit" formNoValidate className="btn btn-blue mt-4 me-2">
                          Search
                      </button>
                  </div>
                
                </div>
              </form>

              <div className="row">
                
                <div className="col-12 mb-2">
                    <div className="row">

                      <div className="col-6">
                          <h5 className="general-jce">Role</h5>
                          <input className="general-jce w-100" type="text" id="role" name="role" value={userInfo.role !== "" ? userRoles[userInfo.role] : ""} readOnly/>
                      </div>

                    </div>
                </div>

                <div className="col-6">
                    <h5 className="general-jce">Name</h5>
                    <input className="general-jce w-100" type="text" id="name" name="name" value={userInfo.name} readOnly/>
                </div>

                <div className="col-6">
                    <h5 className="general-jce">Last name</h5>
                    <input className="general-jce w-100" type="text" id="lastname" name="lastname" value={userInfo.lastName} readOnly/>
                </div>

                <div className="col-12 mt-2">
                  {resetPasswordMessage}
                </div>
                
                <div className="col-6">
                    <button type="button" formNoValidate className="btn btn-blue mt-4 me-2" disabled={!enableResetButton} onClick={() => setResetAlertState(current => !current)}>
                        Reset
                    </button>
                </div>

                <div className="col-6">
                    <Link className="btn btn-blue mt-4 float-end" to={routes.PROFILE}>
                        Close
                    </Link>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/*Delete Dialog*/}
        <Dialog
            open={resetAlertState}
            onClose={handleResetWindow}
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">
                This process will restart the password of the selected user, please confirm if you want to proceed
                </DialogTitle>
                <DialogActions>
                <button
                    className="btn btn-danger"
                    onClick={() => resetPassword()}
                    autoFocus
                >
                    Yes
                </button>
                <button className="btn btn-classic" onClick={handleResetWindow}>
                    No
                </button>
                </DialogActions>
          </Dialog>

      </div>
    </div>
  );
}

export default ResetPassword;