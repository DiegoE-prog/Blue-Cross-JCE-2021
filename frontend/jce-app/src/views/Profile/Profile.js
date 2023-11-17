import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

//Profile Components
import SecurityQuestions from "./SecurityQuestions";
import SpecialOptions from "./SpecialOptions";

//List of user Roles
import { userRoles } from "../../userRoles";

//API calls
import { getUserProfile, updatePhoneAndEmail } from "../../api/profileapi";

function Profile(props) {

  //Page title
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  //User ID
  const {userId, username, role} = useSelector((state)=> state.user)

  //Personal Information and Security Questions
  const [personalInfo, setPersonalInfo] = useState({});

  //Query messages
  const [updatePhoneMessage, setUpdatePhoneMessage] = useState();
  const [updateQuestionsMessage, setUpdateQuestionsMessage] = useState();

  //Profile information
  useEffect(() => {
    async function fetchProfile(){
      try
      {
        const response = await getUserProfile(userId)
        response.data.data.dob = String(response.data.data.dob).substring(0, 10)
        setPersonalInfo(response.data.data)

      }catch(error)
      {
        console.log(error);
      }
    
    }

    //Fetch the user information only if the user is logged in
    if(userId !== null){
      fetchProfile()
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateProfileInfo = async(event) => 
  {
    event.preventDefault();

    if(userId !== null){
      //Assign variables for the update
      const phone = event.target.elements.phone.value;
      const email = event.target.elements.email.value;

      const updateInfo = 
      {
        userId,
        phone,
        email
      }

      //Update the fields
      try
      {
        const response = await updatePhoneAndEmail(updateInfo);
        if(response.data.data){
          setUpdatePhoneMessage(<h5 className="general-jce s-message mt-2">Information was saved</h5>);
        }else{
          setUpdatePhoneMessage(<h5 className="general-jce f-message mt-2">Error. Information could not be saved</h5>);
        }

      }catch(error)
      {
        setUpdatePhoneMessage(<h5 className="general-jce f-message mt-2">Error. Information could not be saved</h5>);
      }
    }
  }

  //Security Questions functionality

  const updateQuestionsStatus = (status)=>
  {
    if(status === true){
      setUpdateQuestionsMessage(<h5 className="general-jce s-message mt-2">Security information successfuly updated</h5>)
    }else{
      setUpdateQuestionsMessage(<h5 className="general-jce f-message mt-2">Error. Security information could not be updated</h5>);
    }
    
  }

  // Automatically scrolls to top when the updateQuestionsMessage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [updateQuestionsMessage]);

  return (
    <div style={{ margin: "20px" }}>
      <h1 className="section-jce">Profile</h1>

      <div>
        {updateQuestionsMessage}
      </div>

      <div style={{ margin: "20px" }}>
        <h2 className="header-jce">Personal Information</h2>

        <div className="content mb-4">
          <div className="row">

            <div className="col-4">
              <h5 className="general-jce">Name</h5>
              <input className="general-jce w-100" type="text" id="name" name="name" readOnly defaultValue={ personalInfo.name || undefined }/>
            </div>

            <div className="col-4">
              <h5 className="general-jce">Last name</h5>
              <input className="general-jce w-100" type="text" id="lastname" name="lastname" readOnly defaultValue={ personalInfo.lastName || undefined }/>
            </div>

            <div className="col-4">
              <h5 className="general-jce">DOB</h5>
              <input className="general-jce w-100" type="date" id="dob" name="dob" readOnly defaultValue={ personalInfo.dob|| undefined }/>
            </div>

            <form onSubmit={updateProfileInfo}>
              <div className="col-12 mt-2">
                <div className="row">
                  <div className="col-4">
                    <h5 className="general-jce">Phone number</h5>
                    <input className="general-jce w-100" type="number" id="phone"name="phone" defaultValue={ personalInfo.phone || undefined }/>
                  </div>

                  <div className="col-8">
                    <h5 className="general-jce">E-mail</h5>
                    <input className="general-jce w-100" type="email" id="email" name="email" defaultValue={ personalInfo.email || undefined }/>
                  </div>
                </div>
                
              </div>

              <div className="col-12">
                {updatePhoneMessage}
              </div>

              <div className="col-4">
                <button type="submit" className="btn btn-blue mt-2">
                  Save
                </button>
              </div>
            </form>

            

          </div>

        </div>

        <div className="mt-4">
          <h2 className="header-jce">User Information</h2>
              <div className="content">
                <div className="row">

                  <div className="col-4">
                    <h5 className="general-jce">User</h5>
                    <input className="general-jce w-100" type="text" id="user" name="user" readOnly defaultValue={username || undefined}/>
                  </div>

                  <div className="col-4">
                    <h5 className="general-jce">Role</h5>
                    <input className="general-jce w-100" type="text" id="role" name="role" readOnly defaultValue={role != null ? userRoles[role] : undefined}/>
                  </div>

                </div>

              </div>
        </div>

        <SecurityQuestions onQuestionsUpdate={updateQuestionsStatus}/>

        {/* Only visible for admin users */}
        {role === '4' && (<SpecialOptions />)}

      </div>
    </div>
  );
}

export default Profile;