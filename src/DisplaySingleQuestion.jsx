import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./App.css";

function DisplaySingleQuestion(props) {
  return (
    <div>
      <Form inline>
        <FormGroup className="form" tag="fieldset">
          <legend>{props.question.question}</legend>
          <FormGroup className="radio-btns"  check>
            <Label check >
              <Input type="radio" name="option1" /> {props.question.option[0]}
            </Label>
          </FormGroup>
          <FormGroup className="radio-btns" check>
            <Label check>
              <Input type="radio" name="option1" /> {props.question.option[1]}
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
    </div>
  );
}

export default DisplaySingleQuestion;
