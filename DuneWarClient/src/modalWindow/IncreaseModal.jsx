import Modal from 'react-bootstrap/Modal';
import {Container, Card, Form, Button, Row, Spinner, Image} from 'react-bootstrap'


const IncreaseModal =({show,onHide,UrlImage,name}) =>{

    console.log("0223 DD  UrlImage ",UrlImage," " )
    console.log("0222 DDDDDDD [   ] " )

    return (
         <Modal 
        show={show} 
        onHide={onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>{name}</h6>
                <Image width={300} height={200} src={UrlImage}/> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                
            </Modal.Footer>
        </Modal>
    );
};
export {IncreaseModal};