
import {useState} from "react";
import GlobalDune from "../globalDune";
import {NavLink } from "react-router-dom"
import {Container, Card, Form, Button, Row, Spinner} from 'react-bootstrap';
import {TownModal} from  '../modalWindow/TownModal'
import {globalDune} from '../globalDune'
import { useDispatch } from "react-redux";
import { DuneTurnRedux } from "../reducerAction/indexAction";
import {useSelector} from 'react-redux';

const GamePage =(props)=>{
    const [name,setName] = useState("dune");
    const [idIsland,setIdIsland] = useState(0);
	const [money,setMoney] = useState(3500);
    const [urlImage,setUrlImage] = useState("");
    const globalDune = new GlobalDune();
    const dispatch = useDispatch();



    const TurnClick = (e) => {
        // implementation details
        console.log("9991  f ############################# ",props )
        
        
        dispatch(DuneTurnRedux ())

        globalDune.onTurn()
    };
    const commentList=useSelector(
        state=>{
            console.log("999102  attack %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%==   ="  );
            console.log("ZZZZZZZZZZZZ state = ",state);

            const {CommentsReducer} = state
            console.log("999101  attack   inde  _buttonE     =" ,CommentsReducer.comments);
            return CommentsReducer.comments
        }
    )


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
            <Button onClick={TurnClick.bind(this)}>turn</Button>
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

export {GamePage}