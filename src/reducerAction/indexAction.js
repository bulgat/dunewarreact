import { INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    COMMENT_CREATE,
    COMMENT_UPDATE,
    COMMENT_DELETE,
    COMMENT_LOAD,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF
 } from "./type";

export const selectAction=(car)=>{
    //alert("Now car is"+car.name);
    return {
        type:"CAR_SELECTED",
        payload:car
    }
} 
export function incrementLikes(){
    return{type:INCREMENT}
}
export function decrementLikes(){
    return{type:DECREMENT}
}
export function commentDelete(id){
    
    return{
        type:COMMENT_DELETE,
        id:id
    }
}