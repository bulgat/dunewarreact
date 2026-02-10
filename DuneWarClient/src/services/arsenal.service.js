import { HOST_SERVER } from '../environment'
import axios from 'axios'

const ArsenalService = () => {
    return {
        getArsenal(page, size) {
            return fetch(HOST_SERVER + `/Home/getArsenal?page=${page}&size=${size}&sort=${true}`,
                {
                    method: 'Get',
                    /*
                    body: JSON.stringify({
                        query: 'repo',
                        variables: {
                        }
                    }),*/
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                }).then(a => {
                    return a.json();
                })
        }
    }

}
 export { ArsenalService }