import React, {FC} from "react";
import {NavigationStyleTwoBase} from "./NavigationStyleTwo.style";
import {Nav, Navbar} from "react-bootstrap";

interface IProps {
    navbarBrand: string;
}

export const NavigationStyleTwo: FC<IProps> = (props) => {
    return <NavigationStyleTwoBase>

        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand>
                <img className="logo" src={require("../../assets/images/logo.png")} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        Zimmer &nbsp;<i className="fa fa-chevron-down"></i>
                    </Nav.Link>
                    <Nav.Link>
                        Rabatt &nbsp;<i className="fa fa-chevron-down"></i>
                    </Nav.Link>
                    <Nav.Link>
                        Familienbuchung &nbsp;<i className="fa fa-chevron-down"></i>
                    </Nav.Link>


                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link>
                        Anmelden oder Registrieren &nbsp;&nbsp;<i className="fa fa-user-circle-o"
                                                                  aria-hidden="true"></i>
                    </Nav.Link>
                    <Nav.Link>
                        Menüs &nbsp;&nbsp;<i className="fa fa-bars" aria-hidden="true"></i>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </NavigationStyleTwoBase>
}