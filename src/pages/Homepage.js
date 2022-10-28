
import {useState} from "react";
import GlobalDune from "../globalDune";
import {NavLink } from "react-router-dom"
import {Container, Card, Form, Button, Row, Spinner} from 'react-bootstrap'

const HomePage =()=>{
    const [name,setName] = useState("dune")
	const [money,setMoney] = useState(3500)
    const globalDune = new GlobalDune();

    const handleClick = (e) => {
    // implementation details
	
    globalDune.onTurn()
    };
    const handleClickkol = (name,e) => {
        // implementation details
        
    globalDune.TestClick() 
    };
    const nameClick = (nam,e) => {
    // implementation details
	
	//name = "superdune";
	setName("superdune")
    globalDune.SelectHeroLeft() 
    };
    const moneyClick = (e) => {
        setMoney(5001)
        globalDune.SelectHeroRight()
    }
    //const setActiveNameClass = ({isActive})=>isActive?'active-link':'';
    const setActiveStyle = ({isActive})=>({color:isActive?'var(--color-active)':'white'});

    return (
        <>
            <div>dune</div>
            <NavLink to='/about' style={setActiveStyle}>About</NavLink>
            <canvas id="game" width="800" height="600"></canvas>
            <p>{name} is {money}</p>
            <Button onClick={handleClick.bind(this)}>turn</Button>
            <Button onClick={(e)=>{handleClickkol("kol",e)}}>test</Button>
            <Button onClick={(e) =>{nameClick("k",e)} }>Left</Button>
            <Button onClick={(e) =>{moneyClick(e)}  }>Right</Button>
            <script type="text/javascript" src="/globalDune.js"></script>
        </>
    )
}
export {HomePage}