import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth"


const LogOut =()=>{
    const {signout} = useAuth;
    const navigate = useNavigate;
    return (
        <>
            <h2>Log out</h2>
        <button onClick={()=>signout(()=>navigate('/',{replace:true}))}>Log out</button>
        </>
    )
}

export { LogOut }