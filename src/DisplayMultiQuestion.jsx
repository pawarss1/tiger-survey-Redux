import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function DisplayMultiQuestion(props) {
  return (
    <div>
      <Form>
        <legend>{props.question.question}</legend>
        {props.question.option.map((option, index) => {
          return (
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> {option}
              </Label>
            </FormGroup>
          );
        })}
      </Form>
    </div>
  );
}

export default DisplayMultiQuestion;
