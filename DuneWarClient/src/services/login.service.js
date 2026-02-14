import { HOST_SERVER } from '../environment'
import axios from 'axios'
import { InterceptorAxiosService } from './interceptorAxios.service'

const LoginService = () => {
    const _interceptorAxiosService = InterceptorAxiosService();
    return {
        LoginUser(name, password) {
            return axios.get(HOST_SERVER + `/login/LoginUser?name=${name}&password=${password}`)
        },
        LoginOut() {
            return axios.get(HOST_SERVER + `/login/LoginOut`)
        },
        GetPassword(token) {
            return axios.get(HOST_SERVER + `/login/GetPassword`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',             	
                    "Authorization": "Bearer " + token
                }
            })
        },
        GetToken() {
            return axios.get(HOST_SERVER + `/login/GetToken`)
        }
    }

}
 
export { LoginService };