import React from 'react'
import DisplaySingleQuestion from "./DisplaySingleQuestion"
import DisplayMultiQuestion from "./DisplayMultiQuestion"


function DisplaySurveyQuestion(props) {
    return (
        <div>
            {
                props.question.type === "single" ? <DisplaySingleQuestion question={props.question}/> : <DisplayMultiQuestion question={props.question} />
            }
        </div>
    )
}

export default DisplaySurveyQuestion
