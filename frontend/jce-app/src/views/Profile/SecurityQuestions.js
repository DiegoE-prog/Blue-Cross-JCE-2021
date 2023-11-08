import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

//API calls
import { getSecurityQuestions, updateSecurityQuestions } from "../../api/securityquestionsapi";


function SecurityQuestions(props) {

  //User ID
  const {userId} = useSelector((state)=> state.user)

  //Security Questions Info
  const [securityQuestions, setSecurityQuestions] = useState({});

  const [answersShow, setAnswersShow] = useState(
    {
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
    }
    );

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
      //Assign variables for the update
      const q1answer = event.target.elements.q1answer.value;
      const q2answer = event.target.elements.q2answer.value;
      const q3answer = event.target.elements.q3answer.value;
      const q4answer = event.target.elements.q4answer.value;
      const q5answer = event.target.elements.q5answer.value;
      const q6answer = event.target.elements.q6answer.value;
      const q7answer = event.target.elements.q7answer.value;
      const q8answer = event.target.elements.q8answer.value;

      const updateInfo = 
      {
        userId,
        q1answer,
        q2answer,
        q3answer,
        q4answer,
        q5answer,
        q6answer,
        q7answer,
        q8answer
      }

      console.log(updateInfo)

      //Update the fields
      try
      {
        const response = await updateSecurityQuestions(updateInfo);
        if(response.data.data){

          //Update message at the top of the page
          props.onQuestionsUpdate(true);

          //Reset the answers to password mode
          setAnswersShow(
            {
              q1: false,
              q2: false,
              q3: false,
              q4: false,
              q5: false,
              q6: false,
              q7: false,
              q8: false,
            })

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
                  <input className="general-jce" id="q1answer" name="q1answer" type={answersShow.q1 === true ? "text" : "password"} defaultValue={ securityQuestions.q1Answer || undefined }/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(1)}>
                    {answersShow.q1 === true ? "Hide" : "Show" }
                  </button>            
                </div>

                <div className="col-12">
                  <h5 className="general-jce">Who was your hero in your childhood?</h5>
                  <input className="general-jce" id="q2answer" name="q2answer" type={answersShow.q2 === true ? "text" : "password"} defaultValue={ securityQuestions.q2Answer || undefined }/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(2)}>
                      {answersShow.q2 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is the name of the city where you grew up?</h5>
                  <input className="general-jce" id="q3answer" name="q3answer" type={answersShow.q3 === true ? "text" : "password"} defaultValue={ securityQuestions.q3Answer || undefined }/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(3)}>
                      {answersShow.q3 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What brand was your first car?</h5>
                  <input className="general-jce" id="q4answer" name="q4answer" type={answersShow.q4 === true ? "text" : "password"} defaultValue={ securityQuestions.q4Answer || undefined }/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(4)}>
                      {answersShow.q4 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is the name of your University?</h5>
                  <input className="general-jce" id="q5answer" name="q5answer" type={answersShow.q5 === true ? "text" : "password"} defaultValue={ securityQuestions.q5Answer || undefined }/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(5)}>
                      {answersShow.q5 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is your favorite Sport?</h5>
                  <input className="general-jce" id="q6answer" name="q6answer" type={answersShow.q6 === true ? "text" : "password"} defaultValue={ securityQuestions.q6Answer || undefined }/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(6)}>
                      {answersShow.q6 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is the name of your first boss?</h5>
                  <input className="general-jce" id="q7answer" name="q7answer" type={answersShow.q7 === true ? "text" : "password"} defaultValue={ securityQuestions.q7Answer || undefined }/>
                  <button type="button" className="btn btn-blue" onClick={() => showAnswer(7)}>
                      {answersShow.q7 === true ? "Hide" : "Show" }
                  </button>
                </div>

                <div className="col-12">
                  <h5 className="general-jce">What is your favorite band?</h5>
                  <input className="general-jce" id="q8answer" name="q8answer" type={answersShow.q8 === true ? "text" : "password"} defaultValue={ securityQuestions.q8Answer || undefined }/>
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