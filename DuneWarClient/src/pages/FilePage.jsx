import { HomeService } from '../services/home.service'
import { useNavigate } from 'react-router-dom';
import { IconComponent } from '../components/icon.component'
import './FilePage.css'

const FilePage = () => {
    const _homeService = HomeService();
    const navigate = useNavigate();
    const iconList = [0,1,2,3,4,5,6,7,8,9]

    const connectForbidden = () => {
        _homeService.getAuth().then(res => {

        }).catch(err => {
            console.log('0100 error = ', err)
        });
        
    }
 
    return (
        <>
            <h2>FILE</h2>
            <div className='mini-menu'>
            {iconList.map(a => {
                return <IconComponent number={ a } />
            })}
            </div>
            <br></br>
            <a href="./doc/polkan.pdf" download>Скачать pdf</a>
            <br></br>
            <br></br>
            <button onClick={connectForbidden }>Conect Forbidden site</button>
        </>)
}
export { FilePage }