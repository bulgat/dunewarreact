import { combineReducers } from "redux";
import CarReducers from './car.js'
import carActive from "./carActive.js";
import { likeReducer } from "./LikeReducer.js";

export const rootReducer = combineReducers({
    cars:CarReducers,
    active: carActive,
    likeReducer
})

export default rootReducer;


