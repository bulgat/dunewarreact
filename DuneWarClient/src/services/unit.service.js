import { HOST_SERVER } from '../environment'
import { InterceptorAxiosService } from './interceptorAxios.service'
import axios from 'axios'

const UnitService = () => {
    const _interceptorAxiosService = InterceptorAxiosService();
    return {
        getListUnit() {
            return axios.post(HOST_SERVER + '/Basa/GetUnitList')
            
        }
    }

}
 
export { UnitService };