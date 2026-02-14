import { useLocation,useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { LoginService } from '../services/login.service'
import { useEffect, useState } from 'react'
import { Input } from 'antd';

const LoginPage = () => {
    const _loginService = LoginService();

    const location = useLocation();
    const {signin} = useAuth();
    const fromPage = location.state?.from?.pathname || '/'
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    /*
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user,()=>navigate(fromPage,{replace:true}));
    }
    */
    const handleClick = () => {

        _loginService.LoginUser(loginName, password).then(a => {
            console.log('start pass = ', a)
            _loginService.GetPassword().then(b => {
                console.log('pass = ',b)
            })
        });
    }

    const handleToken = () => {
        _loginService.GetToken().then(b => {
            console.log('pass = ', b.data.access_token);

            setToken(b.data.access_token);

        })
    }
    const handleSecret = () => {
        _loginService.GetPassword(token).then(b => {
            console.log('SECRET  pass = ', b)
        })
    }

    return (
        <>
            <div>
                <h1>Login Page</h1>

                    <label>
                        <Input placeholder="login" onChange={(e) => {
                            setLoginName(e.target.value);
                    }} />
                    <br></br>
                    <Input placeholder="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                    </label>
                    <br></br>
                    <button onClick={ handleClick }>Login</button>
                <br></br>
                <br></br>
                <button onClick={handleToken}>GetToken</button>
                <br></br>
                {token}
                <br></br>
                <br></br>
                <button onClick={handleSecret}>GetSecret</button>
            </div>
        </>)
}
export {LoginPage}