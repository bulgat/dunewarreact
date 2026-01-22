import { useParams } from "react-router-dom"

const PostPage =()=>{
    console.log(useParams())
    const{id}= useParams()
    console.log(" id = "+id)

    return (<div>  Single PAGE about {id}</div>)
}
export {PostPage}