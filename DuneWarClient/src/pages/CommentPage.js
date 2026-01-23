import { HOST_SERVER } from '../environment'
import { useState } from 'react'
import '../pages/CommentPage.css'
import { HomeService } from '../services/home.service'
import { ActionModal } from '../modalWindow/ActionModal'
import { AddproductComponent } from '../components/addProduct.component'

const CommentPage = () => {
    const _unitService = HomeService();
    const [secret, setSecret] = useState(0);
    const [arsenal, setArsenal] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);
    const [createArsenalName, setCreateArsenalName] = useState('');
    const [createArsenalNumCannon, setCreateArsenalNumCannon] = useState('');

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

    

    const patchArsenal = () => {
 
        _unitService.patchArsenal(arsenal,9);
    }
    const addArsenal = () => {

        _unitService.addArsenal(createArsenalName, createArsenalNumCannon)
        .then(a => { alert('add arsenal = '+a.ok)});
    }

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
                <input type='text' name='arsenal' placeholder='arsenal' onChange={(e) => setArsenal(e.target.value)} />
                    <button className="btn-comment" onClick={patchArsenal}>Update Arsenal</button>
                    <br />
                    <br />
                    <input type='text' name='arsenalName' placeholder='name arsenal' onChange={(e) => setCreateArsenalName(e.target.value)} />
                    <input type='text' name='arsenalNumCannon' placeholder='num cannon arsenal' onChange={(e) => setCreateArsenalNumCannon(e.target.value)} />
                    <button className="btn-comment" onClick={addArsenal}>Add Arsenal</button>
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