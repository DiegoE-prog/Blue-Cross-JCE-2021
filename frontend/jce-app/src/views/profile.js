import React, { useEffect } from "react";

function Profile(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div style={{ margin: "20px" }}>
      <h1 className="section-jce">Profile</h1>

      <div style={{ margin: "20px" }}>
        <h2 className="header-jce">Personal Information</h2>

        <div className="content mb-4">
          <div className="row">

            <div className="col-4">
              <h5 className="general-jce">Name</h5>
              <input className="w-100" type="text" id="name" name="name"readOnly/>
            </div>

            <div className="col-4">
              <h5 className="general-jce">Last Name</h5>
              <input className="w-100" type="text" id="last_name" name="last_name" readOnly/>
            </div>

            <div className="col-4">
              <h5 className="general-jce">DOB</h5>
              <input className="w-100" type="text" id="dob" name="dob" readOnly/>
            </div>

            <div className="col-12 mt-2">
              <div className="row">
                <div className="col-4">
                  <h5 className="general-jce">Phone Number</h5>
                  <input className="w-100" type="number" id="dob"name="dob"/>
                </div>

                <div className="col-8">
                  <h5 className="general-jce">E-mail</h5>
                  <input className="w-100" type="text" id="dob" name="dob"/>
                </div>
              </div>
              
            </div>

            

            <div className="col-4">
              <button type="button" className="btn btn-blue my-2">
                Save
              </button>
            </div>

          </div>

        </div>

        <h2 className="header-jce">User Information</h2>
            <div className="content">
              <div className="row">

                <div className="col-4">
                  <h5 className="general-jce">User</h5>
                  <input className="w-100" type="text" id="user" name="user" readOnly/>
                </div>

                <div className="col-4">
                  <h5 className="general-jce">Role</h5>
                  <input className="w-100" type="text" id="role" name="role" readOnly/>
                </div>

              </div>

            </div>

      </div>
    </div>
  );
}

export default Profile;
