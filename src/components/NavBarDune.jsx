import Nav from 'react-bootstrap/Nav';
import {Container, Card, Form, Button, Row, Spinner} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const NavBarDune =()=>{
    return(
        <Navbar bg="light" variant="light">
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/about">
                        <Button variant={"outline-success"}>Description</Button>
                    </Nav.Link>
                    
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">
                        <Button   variant={"outline-success"} >Games</Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/post/new">
                        <Button   variant={"outline-success"} >Post new</Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/buttonpage">
                        <Button   variant={"outline-success"} >Units</Button>
                    </Nav.Link>
                </Nav.Item>
             
                 
                <Link to="/CommentPage">
                        <Button   variant={"outline-success"} >Blog</Button>
                    </Link>
                     
            </Nav>
        </Navbar>
    )
}
export {NavBarDune}
