import { Link } from "react-router-dom"
import { CardBattleUnit } from "../components/CardBattleUnit";
import { HOST_SERVER } from '../environment'
import { useState, useEffect, useRef } from 'react'
import { UnitService } from '../services/unit.service'

const UnitPage = () => {
    const [basaPurchaseUnitScience, setBasaPurchaseUnitScience] = useState([]);
    const ref = useRef();
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {

        UnitService().getListUnit().then(data => {
            setBasaPurchaseUnitScience(data.data);
            
        })

    },[])


    const handlerLight = () => {

        setTrigger(trigger == false);
    }

    return (
        <>
            <div><h3>Units</h3></div>
            <button onClick={handlerLight}>Показать</button>
            <br />
            <br />
            <ul>
                {basaPurchaseUnitScience?.map(
                    item => <li key={item.IdImage} ><CardBattleUnit item={item} trigger={trigger} /> </li>)}
            </ul>
            <Link to='/'>Home</Link>
            {
            }
        </>
    )
}
export { UnitPage }