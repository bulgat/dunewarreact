import {NavLink, Link } from "react-router-dom"

const AuthErrorPage =()=>{
    return (<div><h2>Error Auth </h2>
    <h3>У вас нет прав</h3>
        <img src='./soldier.jpg' />
    <br></br>
        <Link to='/'>Home</Link></div>)
}
export { AuthErrorPage }