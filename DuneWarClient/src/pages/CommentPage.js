import { HOST_SERVER } from '../environment'
import { useState } from 'react'
import '../pages/CommentPage.css'
import { HomeService } from '../services/home.service'
import { ActionModal } from '../modalWindow/ActionModal'
import { AddproductComponent } from '../components/addProduct.component'
import { AddArsenalComponent } from '../components/addArsenal.component'

const CommentPage = () => {
    const _unitService = HomeService();
    const [secret, setSecret] = useState(0);
    const [visibleModal, setVisibleModal] = useState(false);


    console.log("mat  = ", localStorage['product'])

    const getSecret = () => {

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
    getSecret();

   
    const submitForm = () => {
        setVisibleModal(true);
    }

    const onHide = ()=>{
        setVisibleModal(false);
    }

    console.log("apple".localeCompare("banana")); 
        console.log("banana".localeCompare("apple"));  
            console.log("apple".localeCompare("apple")); 
 

    return (
        <>
        <div>
            <h5>Comment</h5>
            <div autoComplete='off' >

                    <AddproductComponent/>
                <br />
            

            

                    <br />
                    <br />
                    <button onClick={submitForm}>Submit</button>
                    <br />
                    <br />
            </div>
                Secret revealed:  {secret}

            </div>
            <ActionModal show={visibleModal} onHide={onHide} />
        </>
    )
}
export {CommentPage}