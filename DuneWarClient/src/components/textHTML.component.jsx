import { HomeService } from '../services/home.service'
import { useEffect, useState } from 'react'

const TextHTMLComponent = ({ version }) => {
    
    //  </div>
    return <div dangerouslySetInnerHTML={{ __html: version }}></div>
}
export { TextHTMLComponent }