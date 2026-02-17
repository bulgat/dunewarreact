import { HomeService } from '../services/home.service'
import { useEffect, useState } from 'react'
import './icon.component.css'

const IconComponent = ({ number }) => {
    
    //  </div>
    return <div className='margin-icon'>
        <img src={`./imageDune/icon/dune${number}.png`} />
    </div>
}
export { IconComponent }