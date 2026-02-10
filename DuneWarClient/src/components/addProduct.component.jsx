import { ProductService } from '../services/product.service'
import { useEffect, useState } from 'react'

const AddproductComponent = ({ arsenalId }) => {
    const _productService = ProductService();
    const [product, setProduct] = useState('');

    const handleAddProduct = () => {
        console.log(product, "90  I    = ", arsenalId);
        if (arsenalId != undefined) {
            _productService.addProduct(product, arsenalId)
                .then(a => {
                    if (a.ok) {
                        alert('product save');
                    }
                })
                .catch(err => {

                });
        } else {
            _productService.insertProduct(product)
                .then(a => {
                    if (a.ok) {
                        alert('product save');
                    }
                })
                .catch(err => {

                });
        }
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