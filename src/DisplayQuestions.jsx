import React from "react";
import "./App.css";
import DisplaySingleQuestion from "./DisplaySingleQuestion";
import DisplayMultiQuestion from "./DisplayMultiQuestion";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import {
  useHistory,
} from "react-router-dom";

function DisplayQuestions(props) {
  let history = useHistory();
  let questionList = props.questionList;
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
          const curQuestionList = [...props.questionList];
          const surveyId = props.surveyId;
          let curSurveyList = [...props.surveys];
          const curSurveyItem = {
            surveyId: surveyId,
            questionList: curQuestionList,
          };
          curSurveyList.push(curSurveyItem);
          console.log(curSurveyList);
          props.setSurveys(curSurveyList);
          props.setDropdownText("Select question type")
          history.push("/");
        }}
      >
        Confirm Survey
      </Button>
    </div>
  );
}

export default DisplayQuestions;
