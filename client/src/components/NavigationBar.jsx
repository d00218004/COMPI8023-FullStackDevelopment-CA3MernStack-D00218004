/*https://react-bootstrap.github.io/components/navbar/*/

import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
class Navmenu extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="./">Microsoft Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="./accessories">Accessories</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Helpful Links" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#xbox">Xbox</NavDropdown.Item>
                            <NavDropdown.Item href="#microsoft-office">Microsoft Office</NavDropdown.Item>
                            <NavDropdown.Item href="#surface">Surface</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default Navmenu;