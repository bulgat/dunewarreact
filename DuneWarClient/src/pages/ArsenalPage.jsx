import { useLocation,useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { LoginService } from '../services/login.service'
import { HomeService } from '../services/home.service'
import { ArsenalService } from '../services/arsenal.service'
import { useEffect, useState } from 'react'
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import { AddArsenalComponent } from '../components/addArsenal.component'
import { InfoLineComponent } from '../components/infoLine.component'
import { LabelComponent } from '../components/label.component'

const ArsenalPage = () => {
    const _loginService = LoginService();
    const _homeService = HomeService();
    const _arsenalService = ArsenalService();
    const [arsenalList, setArsenalList] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();
    const fromPage = location.state?.from?.pathname || '/'
    const [allProductList, setAllProductList] = useState([]);

    useEffect(() => {
        _arsenalService.getArsenal(page, size)
            .then(res => {

                setArsenalList(res);
            })
            .catch(err => {
                console.log("90   getArsenal  = ", err);
            });
        _homeService.getProductList(false).then(res => {
    
            return res.json();
        }).then(arr => {
            console.log('@@@@ res = ', arr);
            setAllProductList(arr);
        })

    }, [page,size]);

 
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user,()=>navigate(fromPage,{replace:true}));
    }

    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        console.log(current, pageSize);
        setSize(pageSize);
    };

    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        console.log('Page: ', pageNumber);
        setPage(pageNumber);
    };

    const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        if (type === 'page') {
            return <a>{originalElement}@</a>
        }

        return originalElement;
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
                <AddArsenalComponent />
                
            </div>
            <h6>arsenal:</h6>
            <div>
                <ul>
                    {arsenalList.map((a, index) => {
                        console.log('=========', a.id)
                        return <InfoLineComponent key={a.id } item={a} index={index} allProductList={allProductList}
                            Label={<LabelComponent name={a.name} />} />
                        
                    })}
                </ul>
                <Pagination defaultCurrent={1} total={50} defaultPageSize={20}
                    showSizeChanger onShowSizeChange={onShowSizeChange}
                    pageSizeOptions={[10, 20, 50, 100, 200]} size='small'  
                    itemRender={itemRender} showLessItems showTitle 
                    onChange={onChange} />
            </div>
        </>)
}
export { ArsenalPage }