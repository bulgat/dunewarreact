
import {useState} from "react";
import GlobalDune from "../globalDune";
import {NavLink } from "react-router-dom"
import {Container, Card, Form, Button, Row, Spinner} from 'react-bootstrap';
import {TownModal} from  '../modalWindow/TownModal'
import {globalDune} from '../globalDune'

const HomePage =()=>{
    const [name,setName] = useState("dune");
    const [idIsland,setIdIsland] = useState(0);
	const [money,setMoney] = useState(3500);
    const [urlImage,setUrlImage] = useState("");
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
    
    const setActiveStyle = ({isActive})=>({color:isActive?'var(--color-active)':'white'});

    const [brandVisible,setBrandVisible] = useState(false);

    const ClickTownCard = (Name,IdIsland) =>{
        
        setName(Name);
        setIdIsland(IdIsland);
        let island_ar = window._battlePlanetModel._mapWorldModel._islandDemoMemento.GetIslandArray();
        const island = island_ar.filter(isl => isl.Id == IdIsland)[0];

        setUrlImage(island.Image);
        
        //setBrandVisible(true);
        setBrandVisible(true);
        
    }
    const GoToTown =()=>{
        
        window.location.href = "/town/"+idIsland;
    }

    window.ClickTownCard =ClickTownCard;


    return (
        <>
            <div>dune$</div>
            <NavLink to='/about' style={setActiveStyle}>About</NavLink>
            <canvas id="game" width="800" height="600"></canvas>
            <p>{name} is {money}</p>
            <Button onClick={handleClick.bind(this)}>turn</Button>
            <Button onClick={(e)=>{handleClickkol("kol",e)}}>test turn</Button>
            <Button onClick={(e) =>{nameClick("k",e)} }>-Left</Button>
            <Button onClick={(e) =>{moneyClick(e)}  }>Right-</Button>
            <Button onClick={(event) =>{ClickTownCard(event,0)}  }>push</Button>
            <Button >Start</Button>
            <TownModal show={brandVisible} 
            onHide={()=>setBrandVisible(false)} 
            UrlImage={urlImage}
            name ={name}
            IdIsland ={idIsland}
            GoToTown = {()=>GoToTown()}
            />
            
        </>
    )
}

export {HomePage}