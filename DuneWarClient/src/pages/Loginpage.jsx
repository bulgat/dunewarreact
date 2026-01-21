import { useLocation,useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { LoginService } from '../services/login.service'
import { useEffect, useState } from 'react'

const Loginpage = () => {
    const _loginService = LoginService();
    const [arsenalList, setArsenalList] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();
    const fromPage = location.state?.from?.pathname || '/'

    useEffect(() => {
        _loginService.getArsenal()
            .then(res => {
                console.log('@@@@@@@@@22 res = ', res);
                setArsenalList(res);
            })
            .catch(err => {
                console.log("90  I    = ", err);
            });
    }, []);


console.log('  location = ', location)
console.log('  fromPage = ',fromPage)

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user,()=>navigate(fromPage,{replace:true}));
    }

    
    return (
        <>
            <div>
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:<input name="username"/>
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
            <div>
                <ul>
                    {arsenalList.map(a => {
                        return <li key={a.id}>{a.name} **********{ a.numCannon}</li>
                    })}
                </ul>
            </div>
        </>)
}
export {Loginpage}