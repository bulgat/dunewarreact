import Nav from 'react-bootstrap/Nav';
import {Container, Card, Form, Button, Row, Spinner} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './NavBarDune.css'

const NavBarDune =()=>{
    return (
        <>
            
            <Navbar bg="light" variant="light">
            
                <Nav variant="pills" defaultActiveKey="/home">
                    <div className='container-nav'>
<div className='arrow-up'></div>
                    </div>

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
                    <Nav.Link href="/arsenal">
                        <Button   variant={"outline-success"} >Arsenal</Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/unitpage">
                        <Button   variant={"outline-success"} >Units</Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/commentpage">
                        <Button   variant={"outline-success"} >Add Items</Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/blog">
                        <Button   variant={"outline-success"} >Blog</Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/file">
                         <Button variant={"outline-success"} >File</Button>
                       </Nav.Link>
                    </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">
                        <Button variant={"outline-success"} >Login</Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/loginout">
                        <Button variant={"outline-success"} >Log out</Button>
                    </Nav.Link>
                </Nav.Item>
                     
            </Nav>
            </Navbar>
        </>
    )
}
export {NavBarDune}
