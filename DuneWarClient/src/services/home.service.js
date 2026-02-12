import { HOST_SERVER } from '../environment'
import axios from 'axios'

//перехват 403 ошибки у всех гет запросов, всех axious и редирект на еррор страницу.
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 403) {
            // ƒействие: показать сообщение, перенаправить
            console.error("Ќет прав доступа (403)");
            window.location.href = '/auth-error'; // или использование react-router
        }
        return Promise.reject(error);
    }
);

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
        patchArsenal(id, name, numCannon, productList) {
            console.log('000 item = ', (HOST_SERVER + `/arsenal/PatchArsenal?id={id}&name=${name}&numCannon=${numCannon}`))
            let list = '';
            for (let item of productList) {
                list += '&productList=' + item;
            }


            return fetch(HOST_SERVER + `/Arsenal/PatchArsenal?id=${id}&name=${name}&numCannon=${numCannon}${list}`,
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
        getAuth() {

            return axios.get(HOST_SERVER + '/home/GetAuth')
            /*
            return fetch(HOST_SERVER + `/Home/GetAuth`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
               */ 
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