import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import CreateSurvey from "./CreateSurvey";
import background from "./logo.PNG";
import "./App.css";
import { Switch, Link, Route, useHistory } from "react-router-dom";
import TakeSurvey from "./TakeSurvey";
import DisplaySurvey from "./DisplaySurvey";
import { surveySlice, createSurvey } from "./Store/surveySlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

function App() {
  let [surveys, setSurveys] = useState([]);
  let history = useHistory();
  const dispatch = useDispatch();

  const createNewSurveyId = () => {
    dispatch(createSurvey())
      .then(unwrapResult)
      .then((result) => {
        console.log("result on UI ", result);
        history.push("/createSurvey/" + result);
      });
  };
  return (
    <div className="App">
      <Switch>
        <Route path="/createSurvey/:surveyId">
          <CreateSurvey surveys={surveys} setSurveys={setSurveys} />
        </Route>
        <Route path="/takeSurvey/:surveyId">
          <DisplaySurvey />
        </Route>
        <Route path="/takeSurvey">
          <TakeSurvey />
        </Route>
        <Route path="/">
          <div className="App">
            <div className="App-logo">
              <div>
                <img src={background} alt=""></img>
              </div>
            </div>
          </div>
          <Button className="survery-btn" onClick={createNewSurveyId}>
            Create Survey
          </Button>
          <Link to="/takeSurvey">
            <Button className="survery-btn">Take Survey</Button>
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
