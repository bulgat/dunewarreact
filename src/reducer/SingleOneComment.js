import { Button } from 'react-bootstrap';
import { useState } from "react";
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { CommentDelete } from '../reducerAction/indexAction';
import { CommentUpdate } from '../reducerAction/indexAction';

function SingleOneComment({data}){
    /*
    if(data==undefined){
        data=999;
    }
    */
    const {text,id} = data
    const [commentText,setCommentText] = useState('')

    const dispatch = useDispatch();

    useEffect(()=>{
        if(text){
            setCommentText(text)
        }
    },[text])
    const TextInput=(e)=>{
        setCommentText(e.target.value)
    }
    const TextUpdate =(e) =>{
        e.preventDefault();
        
        
        dispatch(CommentUpdate(commentText,id));
       
    }
    const TextDelete=(e) =>{
    
        dispatch(CommentDelete(id));
    }
    const EnterSingleSubmit=()=>{
        console.log("ZZZZZZZZZ EnterSingleSubmit");
    }
    return (
        <div>SSSSSSSSSSS 
            <div onClick={TextDelete} className="comments-item-delete">X</div>
            <input type='text' value={commentText} onChange={TextInput}/>
            <Button onClick={EnterSingleSubmit}>Commit</Button>
        </div>
        )
}
export default SingleOneComment