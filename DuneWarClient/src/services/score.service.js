import { HOST_SERVER } from '../environment'
import axios from 'axios'
import { InterceptorAxiosService } from './interceptorAxios.service'

const ScoreService = () => {
    const _interceptorAxiosService = InterceptorAxiosService();
    return {
        getScoreList() {
            return axios.get(HOST_SERVER + '/score/GetScoreList')
        },
        getStudentList() {
            return axios.get(HOST_SERVER + '/score/GetStudentList')
        },
        getSecret() {
            return fetch(HOST_SERVER + '/Basa/GetRevealedSecret',
                {
                    method: 'POST',
                    body: 9,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                
        }
    }

}
 
export { ScoreService };