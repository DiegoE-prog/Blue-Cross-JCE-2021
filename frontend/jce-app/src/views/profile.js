import React, { useEffect } from "react";

function Profile(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div style={{ margin: "20px" }}>
      <h1>Profile</h1>

      <div style={{ margin: "20px" }}>
        <h2>Personal Information</h2>

        <div className="content">
          <div className="row">

            <div className="col-4">
              <h5>Name</h5>
              <input style={{ width: "100%" }} type="text" id="name" name="name"readOnly/>
            </div>

            <div className="col-4">
              <h5>Last Name</h5>
              <input style={{ width: "100%" }} type="text" id="last_name" name="last_name" readOnly/>
            </div>

            <div className="col-4">
              <h5>DOB</h5>
              <input style={{ width: "100%" }} type="text" id="dob" name="dob" readOnly/>
            </div>

            <div className="col-4">
              <h5>Phone Number</h5>
              <input style={{ width: "100%" }} type="number" id="dob"name="dob"/>
            </div>

            <div className="col-8">
              <h5>E-mail</h5>
              <input style={{ width: "100%" }} type="text" id="dob" name="dob"/>
            </div>

            <div className="col-4">
              <button type="button" className="btn btn-secondary">
                Save
              </button>
            </div>

            <h2>User Information</h2>
            <div className="content">
              <div className="row">

                <div className="col-4">
                  <h5>User</h5>
                  <input style={{ width: "100%" }} type="text" id="user" name="user" readOnly/>
                </div>

                <div className="col-4">
                  <h5>Role</h5>
                  <input style={{ width: "100%" }} type="text" id="role" name="role" readOnly/>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
