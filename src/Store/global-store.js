import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { surveySlice } from './surveySlice';


const rootReducer = combineReducers({
    surveys: surveySlice.reducer,
})
export const store = configureStore({
    reducer:rootReducer,
})