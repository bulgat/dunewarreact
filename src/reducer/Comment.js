import { useState } from "react";
import { Button } from 'react-bootstrap';
import SingleOneComment from "./SingleOneComment";
import {useSelector} from 'react-redux'
import { CommentsReducer } from "./CommentsReducer";
import { useDispatch } from "react-redux";
import { CommentCreate } from "../reducerAction/indexAction";
import { useEffect } from "react";
import { CommentLoad } from "../reducerAction/indexAction";

function Comment(props){
    
    const [textComment,setTextComment]=useState('')
    const dispatch = useDispatch();

    const handleInput=(e) =>{
        
        setTextComment(e.target.value)
    }
    
    
    
    
    const commentList=useSelector(
        state=>{
            console.log("ZZZZZZZZZZZZ state = ",state);
            const {CommentsReducer} = state
            return CommentsReducer.comments
        }
    )
    
   
    
    
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        const id = Math.floor(Math.random()*1000000000);
        
        dispatch(CommentCreate(textComment,id))
    }

    useEffect(()=>{
        //dispatch(CommentLoad())
    },[])

    const EnterSubmit=(e)=>{
        
        e.preventDefault()
        const id = Math.floor(Math.random()*1000000000);
        
        dispatch(CommentCreate(textComment,id))
    }

    return <div className="card-comments">

        <h6>EEEEEEEEEEEEEEE </h6>
        <input type='text' value={textComment} onChange={handleInput}/>
        <Button onClick={EnterSubmit}>Enter</Button>
        {!!commentList.length && commentList.map(res=><SingleOneComment key={res.id} data={res}/>)}
    </div>
}

export default Comment