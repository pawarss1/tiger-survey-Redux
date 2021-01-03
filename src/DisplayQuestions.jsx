import React, { useEffect } from "react";
import "./App.css";
import DisplaySingleQuestion from "./DisplaySingleQuestion";
import DisplayMultiQuestion from "./DisplayMultiQuestion";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { surveySlice } from "./Store/surveySlice";

function DisplayQuestions(props) {
  let history = useHistory();
  const dispatch = useDispatch()
  const questionList = useSelector((store) => store.surveys.find((s) => s.surveyId === props.surveyId).questionList)
  return (
    <div>
      {questionList.map((question, index) => {
        return (
          <div className="question" key={index}>
            {question.type === "single" ? (
              <DisplaySingleQuestion question={question} />
            ) : (
              <DisplayMultiQuestion question={question} />
            )}
          </div>
        );
      })}
      <Button
        className="survery-btn"
        onClick={() => {
          // const curQuestionList = [...props.questionList];
          // const surveyId = props.surveyId;
          // let curSurveyList = [...props.surveys];
          // const curSurveyItem = {
          //   surveyId: surveyId,
          //   questionList: curQuestionList,
          // };
          // curSurveyList.push(curSurveyItem);
          // console.log(curSurveyList);
          // props.setSurveys(curSurveyList);
          const payload = {surveyId: props.surveyId}
          dispatch(surveySlice.actions.markPublished(payload));
          props.setDropdownText("Select question type");
          history.push("/");
        }}
      >
        Confirm Survey
      </Button>
    </div>
  );
}

export default DisplayQuestions;
