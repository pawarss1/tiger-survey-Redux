import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "./App.css";
import background from "./logo.PNG";
import DisplaySurvey from "./DisplaySurvey";
import { useSelector } from "react-redux";

function TakeSurvey(props) {
  const history = useHistory();
  const surveyIdList = useSelector(globalStore => globalStore.surveys.map((survey) => survey.surveyId))
  const displaySurvey = (surveyId) => {
    const result = surveyIdList.filter(
      (surveyIdcur) => surveyIdcur === surveyId
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
      {surveyIdList.map((surveyId, index) => {
        return (
          <div>
            <Button
              className="survery-btn"
              onClick={() => {
                displaySurvey(surveyId);
              }}
            >
              Take Survery: {surveyId}
            </Button>
          </div>
        );
      })}
      <Route path="/takeSurvey/:surveyId">
        <DisplaySurvey/>
      </Route>
    </div>
  );
}

export default TakeSurvey;
