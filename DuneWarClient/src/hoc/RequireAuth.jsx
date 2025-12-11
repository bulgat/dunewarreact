import { useLocation,Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const RequireAuth =({children})=>{
    const location = useLocation;
    const {user} = useAuth();

    //const auth = false;
    if(!user){
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }
    return children
}
export {RequireAuth}