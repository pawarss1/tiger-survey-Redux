import React from "react";
import "./App.css";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

function ListItem(props) {
  return (
    <div>
      <InputGroup className="question-group">
        <Input
          placeholder="Type answer here"
          onChange={(evt) => {
            //props.questionChangeHandler(evt.target.value);
            // var tempQues = { ...props.question };
            // tempQues.options[props.index] = evt.target.value;
            props.optionChangeHandler(evt.target.value, props.index);
          }}
        />
        <InputGroupAddon addonType="append">
          <Button
          disabled={props.question.options.length >= 4}
            color="secondary"
            className="btn"
            onClick={() => {
              props.addOptionHandler(props.index);
            }}
          >
            +
          </Button>
          <Button
            disabled={props.question.options.length === 1}
            color="secondary"
            className="btn"
            onClick={() => {
              props.removeOptionHandler(props.index);
            }}
          >
            -
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export default ListItem;
