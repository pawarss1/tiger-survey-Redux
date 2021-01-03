import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import background from "./logo.PNG";
import DisplaySurveyQuestion from "./DisplaySurveyQuestion";
import { useSelector } from "react-redux";


function DisplaySurvey(props) {
  const { surveyId } = useParams();
  const survey = useSelector(globalStore => globalStore.surveys.find((s) => s.surveyId === surveyId))
  
  return (
    <div>
      <div className="App">
        <div className="App-logo">
          <div>
            <img src={background} alt=""></img>
          </div>
        </div>
      </div>
      {survey !== undefined && (
        <div>
          <b>
            Survey Id:
            {survey.surveyId}
          </b>
          <div>
            {survey.questionList.map((question, index) => {
              return (
                <div>
                  <DisplaySurveyQuestion question={question} index={index}/>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplaySurvey;
