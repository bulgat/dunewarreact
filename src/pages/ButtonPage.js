import { Link } from "react-router-dom"
import {CustomLink } from "react"

const ButtonPage =()=>{
    return (
        <>
    <div>button 444444444444444</div>
    <Link to='/'>Home</Link>
    <CustomLink to='/blog'  >Blog</CustomLink>
    </>
    )
}
export {ButtonPage}