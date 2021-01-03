import React, { useState } from "react";
import "./App.css";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { surveySlice } from "./Store/surveySlice";

function SingleSelect(props) {
  const dispatch = useDispatch();
  const disableFlag = true;
  const [question, setQuestion] = useState({
    question: "",
    option: [],
    type: "single",
  });
  return (
    <div className="question-container">
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Question"
          onChange={(evt) => {
            //props.questionChangeHandler(evt.target.value);
            var tempQues = { ...question };
            tempQues.question = evt.target.value;
            setQuestion(tempQues);
          }}
        />
      </InputGroup>
      <p className="option">Options</p>
      <InputGroup className="question-group">
        <Input
          onChange={(evt) => {
            //props.questionChangeHandler(evt.target.value);
            var tempQues = { ...question };
            tempQues.option[0] = evt.target.value;
            setQuestion(tempQues);
          }}
        />
        <InputGroupAddon addonType="append">
          <Button color="secondary" className="btn" disabled={disableFlag}>
            +
          </Button>
          <Button color="secondary" className="btn" disabled={disableFlag}>
            -
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="question-group">
        <Input
          onChange={(evt) => {
            //props.questionChangeHandler(evt.target.value);
            var tempQues = { ...question };
            tempQues.option[1] = evt.target.value;
            setQuestion(tempQues);
          }}
        />
        <InputGroupAddon addonType="append">
          <Button color="secondary" className="btn" disabled={disableFlag}>
            +
          </Button>
          <Button color="secondary" className="btn" disabled={disableFlag}>
            -
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <Button
        className="survery-btn"
        onClick={() => {
          const surveyId = props.surveyId;
          console.log("surveyId ", surveyId);
          const payload = {
            option: question.option,
            question: question.question,
            type: question.type,
            surveyId,
          };
          dispatch(surveySlice.actions.addQuestion(payload));
          props.setDropdownText("Select question type");
        }}
      >
        Add Question
      </Button>
      <Button
        className="survery-btn"
        onClick={() => {
          const surveyId = props.surveyId;
          console.log("surveyId ", surveyId);
          const payload = {
            option: question.option,
            question: question.question,
            type: "single",
            surveyId,
          };
          dispatch(surveySlice.actions.addQuestion(payload));
          props.setDropdownText("Select question type");
          props.setPublishFlag(true);
        }}
      >
        Publish
      </Button>
    </div>
  );
}

export default SingleSelect;
