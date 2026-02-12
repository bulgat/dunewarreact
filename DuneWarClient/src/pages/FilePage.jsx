import { HomeService } from '../services/home.service'
import { useNavigate } from 'react-router-dom';

const FilePage = () => {
    const _homeService = HomeService();
    const navigate = useNavigate();

    const connectForbidden = () => {
        _homeService.getAuth().then(res => {
            /*
            if (res.ok == false) {
                console.log('0000 error = ', res.status)
                if (res.status == 403) {
                    //navigate('/auth-error')
                }
            }
            */
        }).catch(err => {
            console.log('0100 error = ', err)
        });
        
    }
 
    return (
        <>
            <h2>FILE</h2>
            <br></br>
            <a href="./doc/polkan.pdf" download>Скачать pdf</a>
            <br></br>
            <br></br>
            <button onClick={connectForbidden }>Conect Forbidden site</button>
        </>)
}
export { FilePage }