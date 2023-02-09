import { 
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    COMMENT_CREATE,
    COMMENT_UPDATE,
     COMMENT_DELETE,
      COMMENT_LOAD,
      DUNE_TURN,DUNE_LEFT_MOVE,DUNE_RIGHT_MOVE } from "../reducerAction/type"

const initionState ={
    duneCommand:{}
}
export const DuneReducer=(state=initionState,action)=>{
    
   
    switch(action.type){

        case DUNE_TURN:
             console.log("||  DuneReducer  ",state," comment = ",action);
            return {...state,
                duneCommand:{Command:action.data}
        }
        case DUNE_LEFT_MOVE:
            return {...state,
                duneCommand:{Command:action.data}
            }
        case DUNE_RIGHT_MOVE:
            return {...state,
                duneCommand:{Command:action.data}
        }
        

        case COMMENT_DELETE:
            return (()=>{
                const {id} =action;
                const {comments} = state;
                const itemIndex = comments.findIndex(res=>res.id===id)
                const nextComments =[...comments.slice(0,itemIndex)
                    ,...comments.slice(itemIndex+1)]


            return {...state,
                comments:nextComments
            
            }
        })()
        default:
            return state
        
    }
    
    return state
}