import { combineReducers } from "redux";
import CarReducers from './car.js'
import carActive from "./carActive.js";

export const rootReducer = combineReducers({
    cars:CarReducers,
    active: carActive
})

export default rootReducer;


