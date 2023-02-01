import { INCREMENT,DECREMENT } from "../reducerAction/type"

const initionState ={
    like:0
}
export const likeReducer=(state=initionState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state,
            like:state.like+1}
        case DECREMENT:
            return {...state,
            like:state.like-1}
        default:
            return state
        
    }
    return state
}