import { HOST_SERVER } from '../environment'
import axios from 'axios'

const ProductService = () => {
    return {
        addProduct(name, arsenalId) {
            return fetch(HOST_SERVER + `/Product/AddProduct?name=${name}&arsenalId=${arsenalId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                    }
                })
        },
        insertProduct(name) {
            console.log('Insert === ', (HOST_SERVER + `/Product/InsertProduct?name=${name}`))
            return fetch(HOST_SERVER + `/Product/InsertProduct?name=${name}`,
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
        
    }

}
 
export { ProductService };