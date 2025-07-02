import type React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header : React.FC = () =>{
return(
    <div>
        <Navbar style={{backgroundColor: '#8cd6e0'}} data-bs-theme = 'dark'>
            <Container>
                <Navbar.Brand href="/"><h1>Bookstore</h1></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/product">Product</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
);
}

export default Header;