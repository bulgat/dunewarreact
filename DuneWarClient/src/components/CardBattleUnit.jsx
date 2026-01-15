import { Card, Image,Container } from 'react-bootstrap';
import {IncreaseModal} from  '../modalWindow/IncreaseModal'
import { useState, useEffect } from 'react';
import './cardBattleUnit.css';

const CardBattleUnit = ({ item, trigger })=>{
    const [brandVisible, setBrandVisible] = useState(false);


    useEffect(() => {
        console.log(" 2  ", item.urlImage, " = ", item)
    }, [trigger])

    const ClickCard = () =>{

        setBrandVisible(true);
    }

    return(
       <>
  
            <Card style={{ width: 800, height: 500 }} className="p-5" onClick={ClickCard}>
                <div className='card-unit'>
                    <div>
                        <div><h5> {item.name}</h5></div>
                        <div>Cost: {item.Cost}</div>
                        <div>Attack: {item.Attack}</div>
                        <div>Defence: {item.Defence}</div>
                        <div>BonusAttack: {item.BonusAttack}</div>
                        <div>BonusDefence: {item.BonusDefence}</div>
                        <div>LongRange: {item.LongRange}</div>
                        <div>StrategySpeed: {item.StrategySpeed}</div>
                        <Image width={300} height={200} src={item.urlImage} /> 
                    </div>
                    <div style={{'visibility':trigger ? 'visible':'hidden' }}><img src='./planet.jpg' width='300px'/></div>
                </div>
            </Card>

        <IncreaseModal show={brandVisible} 
        onHide={()=>setBrandVisible(false)} 
        UrlImage={item.urlImage}
        name ={item.name}
        />
       </> 
    )
}

export {CardBattleUnit}