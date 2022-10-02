import { useParams } from "react-router-dom"

const SinglePage =()=>{
    console.log(useParams())
    const{id}= useParams()
    console.log(" id = "+id)

    return (<div>  Single PAGE about {id}</div>)
}
export {SinglePage}