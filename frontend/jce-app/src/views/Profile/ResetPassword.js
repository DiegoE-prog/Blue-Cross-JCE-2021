import React, { useEffect } from "react"
//import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { routes } from "../../routes";

//List of user Roles
//import { userRoles } from "../../userRoles";

//API calls

function ResetPassword(props) {

  //Page title
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  //User ID
  //const {userId, username, role} = useSelector((state)=> state.user)

  return (
    <div style={{ margin: "20px" }}>
      <h2 className="header-jce">Reset Password</h2>

      <div style={{ margin: "20px" }}>
        <div className="content mb-4">      
          <div className="row">

          <div className="col-10 mx-auto">
            <div className="row">
              
              <div className="col-6">
                  <h5 className="general-jce">User</h5>
                  <input className="general-jce w-100" type="text" id="username" name="username"/>
              </div>

              <div className="col-6">
                  <button type="submit" formNoValidate className="btn btn-blue mt-4 me-2">
                      Search
                  </button>
              </div>

              <div className="col-12 mb-2">
                  <div className="row">

                    <div className="col-6">
                        <h5 className="general-jce">Role</h5>
                        <input className="general-jce w-100" type="text" id="role" name="role" readOnly/>
                    </div>

                  </div>
              </div>

              <div className="col-6">
                  <h5 className="general-jce">Name</h5>
                  <input className="general-jce w-100" type="text" id="name" name="name" readOnly/>
              </div>

              <div className="col-6">
                  <h5 className="general-jce">Last name</h5>
                  <input className="general-jce w-100" type="text" id="lastname" name="lastname" readOnly/>
              </div>

              <div className="col-12 mt-2">
                <h5 className="general-jce s-message mt-2">Password reset successfully, the temporal password is "p@ssworfDE%53".</h5>
              </div>
              
              <div className="col-6">
                  <button type="submit" formNoValidate className="btn btn-blue mt-4 me-2">
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

      </div>
    </div>
  );
}

export default ResetPassword;