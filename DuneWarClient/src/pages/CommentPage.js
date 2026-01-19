import { HOST_SERVER } from '../environment'
import { useState } from 'react'
import '../pages/CommentPage.css'
import { HomeService } from '../services/home.service'

const CommentPage = () => {
    const _unitService = HomeService();
    const [secret, setSecret] = useState(0);
    const [product, setProduct] = useState('');
    const [arsenal, setArsenal] = useState('');

    console.log("mat  = ", localStorage['product'])

    const getListUnit = () => {

        fetch(HOST_SERVER + '/Basa/GetRevealedSecret',
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
            .then(data => {

 
                setSecret(data);
            })
            .catch(err => {
                console.error('Error fetching data');
            });
    }
    getListUnit();

    const handleAddProduct = () => {

        _unitService.addProduct(product);
    }

    const handleAddArsenal = () => {
 
        _unitService.addArsenal(arsenal,9);
    }

    const submitForm = (formAction) => {
        localStorage['product'] = formAction.get('product');
//localStorage['product'] = formAction.product.value;
        //formAction.stopPropagation();
        console.log("90  Inc    = ", formAction.product.value);
 
    }

    console.log("apple".localeCompare("banana")); 
        console.log("banana".localeCompare("apple"));  
            console.log("apple".localeCompare("apple")); 
 

    return (
        <>
            <h5>Comment</h5>
            <form autoComplete='off' action={submitForm}>
                <input type='text' name='product' placeholder='product' onChange={(e) => setProduct(e.target.value)} />
                <button className="btn-comment" onClick={handleAddProduct}>Add Product</button>
                <br />
                <br />
                <input type='text' name='arsenal' placeholder='arsenal' onChange={(e) => setArsenal(e.target.value)} />
                <button className="btn-comment" onClick={handleAddArsenal}>Add Arsenal</button>
                <br/>
                <button type='submit'>Submit</button>
            </form>
          Secret revealed:  {secret}
        </>
    )
}
export {CommentPage}