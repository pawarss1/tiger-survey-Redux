import React, { useState } from "react";
import "./App.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useParams } from "react-router-dom";
import background from "./logo.PNG";

import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import DisplayQuestions from "./DisplayQuestions";

function CreateSurvey(props) {
  const { surveyId } = useParams();
  // const tempId = useParams();
  console.log("Survey Id" + surveyId + " TempId ");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState("Select question type");
  const [question, setQuestion] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [publishFlag, setPublishFlag] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const questionChangeHandler = (questionText) => {
    console.log(questionText);
    setQuestion(questionText);
  };
  const questionListHandler = (question) => {
    console.log(questionList);
    setDropdownText("Select question type");
    let tempList = [...questionList];
    tempList.push(question);
    setQuestionList(tempList);
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
      <b>Survey ID:</b> {surveyId}
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="dropHeader" caret>
          {dropdownText}
        </DropdownToggle>
        <DropdownMenu className="dropDown">
          <DropdownItem
            onClick={() => {
              setPublishFlag(false);
              setDropdownText("Single Select");
            }}
          >
            Single Select
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            onClick={() => {
              setPublishFlag(false);
              setDropdownText("Multi Select");
            }}
          >
            Multi Select
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {dropdownText === "Single Select" ? (
        <SingleSelect
          surveyId={surveyId}
          setDropdownText={setDropdownText}
          setPublishFlag={setPublishFlag}
          dropdownText={dropdownText}
          questionChangeHandler={questionChangeHandler}
          questionListHandler={questionListHandler}
        />
      ) : null}
      {dropdownText === "Multi Select" ? (
        <MultiSelect
          surveyId={surveyId}
          setDropdownText={setDropdownText}
          setPublishFlag={setPublishFlag}
          dropdownText={dropdownText}
          questionChangeHandler={questionChangeHandler}
          questionListHandler={questionListHandler}
        />
      ) : null}
      {publishFlag && (
        <DisplayQuestions
          surveyId={surveyId}
          surveys={props.surveys}
          setSurveys={props.setSurveys}
          questionList={questionList}
          setDropdownText={setDropdownText}
        />
      )}
    </div>
  );
}

export default CreateSurvey;
