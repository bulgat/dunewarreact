import { combineReducers } from "redux";
import CarReducers from './car.js'
import carActive from "./carActive.js";
import { likeReducer } from "./LikeReducer.js";
import { CommentsReducer } from "./CommentsReducer.js";

export const rootReducer = combineReducers({
    cars:CarReducers,
    active: carActive,
    likeReducer,
    CommentsReducer
})

export default rootReducer;


