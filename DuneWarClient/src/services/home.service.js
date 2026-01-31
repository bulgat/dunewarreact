import { HOST_SERVER } from '../environment'
import axios from 'axios'

const HomeService = () => {
    return {
        addProduct(name, arsenalId) {
            return fetch(HOST_SERVER + `/Home/AddProduct?name=${name}&arsenalId=${arsenalId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
        },
        getProductList(sort) {
            return fetch(HOST_SERVER + `/Home/getProductClassic?sort=${sort}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
        },
        getProduct(id) {
            return fetch(HOST_SERVER + `/Home/getProduct?id=${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
        },

        deleteProduct(id) {
            return fetch(HOST_SERVER + `/Home/deleteProduct?id=${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
        },
        patchArsenal(name, numCannon) {
            return fetch(HOST_SERVER + `/Home/PatchArsenal?name=${name}&numCannon=${numCannon}`,
                {
                    method: 'PATCH',
                    body: JSON.stringify({
                        query: 'repo',
                        variables: {
                        }
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
        },
        addArsenal(name, numCannon) {
            return fetch(HOST_SERVER + `/Home/addArsenal?name=${name}&numCannon=${numCannon}`,
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        query: 'repo',
                        variables: {
                        }
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
        },
        GetArsenalWithId(id) {
            return fetch(HOST_SERVER + `/Home/GetArsenalWithId?id=${id}`,
                {
                    method: 'Get',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
        },
        fetchVersion() {
                return fetch(HOST_SERVER + '/home/getversion')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                //.then(data => {
                //    setVersion(data);
                //})
                .catch(err => {
                    console.error('Error fetching data');
                });
        },
        fetchStatus() {
            return axios.post(HOST_SERVER + '/home/getstatus')



            /*
            return fetch(HOST_SERVER + '/home/getstatus', {
                method: 'POST', // Specify the method
                headers: {
                    'Content-Type': 'application/json', // Inform the server about the data type
                }
            })
                .then(response => response.text()) // Parse the JSON response
                .catch(error => {
                    console.error('Error:', error); // Handle errors
                });
                */
        }
    }

}
 
export { HomeService };