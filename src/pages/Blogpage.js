import {useEffect,useState} from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { BlogFilter } from '../components/BlogFilter';

const BlogPage =()=>{
    const [posts,SetPost] = useState({})
    const [searchParams,setSearchParams] = useSearchParams();

    const [supQuery,SetSupQuery] = useState('')

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');
    const startForn=latest?80:1;

   
    useEffect(()=>{fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>SetPost(data))},
    []);
    const navigate = useNavigate();
    const goBack = () => navigate('/post',{state:123})
    const goHome = () => navigate('/',{replace:true})
    
    
    console.log("===============")
    
 
    return (
        <>
            <div>blog  = {posts.length} 11111111 </div>
            
<BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>

                <button onClick={goBack}>Go back</button>
                <button onClick={goHome}>Go Home</button>
                <Link to='/post/new' >Add news</Link>
                {console.log(searchParams.get('post')+"-ff["+supQuery+"]f---"+postQuery)}
                {posts.length!==undefined?
                posts.filter(post=>post.title.includes(postQuery) && post.id>=startForn)
                .map(post=>(<Link key={post.id} to={'/post/${post.id}'}>
                    <li>{post.title}</li>
                    </Link>))
                :
                ""
                }

            </>
        )
}
export {BlogPage}
/*
posts.map(post=>(<p>{+post.id}</p>))
*/