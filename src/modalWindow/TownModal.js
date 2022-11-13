import Modal from 'react-bootstrap/Modal';
import {Container, Card, Form, Button, Row, Spinner, Image} from 'react-bootstrap'


const TownModal =({show,onHide,UrlImage,name,GoToTown}) =>{

    console.log("0223 DD  UrlImage ",UrlImage," " )
    console.log("0222 DDDD  name "+name )

    return (
         <Modal 
        show={show} 
        onHide={onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Modal Town</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>{name}</h6>
                <Image width={300} height={200} src={UrlImage}/> 
                <div>Перейти в город {name} ?</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={GoToTown}>Перейти</Button>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                
            </Modal.Footer>
        </Modal>
    );
};
export {TownModal};