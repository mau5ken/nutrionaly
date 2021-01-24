import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap";
export default (props) => (

    <Navbar variant="light border-bottom">
        <Container>
            <img
                src="https://res.cloudinary.com/craftwebs/image/upload/v1605419794/nu07r10y3/PNG%27S/nutrionaly_logo_trans.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                style={{position: 'relative', top: '15px'}}
            />
            <Nav className=" justify-content-end">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)