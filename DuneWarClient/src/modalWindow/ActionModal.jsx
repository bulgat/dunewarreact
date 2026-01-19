import Modal from 'react-bootstrap/Modal';
import {Container, Card, Form, Button, Row, Spinner, Image} from 'react-bootstrap'
import './ActionModal.css'

const ActionModal =({show,onHide,UrlImage,name}) =>{

    return (
        <div>
             <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Modal Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>{name}</h6>
                    <div className='pop'>
                        <Image width={300} height={200} src={UrlImage} /> 
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export {ActionModal};