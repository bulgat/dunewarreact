import { Route,Routes,Link,Outlet } from "react-router-dom"
import { Card, Image,Container } from 'react-bootstrap';
//import DuneDefeat from '../../public/imageDune/duneDefeat.jpg'

const AboutPage =()=>{
    return (
        <>
   <div className="backgroundImage">tretertert
    <Container className="d-flex justify-content-center" style={{height:window.innerHeight-54}}>
 
         <ul>
            <li>Dune </li>
            <li>Походовая стратегия</li>
            <li>
       
        <Card style={{width:600}} className="p-5">
            <ul>
                <li><Link to='contacts'>Contact</Link></li>
                <li><Link to='team'>team</Link></li>
            </ul>
        </Card>
            </li>
            <li>
       
     
       <Image width={600} height={400} src={'/imageDune/startGame.jpg'}/> 
    
       </li>
       </ul>
       
    </Container>
    </div>
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