import { Link } from "react-router-dom"
import {CustomLink } from "react"

const ButtonPage =()=>{
    return (
        <>
    <div>Unit collection</div>
    <div>Unit collection</div>

    <Link to='/'>Home</Link>
    <CustomLink to='/blog'  >Blog</CustomLink>
    </>
    )
}
export {ButtonPage}