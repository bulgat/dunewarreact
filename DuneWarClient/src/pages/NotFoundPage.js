import {NavLink, Link } from "react-router-dom"

const NotFoundPage =()=>{
    return (<div><h2>not Not Found Page </h2>
        <img src='./house.jpg' />
    <br></br>
        <Link to='/'>Home</Link></div>)
}
export {NotFoundPage}