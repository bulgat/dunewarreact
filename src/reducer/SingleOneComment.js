import { Button } from 'react-bootstrap';
import { useState } from "react";
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { commentDelete } from '../reducerAction/indexAction';

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
    const handleInput=(e)=>{
        setCommentText(e.target.value)
    }
    const handleDelete=(e) =>{
    
        dispatch(commentDelete(id));
    }
    const EnterSingleSubmit=()=>{
        console.log("ZZZZZZZZZ EnterSingleSubmit");
    }
    return (
        <div>SSSSSSSSSSS 
            <div onClick={handleDelete} className="comments-item-delete">X</div>
            <input type='text' value={commentText} onChange={handleInput}/>
            <Button onClick={EnterSingleSubmit}>Commit</Button>
        </div>
        )
}
export default SingleOneComment