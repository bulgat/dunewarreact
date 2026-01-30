
import { useEffect, useState } from 'react'
import './infoLine.component.css'

const InfoLineComponent = ({ item, index, Label }) => {
    const style = true;


    return (

        <li key={item.id} className='li-info'>
            <div className='line-info'>
                <div className='mini-column'>{index})</div>
                <div className={`mini-column ${style ? 'fat' : ''}`} >{Label}</div>
                <div className='mini-column'>id:{item.id}</div>
                     {item.name} **** ****{item.numCannon} </div>
            <a href={'arsenal/' + item.id}>Текст ссылки</a>
        </li>
 
    )
}
export { InfoLineComponent }