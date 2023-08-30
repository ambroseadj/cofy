import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import Questions from "./Questions";
import QuestionList from "./QuestionList"

const HomeMainbar = () => {
  const location = useLocation();
  const user=1;
  const navigate=useNavigate()
  
   
 
 const questionsList = useSelector((state) => state.questionsReducer);
//   var questionsList = [{
//     id:1,
//     votes:3,
//     noOfAnswers:2,
//   title:"what is a function"
// ,questionBody:"it meant to be",
// questionTags:["java","node js","react js","python"]
// ,userPosted:"mano",
// askedOn:"jan 1",
// answer:[{
//   answerBody:"Answer",
//   userAnswered:"KUmar",
//   userId:2,
// }]},
//     {
//       id:1,
//       votes:3,
//       noOfAnswers:2,
//     title:"what is a competetive programming"
//   ,questionBody:"it meant to be",
//   questionTags:["java","node js","react js","python"]
//   ,userPosted:"mano",
//   askedOn:"jan 10"
//     }

//   ]

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {questionsList.data===null?
        <h1>loading...</h1>:
        <>
        <p>{questionsList.data.length} questions</p>
        <QuestionList questionsList={questionsList.data}/>
        <>
         
          
          </>
        </>
        }
      </div>
    </div>
  );
};

export default HomeMainbar;