import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "./App.css";
import background from "./logo.PNG";
import DisplaySurvey from "./DisplaySurvey";

function TakeSurvey(props) {
  const history = useHistory();
  const displaySurvey = (surveyId) => {
    const result = props.surveys.filter(
      (survey) => survey.surveyId === surveyId
    );
    console.log(result);
    if (result !== undefined) {
      history.push("/takeSurvey/"+surveyId);
    }
  };
  return (
    <div>
      <div className="App">
        <div className="App-logo">
          <div>
            <img src={background} alt=""></img>
          </div>
        </div>
      </div>
      {props.surveys.map((survey, index) => {
        return (
          <div>
            <Button
              className="survery-btn"
              onClick={() => {
                displaySurvey(survey.surveyId);
              }}
            >
              Take Survery: {survey.surveyId}
            </Button>
          </div>
        );
      })}
      <Route path="/takeSurvey/:surveyId">
        <DisplaySurvey surveys={props.surveys}/>
      </Route>
    </div>
  );
}

export default TakeSurvey;
