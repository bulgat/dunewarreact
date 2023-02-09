
import {useState} from "react";
import GlobalDune from "../globalDune";
import {NavLink } from "react-router-dom"
import {Container, Card, Form, Button, Row, Spinner} from 'react-bootstrap';
import {TownModal} from  '../modalWindow/TownModal'
import {globalDune} from '../globalDune'
import { useDispatch } from "react-redux";
import { DuneTurnRedux } from "../reducerAction/indexAction";
import {useSelector} from 'react-redux';
import { DuneLeftMove } from "../reducerAction/indexAction";
import { DuneRightMove } from "../reducerAction/indexAction";
import { DUNE_LEFT_MOVE,DUNE_RIGHT_MOVE,DUNE_TURN } from "../reducerAction/type";

const GamePage =(props)=>{
    const [name,setName] = useState("dune");
    const [idIsland,setIdIsland] = useState(0);
	const [money,setMoney] = useState(3500);
    const [urlImage,setUrlImage] = useState("");
    const globalDune = new GlobalDune();
    const dispatch = useDispatch();



    const TurnClick = (e) => {
        console.log("9991  f ############################# ",props )
        
        
        dispatch(DuneTurnRedux ())

        //globalDune.onTurn()
    };
    const turnDune=useSelector(
        state=>{
            console.log("999102  attack %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%==   =" ,state );
           

            const {DuneReducer} = state;
            console.log("attack   tt     =" ,DuneReducer.duneCommand.Command);
            

            switch(DuneReducer.duneCommand.Command){

                case DUNE_TURN:
                     console.log("0001 ||  DuneReducer  ",DuneReducer.duneCommand.Command);
                    globalDune.onTurn();
                    return
                case DUNE_LEFT_MOVE:
                    console.log("0002 ||  DuneReducer  ",DuneReducer.duneCommand.Command);
                    globalDune.SelectHeroLeft();
                     console.log("ZZZZZZZZZZ state = ");
                     return
                case DUNE_RIGHT_MOVE:
                    console.log("0003 ||  DuneReducer  ",DuneReducer.duneCommand.Command);
                    globalDune.SelectHeroRight();
                    return
                default:
                    console.log("0004 ||  DuneReducer  [",DuneReducer.duneCommand.Command,"]");
            }
            

            return DuneReducer.duneCommand
        }
    )


    const TestClick = (name,e) => {
        globalDune.TestClick() 
    };
    const LeftClick = (nam,e) => {

        setName("superdune")
        dispatch(DuneLeftMove())
        //globalDune.SelectHeroLeft() 

    };
    const RightClick = (e) => {
        setMoney(5001)
        dispatch(DuneRightMove())
        //globalDune.SelectHeroRight()
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
            <Button onClick={(e)=>{TestClick("kol",e)}}>test turn</Button>
            <Button onClick={(e) =>{LeftClick("k",e)} }>-Left</Button>
            <Button onClick={(e) =>{RightClick(e)}  }>Right-</Button>
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