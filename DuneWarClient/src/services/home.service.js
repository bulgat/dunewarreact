import { HOST_SERVER } from '../environment'

const HomeService = () => {
    return {
        addProduct(name) {
            return fetch(HOST_SERVER + `/Home/AddProduct?name=${name}`,
                {
                    method: 'PUT',
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
        }
    }

}
 
export { HomeService };