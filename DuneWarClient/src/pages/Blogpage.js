import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { BlogFilter } from '../components/BlogFilter';
import './Blogpage.css'
import { HomeService } from '../services/home.service'
import { ProductListComponent } from '../components/productList.component'
import { DatePicker, Space } from 'antd';

const BlogPage = () => {
    const [posts, SetPost] = useState({})
    const [searchParams, setSearchParams] = useSearchParams();
    const [supQuery, SetSupQuery] = useState('')
    const _homeService = HomeService();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');
    const startForn = latest ? 80 : 1;


    useEffect(() => {

        _homeService.getProductList(true)
            .then(res => {

                return res.json()
            })
            .then(data => {
                console.log("0001 = === ====", data)
                SetPost(data)
            })
    },
        []);
    const navigate = useNavigate();
    const goBack = () => navigate('/post', { state: 123 })
    const goHome = () => navigate('/', { replace: true })

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
  


    return (
        <>
            <div>blog  = {posts.length}  </div>
            <br></br>
            <br></br>
            <DatePicker onChange={onChange} style={{ width: '50%' }} />
            <br></br>
            <br></br>
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
            <br></br>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go Home</button>
            <br></br>
            <Link to='/post/new' >Add news</Link>
            {console.log(searchParams.get('post') + "-ff[" + supQuery + "]f---" + postQuery)}
            <br />
            <br />
            <ProductListComponent productList={ posts } />

            

        </>
    )
}
export { BlogPage }
