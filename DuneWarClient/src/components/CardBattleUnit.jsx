import { Card, Image,Container } from 'react-bootstrap';
import {IncreaseModal} from  '../modalWindow/IncreaseModal'
import { useState } from 'react';

const CardBattleUnit =({item})=>{
    const [brandVisible,setBrandVisible] = useState(false);
    const ClickCard = () =>{
        
        console.log("022 == ",item.UrlImage," = ",item)
        //setBrandVisible(true);
        setBrandVisible(true);
    }

    return(
       <>
  
        <Card style={{width:500,height:500}} className="p-5" onClick={ClickCard }>
            <div><h5> {item.Name}</h5></div>
            <div>Cost: {item.Cost}</div>
            <div>Attack: {item.Attack}</div>
            <div>Defence: {item.Defence}</div>
            <div>BonusAttack: {item.BonusAttack}</div>
            <div>BonusDefence: {item.BonusDefence}</div>
            <div>LongRange: {item.LongRange}</div>
            <div>StrategySpeed: {item.StrategySpeed}</div>
            <Image width={300} height={200} src={item.UrlImage}/> 
        </Card>

        <IncreaseModal show={brandVisible} 
        onHide={()=>setBrandVisible(false)} 
        UrlImage={item.UrlImage}
        name ={item.Name}
        />
       </> 
    )
}

export {CardBattleUnit}