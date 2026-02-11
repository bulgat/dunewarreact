import { Link } from "react-router-dom"
import { CardBattleUnit } from "../components/CardBattleUnit";
import { HOST_SERVER } from '../environment'
import { useState, useEffect, useRef } from 'react'
import { UnitService } from '../services/unit.service'

const UnitPage = () => {
    const [getBasaPurchaseUnitScience, setBasaPurchaseUnitScience] = useState([]);
    const ref = useRef();
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        //getListUnit();

        UnitService().getListUnit().then(data => {
            setBasaPurchaseUnitScience(data);
            console.log("end load list")
        })

    },[])

    console.log("SV ", UnitService().getNum()  );
    console.log("0111 ????????  endHero =", UnitService().getListUnit())


    /*
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
    */

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
                {getBasaPurchaseUnitScience?.map(
                    item => <li key={item.IdImage} ><CardBattleUnit item={item} trigger={trigger} /> </li>)}
            </ul>
            <Link to='/'>Home</Link>
            {
            }
        </>
    )
}
export { UnitPage }