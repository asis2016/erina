import React from "react";
import {MasterNavigationBase} from './MasterNavigation.style'
import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../../assets/images/logo-2-dark.png'

const MasterNavigation = () => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" id="mainNav">
        <Container>
            <Navbar.Brand>
                <Image src={logo} className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Startseite</Nav.Link>
                    <Nav.Link>Angebot</Nav.Link>
                    <Nav.Link>Neu</Nav.Link>
                    <Nav.Link>Blog</Nav.Link>
                    <Nav.Link>Das Restaurant</Nav.Link>
                    <Nav.Link>Kontakt</Nav.Link>
                    <NavDropdown title="Über uns" id="collasible-nav-dropdown">
                        <NavDropdown.Item>Wer sind wir?</NavDropdown.Item>
                        <NavDropdown.Item>Jobs und Karriere</NavDropdown.Item>
                        <NavDropdown.Item>Teams</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link>
                        Presse
                    </Nav.Link>
                    <Nav.Link>
                        Social media
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

}

export default MasterNavigation