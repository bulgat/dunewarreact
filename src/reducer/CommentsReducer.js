import { INCREMENT,DECREMENT,INPUT_TEXT,COMMENT_CREATE,COMMENT_UPDATE, COMMENT_DELETE, COMMENT_LOAD } from "../reducerAction/type"

const initionState ={
    comments:[]
}
export const CommentsReducer=(state=initionState,action)=>{
    
   // console.log("||  comments = "+action);
    switch(action.type){

        case COMMENT_CREATE:
            return {...state,
            comments:[...state.comments,action.data]
        }
        case COMMENT_LOAD:
            const commentNew = action.data.map(res=>{
                
                return {
                    text:res.body,
                    id:res.id
                }
            
            })
            return {...state,
                comments:commentNew
            }
        case COMMENT_UPDATE:
            const {data} =action;
            const {comments} = state;
            const itemIndex = comments.findIndex(res=>res.id===data.id)
            const nextComments =[...comments.slice(0,itemIndex),data,...comments.slice(itemIndex+1)]


            return {...state,
            comments:nextComments
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