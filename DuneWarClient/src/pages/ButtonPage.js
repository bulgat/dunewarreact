import { Link } from "react-router-dom"
import { CustomLink } from "react"
import { CardBattleUnit } from "../components/CardBattleUnit";
import { HOST_SERVER } from '../environment'

const ButtonPage = () => {


    const getListUnit = () => {

        fetch(HOST_SERVER + '/home/getversion')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log(" ^^ ^  ^ i = ", data);
                //setVersion(data);
            })
            .catch(err => {
                console.error('Error fetching data');
            });
    }

    return (
        <>
            <div><h3>Units</h3></div>

            <ul>
                {window._battlePlanetModel.GetBasaPurchaseUnitScience().map(
                    item => <li key={item.IdImage} >''<CardBattleUnit item={item} /> </li>)}
            </ul>
            <Link to='/'>Home</Link>
            {
            }
        </>
    )
}
export { ButtonPage }