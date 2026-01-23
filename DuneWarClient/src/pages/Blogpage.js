import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { BlogFilter } from '../components/BlogFilter';
import './Blogpage.css'
import { HomeService } from '../services/home.service'

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

    const handleDelete = (id)=> {

        _homeService.deleteProduct(id)
        .then(res => {

            if (res.ok) {

                return res.text();
            } 
            return res.text();
            
        }).then(result => {
            console.log("   ====", result)
            alert('Успешно удалено ' + result)
        });
    }
  


    return (
        <>
            <div>blog  = {posts.length}  </div>

            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />

            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go Home</button>
            <br></br>
            <Link to='/post/new' >Add news</Link>
            {console.log(searchParams.get('post') + "-ff[" + supQuery + "]f---" + postQuery)}
            <br />
            <br />
            <h5>Product:</h5>
    
            {posts.length !== undefined ?
                posts.filter(post => post.name.includes(postQuery) && post.id >= startForn)
                    .map(post => (<div><Link key={post.id} to={'/post/${post.id}'}>
                        <li>{post.id} == {post.name}  <a href={'post/'+post.id}> ссылкa</a> </li>
                    </Link><button onClick={()=>handleDelete(post.id) }>delete</button></div>))
                :
                ""
            }

        </>
    )
}
export { BlogPage }
