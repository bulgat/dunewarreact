import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth"
import { LoginService } from '../services/login.service'

const LogOutPage = () => {
    const _loginService = LoginService();
    const {signout} = useAuth;
    const navigate = useNavigate;

    const clickLogOut = () => {
        _loginService.LoginOut();
    }

    return (
        <>
            <h2>Log out</h2>
            <button onClick={clickLogOut}>Log out</button>
        </>
    )
}

export { LogOutPage }