import React, { useState } from "react"
import { Link } from "react-router-dom"
import { arrayEquals } from "../../validations/objectArrayEquals";

//API calls
import { getUserProfilesByFilter, deleteUserProfile } from "../../api/profileapi";

//Alert components
import {
    Dialog,
    DialogActions,
    DialogTitle,
  } from "@mui/material";
import { routes } from "../../routes";

function SpecialOptions(props) {

    //Delete alert window
    const [deleteAlertState, setDeleteAlertState] = useState(false)
    //Current Delete Selection
    const [userToDelete, setUserToDelete] = useState(0)
    //Query messages
    const [deleteUserMessage, setDeleteUserMessage] = useState()

    //Searched users Table
    const [searchedUsers, setSearchedUsers] = useState(<></>);

    //Search filter inputs
    const initialInputState = {
        username: "",
        name: "",
        lastname: "",
        dob: "",
        phone: "",
        email: ""
    }
    const [filterInputs, setFilterInputs] = useState(initialInputState)

    const handleFliterChange = (e) => {
		const value = e.target.value
		setFilterInputs({
			...filterInputs,
			[e.target.name]: value
		})
	}

    const searchUsersProfiles = async (event) =>
    {
        event.preventDefault();

        if(!arrayEquals(initialInputState, filterInputs)){
            //Search for the users
            try
            {
                const response = await getUserProfilesByFilter(filterInputs);
                const usersArray = response.data.data
                
                if(usersArray.length === 0){
                    //If no users where found
                    setSearchedUsers(
                        <tr>
                            <td colSpan={7} className="text-center">No users where found</td>
                        </tr>
                    )
                }else{
                    //Map the information from the search
                    const usersMap = usersArray.map((user) => 
                    (
                        <tr id={"userRow" + user.userId} key={"userRow" + user.userId}>
                            <td>
                                <button type="button" className="btn btn-blue mt-2 float-right" onClick={() => deleteWindowSetUser(user.userId)}>
                                Delete
                                </button>
                            </td>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.dob}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))

                    setSearchedUsers(usersMap)
                }

            }catch(error)
            {
                console.log(error)

                setSearchedUsers(
                    <tr>
                        <td colSpan={7} className="text-center">Error. Failed to search for users</td>
                    </tr>
                )
            }

        }else{
            setSearchedUsers(<></>)
        }
    }

    //Delete window control
    const handleDeleteWindow = () => 
    {
        setDeleteAlertState(current => !current);
        setUserToDelete(0)
    }

    //Delete window User set
    const deleteWindowSetUser = (userid) =>
    {
        //Open window
        handleDeleteWindow()

        //Set userToDelete to the target user
        setUserToDelete(userid)
 
    }


    //Delete user function
    const deleteUser = async () =>
    {
        try
        {
            //Delete the user
            const response = await deleteUserProfile(userToDelete);

            if(response){
                //Delete user row from the table
                const updatedSearchedUsers = searchedUsers.filter((sUser) => sUser.key !== ("userRow" + userToDelete))
                setSearchedUsers(updatedSearchedUsers)

                //Set delete confirmation message
                setDeleteUserMessage(<h5 className="general-jce s-message mt-2">User Was deleted</h5>);

            }else{
                //Set delete confirmation message
                setDeleteUserMessage(<h5 className="general-jce f-message mt-2">Error. User Could not be deleted</h5>);
            }

            //Close the window
            handleDeleteWindow()
            

        }catch(error)
        {
            console.log(error);

            //Set delete confirmation message
            setDeleteUserMessage(<h5 className="general-jce f-message mt-2">Error. User Could not be deleted</h5>);

            //Close the window
            handleDeleteWindow()
        }

    }

    const cleanSearch = () =>
    {
        //Set all input values to be empty
        setFilterInputs(initialInputState)

        //Reset results shown
        setSearchedUsers(<></>)
    }

  return (
    <div className="mt-4">
        <h2 className="header-jce">Special Options</h2>
        <div className="content mx-4">
            <form onSubmit={searchUsersProfiles}>
                <div className="row">

                    <div className="col-4">
                        <h5 className="general-jce">UserName</h5>
                        <input className="general-jce w-100" type="text" id="username" name="username" value={filterInputs.username} onChange={handleFliterChange}/>
                    </div>

                    <div className="col-4">
                        <h5 className="general-jce">Name</h5>
                        <input className="general-jce w-100" type="text" id="name" name="name" value={filterInputs.name} onChange={handleFliterChange}/>
                    </div>

                    <div className="col-4">
                        <h5 className="general-jce">Last Name</h5>
                        <input className="general-jce w-100" type="text" id="lastname" name="lastname" value={filterInputs.lastname} onChange={handleFliterChange}/>
                    </div>

                    <div className="col-4">
                        <h5 className="general-jce">DOB</h5>
                        <input className="general-jce w-100" type="date" id="dob" name="dob" value={filterInputs.dob} onChange={handleFliterChange}/>
                    </div>

                    <div className="col-4">
                        <h5 className="general-jce">Phone number</h5>
                        <input className="general-jce w-100" type="number" id="phone" name="phone" value={filterInputs.phone} onChange={handleFliterChange}/>
                    </div>

                    <div className="col-4">
                        <h5 className="general-jce">E-mail</h5>
                        <input className="general-jce w-100" type="text" id="email" name="email" value={filterInputs.email} onChange={handleFliterChange}/>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-blue ms-2 my-2 float-end">
                            Search
                        </button>

                        <button type="button" className="btn btn-blue ms-2 my-2 float-end" onClick={cleanSearch}>
                            Clean
                        </button>
                    </div>
                    
                </div>
            </form>
            

            <div>
                {deleteUserMessage}
                <table className="table table-bordered mt-4 w-100">
                    <thead>
                        <tr>
                            <th></th>
                            <th>UserName</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>DOB</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchedUsers}
                    </tbody>
                </table>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-4 mx-auto">
                            <div className="row text-center">

                                <div className="col-4">
                                    <Link className="btn btn-blue mt-2" to={routes.ADDUSER}>
                                        Add User
                                    </Link>
                                </div>
                                
                                <div className="col-4">
                                    <button type="button" className="btn btn-blue mt-2">
                                    Reset Password
                                    </button>
                                </div>
                                

                                <div className="col-4">
                                    <button type="button" className="btn btn-blue mt-2">
                                    Unlock Users
                                    </button>
                                </div>
                        
                            </div>
                    
                        </div>
                    </div>
                </div>
                
            </div>

            {/*Delete Dialog*/}
            <Dialog
            open={deleteAlertState}
            onClose={handleDeleteWindow}
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
            >
                <DialogTitle id="delete-dialog-title">
                This process will delete the user, are you sure you want to continue?
                </DialogTitle>
                <DialogActions>
                <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(1)}
                    autoFocus
                >
                    Yes
                </button>
                <button className="btn btn-classic" onClick={handleDeleteWindow}>
                    No
                </button>
                </DialogActions>
          </Dialog>

        </div>
    </div>

  );
}

export default SpecialOptions;