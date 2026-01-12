import { HOST_SERVER } from '../environment'
import { useState } from 'react'
import '../pages/CommentPage.css'

const CommentPage = () => {

    const [secret, setSecret] = useState(0);

    const getListUnit = () => {
        console.log("   ^ i = ", HOST_SERVER);
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
                console.log("   ^  ^ i = ", data);
 
                setSecret(data);
            })
            .catch(err => {
                console.error('Error fetching data');
            });
    }
    getListUnit();

 

    console.log("apple".localeCompare("banana")); 
        console.log("banana".localeCompare("apple"));  
            console.log("apple".localeCompare("apple")); 
 

    return (
        <>
            <h5>Comment</h5>
            <button className="btn-comment">Comment</button>
            <br></br>

          Secret revealed:  {secret}
        </>
    )
}
export {CommentPage}