import { useState , useEffect} from "react"
import {Container, Card, Form, Button, Row, Spinner} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'

const CommentRedux  =()=>{
    const [textComment,setTextComment]=useState('')

    const handleInput=(e) =>{
        console.log("0225 === DD = "+e.target.value )
        setTextComment(e.target.value)
    }
    const handleSave=(e) =>{
        
        e.preventDefault()
        const id = Math.floor(Math.random()*1000000000);
        
        console.log(id+"  333   map_ar_ar   =" ,e)
        //dispatch(commentCreate(textComment,id))
    }
    return  (
        <>
        <input type='text' value={textComment} onChange={handleInput}/>
        <Button   variant={"outline-success"} onClick={handleSave} >Сохранить</Button>
        </>
    )
}
export {CommentRedux}