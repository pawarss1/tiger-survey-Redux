import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createSurvey = createAsyncThunk(
  "surveys/createSurvey",
  async (_, thunkAPI) => {
    const surveyId = String(thunkAPI.getState().surveys.length + 1);
    return surveyId;
  }
);
export const surveySlice = createSlice({
  name: "surveys",
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      const { surveyId, option, question, type } = action.payload;
      console.log(surveyId)
      console.log(state);
      const questionList = state.find((s) => s.surveyId === surveyId).questionList;
      const qId = String(questionList.length + 1);
      questionList.push({
        qId,
        question,
        option,
        type
      });
    },
    markPublished: (state, action) => {
        const { surveyId } = action.payload;
        const survey = state.find((s) => s.surveyId === surveyId);
        survey.isPublished = true;
        console.log("done..")
    }
  },
  extraReducers: {
    [createSurvey.fulfilled]: (state, action) => {
      state.push({ questionList: [], surveyId: action.payload, isPublished: false });
    },
  },
});
