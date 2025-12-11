import { combineReducers } from "redux";
import CarReducers from './car.js'

export const rootReducer = combineReducers({
    cars:CarReducers
})

export default rootReducer;


