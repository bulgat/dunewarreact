import { HOST_SERVER } from '../environment'

const UnitService = () => {
    return {
        getNum() { return 66; },
        getListUnit() {

            return fetch(HOST_SERVER + '/Basa/GetUnitList',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        query: 'repo',
                        variables: {
                            org: 'iiii',
                            repo: 'rrrrr'
                        }
                    }),
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
                
                .catch(err => {
                    console.error('Error fetching data');
                });
        }
    }

}
 
export { UnitService };