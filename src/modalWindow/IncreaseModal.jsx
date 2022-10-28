import Modal from 'react-bootstrap/Modal';

const IncreaseModal =({show,onHide}) =>{

    return (
         <Modal 
        show={show} 
        onHide={onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={'введите название типов'}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default IncreaseModal;