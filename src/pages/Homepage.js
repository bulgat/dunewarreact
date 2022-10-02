
import {useState} from "react";
import GlobalDune from "../globalDune";
import {NavLink } from "react-router-dom"

const HomePage =()=>{
    const [name,setName] = useState("dune")
	const [money,setMoney] = useState(3500)
    const globalDune = new GlobalDune();

    const handleClick = (e) => {
    // implementation details
	console.log(e.name+"7657"+this+"56 e ="+e);
    globalDune.onTurn()
    };
    const handleClickkol = (name,e) => {
        // implementation details
        console.log(name+"-----------6  e == "+e.target);
    globalDune.TestClick() 
    };
    const nameClick = (nam,e) => {
    // implementation details
	console.log(name+"---superdune== "+e.target);
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
            <button onClick={handleClick.bind(this)}>turn</button>
            <button onClick={(e)=>{handleClickkol("kol",e)}}>test</button>
            <button onClick={(e) =>{nameClick("k",e)} }>Left</button>
            <button onClick={(e) =>{moneyClick(e)}  }>Right</button>
            <script type="text/javascript" src="/globalDune.js"></script>
        </>
    )
}
export {HomePage}