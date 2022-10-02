import { Route,Routes,Link,Outlet } from "react-router-dom"

const AboutPage =()=>{
    return (
        <>
    <div>about 444  4444444</div>
    <ul>
        <li><Link to='contacts'>Contact</Link></li>
        <li><Link to='team'>team</Link></li>
    </ul>
    {/*
    <Routes>
        <Route path="contacts" element ={<p>contact</p>}/>
        <Route path="team" element ={<><h2>super</h2><p>team</p></>}/>
    </Routes>
    */}
    <Outlet/>
    </>
    )
}
export {AboutPage}