import { useParams } from "react-router-dom"
import {Container, Card, Form, Button, Row, Spinner, Image} from 'react-bootstrap'

const TownPage =()=>{

    const{id}= useParams();

    let island_ar = window._battlePlanetModel._mapWorldModel._islandDemoMemento.GetIslandArray();
    
const island = island_ar.filter(isl => isl.Id == id)[0];
console.log(island_ar,"town id = ",island)
console.log( "  island= ",island.Image )
const urlImage = island.Image ;
    return (
        <>
        <h3>{id}</h3>
        <h5>{island.Name}</h5>
        <br></br>
        <Image width={500} height={500} src={urlImage}/> 
        </>
    )
}
export {TownPage}