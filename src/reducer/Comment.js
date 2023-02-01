import { useState } from "react";
import { Button } from 'react-bootstrap';
import SingleOneComment from "./SingleOneComment";

function Comment(props){
    
    const [textComment,setTextComment]=useState('')

    const handleInput=(e) =>{
        
        setTextComment(e.target.value)
    }
    /*
    const dispatch = useDispatch();
    const comments=useSelector(
        state=>{
            
            const {commentsReducer} = state
            return commentsReducer.comments
        }
    )
    
    
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        const id = Math.floor(Math.random()*1000000000);
        
        dispatch(commentCreate(textComment,id))
    }

    useEffect(()=>{
        dispatch(commentLoad())
    },[])
*/
    const EnterSubmit=()=>{
        console.log("ZZZZZZZZZZZZ");
    }

    return <div className="card-comments">

        <h6>EEEEEEEEEEEEEEEEEE</h6>
        <input type='text' value={textComment} onChange={handleInput}/>
        <Button onClick={EnterSubmit}>Enter</Button>
<SingleOneComment key={9999} data={6666}/>
    </div>
}

export default Comment