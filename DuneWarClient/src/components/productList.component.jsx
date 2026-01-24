import { HomeService } from '../services/home.service'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import './productList.component.css'

const ProductListComponent = ({ productList }) => {
    const _homeService = HomeService();

    const handleDelete = (id) => {

        _homeService.deleteProduct(id)
            .then(res => {

                if (res.ok) {

                    return res.text();
                }
                return res.text();

            }).then(result => {
                console.log("   ====", result)
                alert('Успешно удалено ' + result)
            });
    }


    return (
        <>
 
            {productList.length !== undefined ?
                productList.map(post => (<li><div className='line-info'><Link key={post.id} to={`/blog/${post.id}`}>
                        {post.id} == {post.name}  <a href={'blog/' + post.id}> ссылкa</a> 
                </Link>
                    <button onClick={() => handleDelete(post.id)}>delete</button>
                </div></li>))
                :
                ""
            }
        </>
    )
}
export { ProductListComponent }