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
    ERROR_DISPLAY_OFF,
    DUNE_TURN
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
export function CommentDelete(id){
    
    return{
        type:COMMENT_DELETE,
        id:id
    }
}
export function CommentUpdate(text,id){
   
    return{
        type:COMMENT_UPDATE,
        data:{text,id}
    }
}
export function CommentCreate(text,id){

    return{
        type:COMMENT_CREATE,
        data:{text,id}
    }
}
export function DuneTurnRedux(){
    console.log("  = ZZZZZZZZZ DUNE_TURN = " );
    return{
       type:DUNE_TURN,
       data:"99999"
    }
}


export function loaderOn(){
    
    return{
        type:LOADER_DISPLAY_ON
    }
}
export function loaderOff(){
    
    return{
        type:LOADER_DISPLAY_OFF
    }
}
export function errorOn(text){
    return dispatch => {dispatch({
        type:ERROR_DISPLAY_ON,
        text
    });
    setTimeout(()=>dispatch(errorOff()),2000);
    
    /*
    return{
        type:ERROR_DISPLAY_ON,
        text
    }
    */
    }
}
export function errorOff(){
    
    return{
        type:ERROR_DISPLAY_OFF
    }
}

export function CommentLoad(){

    
    return async dispatch=>{
    
        try{

            dispatch(loaderOn());
            const response = await fetch('http://localhost:4000/api/comment/all?getall');
            const jsonData=await response.json();
            dispatch({
                type:COMMENT_LOAD,
                data:jsonData
            })    
            

            } catch(err){

                dispatch(errorOn('error API'))
                dispatch(loaderOff());
            }
            
    }

}
