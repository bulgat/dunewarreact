import { useLocation,useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { LoginService } from '../services/login.service'
import { useEffect, useState } from 'react'
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';

const ArsenalPage = () => {
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

 
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user,()=>navigate(fromPage,{replace:true}));
    }

    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        console.log(current, pageSize);
    };

    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

    return (
        <>
            <div>
                <h1>Arsenal</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:<input name="username"/>
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
            <h6>arsenal:</h6>
            <div>
                <ul>
                    {arsenalList.map((a,index) => {
                        return <li key={a.id}>{ index })  id:{ a.id }   {a.name} **** ****{a.numCannon} <a href={'arsenal/'+a.id}>Текст ссылки</a> </li>
                    })}
                </ul>
                <Pagination defaultCurrent={1} total={50} showSizeChanger onShowSizeChange={onShowSizeChange} onChange={onChange} />
            </div>
        </>)
}
export { ArsenalPage }