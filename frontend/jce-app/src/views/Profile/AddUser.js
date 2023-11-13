import React, { useEffect } from "react"
//import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

//List of user Roles
//import { userRoles } from "../../userRoles";
import { routes } from "../../routes";

function AddUser(props) {

  //Page title
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  //User ID
  //const {userId, username, role} = useSelector((state)=> state.user)
  //role === '4' && (<></>)

  return (
    <div style={{ margin: "20px" }}>
      <h2 className="header-jce">Add User</h2>

      <div style={{ margin: "20px" }}>
        <div className="content mb-4">

            <div className="row">

            <div className="col-12">
                <div className="row">

                    <div className="col-4">
                        <h5 className="general-jce">User</h5>
                        <input className="general-jce w-100" type="text" id="username" name="username" />
                    </div>

                    <div className="col-4">
                        <h5 className="general-jce">Role</h5>
                        <select className="w-100" id="role" name="role">
                            <option value={1} >Member</option>
                            <option value={2} >Provider</option>
                            <option value={3} >Payor</option>
                            <option value={4} >Admin</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className="col-4">
                <h5 className="general-jce">Name</h5>
                <input className="general-jce w-100" type="text" id="name" name="name" />
            </div>

            <div className="col-4">
                <h5 className="general-jce">Last Name</h5>
                <input className="general-jce w-100" type="text" id="lastname" name="lastname" />
            </div>

            <div className="col-4">
                <h5 className="general-jce">DOB</h5>
                <input className="general-jce w-100" type="date" id="dob" name="dob" />
            </div>

            <div className="col-12 mt-2">
                <div className="row">

                    <div className="col-4">
                        <h5 className="general-jce">Phone number</h5>
                        <input className="general-jce w-100" type="number" id="phone"name="phone"/>
                    </div>

                    <div className="col-8">
                        <h5 className="general-jce">E-mail</h5>
                        <input className="general-jce w-100" type="email" id="email" name="email" />
                    </div>

                </div>
            </div>

            <div className="col-4">
                <button type="submit" className="btn btn-blue mt-4 me-2">
                    Save
                </button>

                <button type="submit" className="btn btn-blue mt-4">
                    Clear
                </button>
            </div>

            <div className="col-8">
                <Link className="btn btn-blue mt-4 float-end" to={routes.PROFILE}>
                    Close
                </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AddUser;