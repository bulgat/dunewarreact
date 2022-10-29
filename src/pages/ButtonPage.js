import { Link } from "react-router-dom"
import {CustomLink } from "react"
import { CardBattleUnit } from "../components/CardBattleUnit";

const ButtonPage =()=>{
   console.log( " ^^ ^^^^ ^^^^  i = ",window._battlePlanetModel.GetBasaPurchaseUnitScience());
    return (
        <>
    <div><h3>Units</h3></div>

    <ul>
    {window._battlePlanetModel.GetBasaPurchaseUnitScience().map(
            item => <li key={item.IdImage} >''<CardBattleUnit item={item}/> </li>)}
    </ul>
    <Link to='/'>Home</Link>
    {//<CustomLink to='/blog'  >Blog</CustomLink>
    }
    </>
    )
}
export {ButtonPage}