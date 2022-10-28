import { Card, Image,Container } from 'react-bootstrap';

const CardBattleUnit =({item})=>{
    
const ClickCard = () =>{
    console.log("022 == ",item.UrlImage," = ",item)
    //setBrandVisible(true);
}

    return(
       <>
  
        <Card style={{width:500,height:500}} className="p-5" onClick={ClickCard }>
            <div>Name: {item.Name}</div>
            <div>Cost: {item.Cost}</div>
            <div>Attack: {item.Attack}</div>
            <div>Defence: {item.Defence}</div>
            <div>BonusAttack: {item.BonusAttack}</div>
            <div>BonusDefence: {item.BonusDefence}</div>
            <div>LongRange: {item.LongRange}</div>
            <div>StrategySpeed: {item.StrategySpeed}</div>
            <Image width={300} height={200} src={item.UrlImage}/> 
        </Card>
        {//<CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
        }
       </> 
    )
}

export {CardBattleUnit}