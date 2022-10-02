import Nav from 'react-bootstrap/Nav';

const NavBarDune =()=>{
return(
    
        <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/about">about</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/post/new">Post new</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/buttonpage">Button</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="/blog" disabled>
            Blog
            </Nav.Link>
        </Nav.Item>
        </Nav>
    
    )
}
export {NavBarDune}
