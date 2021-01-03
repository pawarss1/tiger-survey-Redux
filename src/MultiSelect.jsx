import React, { useState, useEffect } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import ListItem from "./ListItem";
import { useDispatch } from "react-redux";
import { surveySlice } from "./Store/surveySlice";

function MultiSelect(props) {
  const dispatch = useDispatch();
  let [question, setQuestion] = useState({
    question: "",
    options: [""],
  });
  let [publishAndAddQuesBtn, setFlag] = useState(false);
  useEffect(() => {
    console.log(question);
    if (question.options.length === 4) {
      setFlag(true);
    }
  }, [question]);

  const addOptionHandler = (curIndex) => {
    console.log(question.options[curIndex]);
    let tempOptions = [...question.options, ""];
    // tempOptions.push("");
    let i = tempOptions.length - 1;
    while (i > curIndex + 1) {
      tempOptions[i] = tempOptions[i - 1];
      i--;
    }
    tempOptions[curIndex + 1] = "";
    let currentQuestion = {
      question: question.question,
      options: tempOptions,
    };
    setQuestion(currentQuestion);
  };

  const removeOptionHandler = (curIndex) => {
    let tempOptions = [...question.options];
    tempOptions.splice(curIndex, 1);
    let currentQuestion = {
      question: question.question,
      options: tempOptions,
    };
    setQuestion(currentQuestion);
  };

  const optionChangeHandler = (text, index) => {
    let currentQuestion = { ...question };
    currentQuestion.options[index] = text;
    setQuestion(currentQuestion);
  };
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
      {question.options.map((option, index) => {
        return (
          <div key={index}>
            <ListItem
              question={question}
              option={option}
              index={index}
              optionChangeHandler={optionChangeHandler}
              addOptionHandler={addOptionHandler}
              removeOptionHandler={removeOptionHandler}
            />
          </div>
        );
      })}
      {publishAndAddQuesBtn && (
        <Button
          className="survery-btn"
          onClick={() => {
            const surveyId = props.surveyId;
            console.log("surveyId ", surveyId);
            const payload = {
              option: question.options,
              question: question.question,
              type: "multi",
              surveyId,
            };
            dispatch(surveySlice.actions.addQuestion(payload));
            props.setDropdownText("Select question type");
          }}
        >
          Add Question
        </Button>
      )}
      {publishAndAddQuesBtn && (
        <Button
          className="survery-btn"
          onClick={() => {
            const surveyId = props.surveyId;
            console.log("surveyId ", surveyId);
            const payload = {
              option: question.options,
              question: question.question,
              type: "multi",
              surveyId,
            };
            dispatch(surveySlice.actions.addQuestion(payload));
            props.setDropdownText("Select question type");
            props.setPublishFlag(true);
          }}
        >
          Publish
        </Button>
      )}
    </div>
  );
}

export default MultiSelect;
