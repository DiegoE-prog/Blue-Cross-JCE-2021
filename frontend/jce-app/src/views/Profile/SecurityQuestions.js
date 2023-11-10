import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

//API calls
import { getSecurityQuestions, updateSecurityQuestions } from "../../api/securityquestionsapi";


function SecurityQuestions(props) {

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
        const response = await getSecurityQuestions(userId)
        setSecurityQuestions(response.data.data)

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


  const showAnswer = (qNumber) =>
  {
    const qkey = "q" + qNumber
    setAnswersShow((prevState) =>{
      return({
        ...prevState,
        [qkey]: !prevState[qkey]
      })
    })
  }

  const updateSecurityQuestionsInfo = async(event) => 
  {
    event.preventDefault();

    if(userId !== null){

      try
      {
        const response = await updateSecurityQuestions(securityQuestions);
        if(response.data.data){

          //Update message at the top of the page
          props.onQuestionsUpdate(true);

          //Reset the answers to password mode
          setAnswersShow(initialAnswersShowState)

        }else{
          //Update message at the top of the page
          props.onQuestionsUpdate(false);
          
        }

      }catch(error)
      {
        //Update message at the top of the page
        props.onQuestionsUpdate(false);

      }
    }
  }

  return (
    <div className="mt-4">
        <h2 className="header-jce">Security Questions</h2>

        <div className="content">

          <div className="row mx-4">

            <form onSubmit={updateSecurityQuestionsInfo}>

              <div className="squestion">

                <div className="col-12">
                  <h5 className="general-jce">What is the name of your Mother?</h5>
                  <input className="general-jce" id="q1Answer" name="q1Answer" type={answersShow.q1 === true ? "text" : "password"} value={securityQuestions.q1Answer} onChange={handleQuestionsChange}/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(1)}>
                    {answersShow.q1 === true ? "Hide" : "Show" }
                  </button>            
                </div>

                <div className="col-12">
                  <h5 className="general-jce">Who was your hero in your childhood?</h5>
                  <input className="general-jce" id="q2Answer" name="q2Answer" type={answersShow.q2 === true ? "text" : "password"} value={securityQuestions.q2Answer} onChange={handleQuestionsChange}/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(2)}>
                      {answersShow.q2 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is the name of the city where you grew up?</h5>
                  <input className="general-jce" id="q3Answer" name="q3Answer" type={answersShow.q3 === true ? "text" : "password"} value={securityQuestions.q3Answer} onChange={handleQuestionsChange}/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(3)}>
                      {answersShow.q3 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What brand was your first car?</h5>
                  <input className="general-jce" id="q4Answer" name="q4Answer" type={answersShow.q4 === true ? "text" : "password"} value={securityQuestions.q4Answer} onChange={handleQuestionsChange}/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(4)}>
                      {answersShow.q4 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is the name of your University?</h5>
                  <input className="general-jce" id="q5Answer" name="q5Answer" type={answersShow.q5 === true ? "text" : "password"} value={securityQuestions.q5Answer} onChange={handleQuestionsChange}/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(5)}>
                      {answersShow.q5 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is your favorite Sport?</h5>
                  <input className="general-jce" id="q6Answer" name="q6Answer" type={answersShow.q6 === true ? "text" : "password"} value={securityQuestions.q6Answer} onChange={handleQuestionsChange}/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(6)}>
                      {answersShow.q6 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is the name of your first boss?</h5>
                  <input className="general-jce" id="q7Answer" name="q7Answer" type={answersShow.q7 === true ? "text" : "password"} value={securityQuestions.q7Answer} onChange={handleQuestionsChange}/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(7)}>
                      {answersShow.q7 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is your favorite band?</h5>
                  <input className="general-jce" id="q8Answer" name="q8Answer" type={answersShow.q8 === true ? "text" : "password"} value={securityQuestions.q8Answer} onChange={handleQuestionsChange}/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(8)}>
                      {answersShow.q8 === true ? "Hide" : "Show" }
                  </button>
                </div>

              </div>

              <div className="col-4">
                <button type="submit" className="btn btn-blue mt-2">
                  Save
                </button>
              </div>  

            </form>          

          </div>

        </div>    
    </div>
  );
}

export default SecurityQuestions;