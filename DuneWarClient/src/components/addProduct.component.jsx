import { HomeService } from '../services/home.service'
import { useEffect, useState } from 'react'

const AddproductComponent = () => {
    const _unitService = HomeService();
    const [product, setProduct] = useState('');

    const handleAddProduct = () => {

        _unitService.addProduct(product)
            .then(a => {
                if (a.ok) {
                    alert('product save');
                }
            })
            .catch(err => {
            console.log("90  I    = ", err);
        });
    }

    return (
        <>
            <h4>add product**</h4>
            <input type='text' name='product' placeholder='product' onChange={(e) => setProduct(e.target.value)} />
            <button className="btn-comment" onClick={handleAddProduct}>Add Product</button>
            <br />
        </>
    )
}
export { AddproductComponent }