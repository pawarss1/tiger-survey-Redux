import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import background from "./logo.PNG";
import DisplaySurveyQuestion from "./DisplaySurveyQuestion";

function DisplaySurvey(props) {
  const { surveyId } = useParams();
  const [survey, setSurvey] = useState({
    surveyId: "",
    questionList: [],
  });

  useEffect(() => {
    console.log("test " + surveyId + " " + props.surveys);
    const result = props.surveys.filter(
      (survey) => survey.surveyId === surveyId
    );
    if (result.length !== 0) {
      const tempSur = {
        surveyId: result[0].surveyId,
        questionList: result[0].questionList,
      };
      setSurvey(tempSur);
    }
  }, []);
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
