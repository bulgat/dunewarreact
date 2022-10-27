import Nav from 'react-bootstrap/Nav';
import {Container, Card, Form, Button, Row, Spinner} from 'react-bootstrap'

const NavBarDune =()=>{
return(
    
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
        <Nav.Item>
            <Nav.Link eventKey="/blog" disabled>
                <Button   variant={"outline-success"} >Blog</Button>
            </Nav.Link>
        </Nav.Item>
        </Nav>
    
    )
}
export {NavBarDune}
