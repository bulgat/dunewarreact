
import { useEffect, useState } from 'react'

const InfoLineComponent = ({ item, index, Label }) => {



    return (

        <li key={item.id}>{index}) { Label } id:{item.id}   {item.name} **** ****{item.numCannon} <a href={'arsenal/' + item.id}>Текст ссылки</a> </li>
 
    )
}
export { InfoLineComponent }