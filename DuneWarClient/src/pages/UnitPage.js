import { Link } from "react-router-dom"
import { CardBattleUnit } from "../components/CardBattleUnit";
import { HOST_SERVER } from '../environment'
import { useState } from 'react'

const UnitPage = () => {
    const [getBasaPurchaseUnitScience, setBasaPurchaseUnitScience] = useState([]);

    const getListUnit = () => {

        fetch(HOST_SERVER + '/Basa/GetUnitList',
            {
                method: 'POST',
                body: JSON.stringify({
                    query: 'repo',
                    variables: {
                        org: 'iiii',
                        repo: 'rrrrr'
                    }
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setBasaPurchaseUnitScience(data);
                console.log("end load list")
            })
            .catch(err => {
                console.error('Error fetching data');
            });
    }
    getListUnit();

    return (
        <>
            <div><h3>Units</h3></div>

            <ul>
                {getBasaPurchaseUnitScience.map(
                    item => <li key={item.IdImage} ><CardBattleUnit item={item} /> </li>)}
            </ul>
            <Link to='/'>Home</Link>
            {
            }
        </>
    )
}
export { UnitPage }