import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { routes } from "../../routes"
import { logout } from "../../redux/slices/userSlice"
import { useDispatch } from "react-redux"

function SecurityQuestions(props) {
  const dispatch = useDispatch()
	
	const onLogout = (e) => {
		dispatch(logout())
	}

  //User ID
  const {userId} = useSelector((state)=> state.user)

  //Security Questions Inputs Info
  const emptySecurityQuestions = {
    userId,
    q1Answer: "",
    q2Answer: "",
    q3Answer: "",
    q4Answer: "",
    q5Answer: "",
    q6Answer: "",
    q7Answer: "",
    q8Answer: "",
  }
  const [securityQuestions, setSecurityQuestions] = useState(emptySecurityQuestions);

  const handleQuestionsChange = (e) => {
    const value = e.target.value
    setSecurityQuestions({
      ...securityQuestions,
      [e.target.name]: value
    })
  }

  //Show/Hide Security Questions Buttons
  const initialAnswersShowState = {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
  }

  const [answersShow, setAnswersShow] = useState(initialAnswersShowState);

  useEffect(() => {
    async function fetchSecurityQuestions(){
      try
      {
        // const response = await getSecurityQuestions(userId)
        // setSecurityQuestions(response.data.data)

      }catch(error)
      {
        console.log(error);
      }
    }

    //Fetch the user information only if the user is logged in
    if(userId !== null){
      fetchSecurityQuestions()
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateSecurityQuestionsInfo = async(event) => 
  {
    event.preventDefault();
    console.log(securityQuestions);
    // try
    // {
    //   const response = await updateSecurityQuestions(securityQuestions);
    //   if(response.data.data){

    //     //Update message at the top of the page
    //     props.onQuestionsUpdate(true);

    //     //Reset the answers to password mode
    //     setAnswersShow(initialAnswersShowState)

    //   }else{
    //     //Update message at the top of the page
    //     props.onQuestionsUpdate(false);
        
    //   }

    // }catch(error)
    // {
    //   //Update message at the top of the page
    //   props.onQuestionsUpdate(false);

    // }
    
  }

  return (
    <div className="mt-4">
        <h2 className="header-jce">Change Password</h2>
        <br />
        <div className="content">

          <div className="row mx-4">

            <form onSubmit={updateSecurityQuestionsInfo}>

              <div className="squestion">
                <div className="row">
                  <div className="col-2">
                    <h5 className="general-jce text-align-right">Password</h5>
                  </div>
                  <div className="col-2">
                    <input className="general-jce" id="q1Answer" name="q1Answer" type="text" value={securityQuestions.q1Answer} onChange={handleQuestionsChange}/>         
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <h5 className="general-jce">Confirm Password</h5>
                  </div>
                  <div className="col-2">
                    <input className="general-jce" id="q1Answer" name="q1Answer" type="text" value={securityQuestions.q1Answer} onChange={handleQuestionsChange}/>         
                  </div>
                </div>
                <br />
                <div className="row">
                  Errorres
                </div>
                <br />
                <div className="row">
                  <div className="col-4">
                    <Link className="btn btn-blue mt-2" to={routes.LOGIN} onClick={onLogout}>
                      Back
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link className="btn btn-blue mt-2" to={routes.LOGIN} onClick={onLogout}>
                      Change Password
                    </Link>                  
                  </div>
                </div>
                {/* <div className="col-12">
                  <h5 className="general-jce">What is the name of your Mother?</h5>
                  <input className="general-jce" id="q1Answer" name="q1Answer" type="text" value={securityQuestions.q1Answer} onChange={handleQuestionsChange}/>         
                </div> */}


              </div>
              <br />
              <div className="col-12">
                {/* <Link className="btn btn-blue mt-2" to={routes.LOGIN} onClick={onLogout}>
                  Cancel
							  </Link>
                &nbsp;
                <Link className="btn btn-blue mt-2" to={routes.LOGIN} onClick={onLogout}>
                  Next
							  </Link>
                <button type="submit" className="btn btn-blue mt-2">
                  Next
                </button>                 */}
              </div>  
            </form>          

          </div>

        </div>    
    </div>
  );
}

export default SecurityQuestions;