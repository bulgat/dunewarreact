import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth"


const Createpost =()=>{
    const {signout} = useAuth;
    const navigate = useNavigate;
    return (
        <>
        <h2>CreatePost</h2>
        <button onClick={()=>signout(()=>navigate('/',{replace:true}))}>Log out</button>
        </>
    )
}

export {Createpost}