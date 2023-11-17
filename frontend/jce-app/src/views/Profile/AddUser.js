import React, { useEffect, useState } from "react"
//import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { routes } from "../../routes";

//Validations
import { addUserValidator , userNameValidator } from "../../validations/addUserValidations";
import { arrayEquals } from "../../validations/objectArrayEquals";

//List of user Roles
//import { userRoles } from "../../userRoles";

//API calls
import { createUserProfile } from "../../api/profileapi";


function AddUser(props) {

  //Page title
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  //REMEMBER TO VALIDATE FUNCTIONALITY TO ADMIN ONLY
  //User ID
  //const {userId, username, role} = useSelector((state)=> state.user)
  //role === '4' && (<></>)

  //Query messages
  const [createUserMessage, setCreateUserMessage] = useState()

  //New User Inputs
  const fieldName = {
    username: "user",
    role: "role",
    name: "name",
    lastname: "lastname",
    dob: "dob",
    phone: "phone",
    email: "email"
}

  const initialInputState = {
    username: "",
    role: "",
    name: "",
    lastname: "",
    dob: "",
    phone: "",
    email: ""
  }
  const [newUserInputs, setNewUserInputs] = useState(initialInputState)

  //Username fill
const fillUsername = (name, lastname) =>{
    const firstPart = name.charAt(0).toUpperCase()
    const secondPart = lastname.split(" ")

    //Generate 5 random numbers
    var thirdPart = ""
    for(var i = 0; i < 5; i++){
        const rNumber = Math.floor(Math.random() * 10);
        thirdPart += rNumber
    }

    const filledUsername = firstPart + "." + secondPart[0].charAt(0).toUpperCase() + secondPart[0].slice(1) + thirdPart

    return filledUsername
} 

  // Onchange for fields
const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setNewUserInputs({
        ...newUserInputs,
        [name]: value
    })
    
    //Create username if name and lastname are valid
    if(name === fieldName.name || name === fieldName.lastname){
        
        var filledUsername = ""

        if(name === fieldName.name && userNameValidator(value, newUserInputs.lastname)){
            //Generate the username
            filledUsername = fillUsername(value, newUserInputs.lastname)
        }
    
        if(name === fieldName.lastname && userNameValidator(newUserInputs.name, value)){
            //Generate the username
            filledUsername = fillUsername(newUserInputs.name, value)       
        }

        //Update the field
        setNewUserInputs({
            ...newUserInputs,
            username: filledUsername,
            [name]: value
        })
    }
}

//Error messages
const initialErrorState = {
    username: "",
    role: "",
    name: "",
    lastname: "",
    dob: "",
    phone: "",
    email: ""
}
const [errorMessage, setErrorMessage] = useState(initialErrorState)

//Save the User
const saveNewUser = async (event) =>
{
    event.preventDefault();

    //Make fields validations and set the errors
    const userValidations = addUserValidator(newUserInputs)
    setErrorMessage(userValidations)

    //Validate if there are no errors
    if(arrayEquals(userValidations, initialErrorState)){
        console.log(newUserInputs)

        try
        {
            //Create the user
            const response = await createUserProfile(newUserInputs);

            //Show a message verifying the user creation algon with the temporal Password
            console.log(response.data)
            setCreateUserMessage(<h5 className="general-jce s-message mt-2">The new user was saved, the temporal password is {response.data.data.password}</h5>);

        }catch(error)
        {
            console.log(error);

            //Failed to create user error message
            setCreateUserMessage(<h5 className="general-jce f-message mt-2">Error. User Could not be created</h5>);
        }
    }
}

const clearFields = () =>
    {
        //Set all input values to be empty
        setNewUserInputs(initialInputState)

        //Set all validation messages to empty
        setErrorMessage(initialErrorState)
    }

  return (
    <div style={{ margin: "20px" }}>
      <h2 className="header-jce">Add User</h2>
      {createUserMessage}

      <div style={{ margin: "20px" }}>
        <div className="content mb-4">

            <form onSubmit={saveNewUser}>
                
                <div className="row">
                    <div className="col-12">
                        <div className="row">

                            <div className="col-4">
                                <h5 className="general-jce">User</h5>
                                <input className="general-jce w-100" type="text" id="username" name="username" value={newUserInputs.username} readOnly/>
                                <h4 className="general-jce f-message mt-2">{errorMessage.username}</h4>
                            </div>

                            <div className="col-4">
                                <h5 className="general-jce">Role</h5>
                                <select className="w-100" id="role" name="role" value={newUserInputs.role} onChange={handleInputChange}>
                                    <option value={""} disabled>Select a role</option>
                                    <option value={1} >Member</option>
                                    <option value={2} >Provider</option>
                                    <option value={3} >Payor</option>
                                    <option value={4} >Admin</option>
                                </select>
                                <h4 className="general-jce f-message mt-2">{errorMessage.role}</h4>
                            </div>

                        </div>
                    </div>

                    <div className="col-4">
                        <h5 className="general-jce">Name</h5>
                        <input className="general-jce w-100" type="text" id="name" name="name" value={newUserInputs.name} onChange={handleInputChange}/>
                        <h4 className="general-jce f-message mt-2">{errorMessage.name}</h4>
                    </div>

                    <div className="col-4">
                        <h5 className="general-jce">Last name</h5>
                        <input className="general-jce w-100" type="text" id="lastname" name="lastname" value={newUserInputs.lastname} onChange={handleInputChange}/>
                        <h4 className="general-jce f-message mt-2">{errorMessage.lastname}</h4>
                    </div>

                    <div className="col-4">
                        <h5 className="general-jce">DOB</h5>
                        <input className="general-jce w-100" type="date" id="dob" name="dob" value={newUserInputs.dob} onChange={handleInputChange}/>
                        <h4 className="general-jce f-message mt-2">{errorMessage.dob}</h4>
                    </div>

                    <div className="col-12 mt-2">
                        <div className="row">

                            <div className="col-4">
                                <h5 className="general-jce">Phone number</h5>
                                <input className="general-jce w-100" type="text" id="phone"name="phone" value={newUserInputs.phone} onChange={handleInputChange}/>
                                <h4 className="general-jce f-message mt-2">{errorMessage.phone}</h4>
                            </div>

                            <div className="col-8">
                                <h5 className="general-jce">E-mail</h5>
                                <input className="general-jce w-100" type="text" id="email" name="email" value={newUserInputs.email} onChange={handleInputChange}/>
                                <h4 className="general-jce f-message mt-2">{errorMessage.email}</h4>
                            </div>

                        </div>
                    </div>

                    <div className="col-4">
                        <button type="submit" formNoValidate className="btn btn-blue mt-4 me-2">
                            Save
                        </button>

                        <button type="button" className="btn btn-blue mt-4" onClick={clearFields}>
                            Clear
                        </button>
                    </div>

                    <div className="col-8">
                        <Link className="btn btn-blue mt-4 float-end" to={routes.PROFILE}>
                            Close
                        </Link>
                    </div>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default AddUser;