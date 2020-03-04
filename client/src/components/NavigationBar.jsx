/*https://react-bootstrap.github.io/components/navbar/*/

import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './images/logo.png';
class Navmenu extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="../"><img id="logo" src={logo} alt="Microsoft" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/surfaces">Surfaces</Nav.Link>
                        <Nav.Link href="../../accessories">Accessories</Nav.Link>
                        <NavDropdown title="Discover the Surface Range" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://www.microsoft.com/en-gb/p/surface-pro-7/8n17j0m5zzqs">Surface Pro 7</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.microsoft.com/en-gb/p/surface-pro-x/8vdnrp2m6hhc">Surface Pro X</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.microsoft.com/en-gb/p/surface-laptop-3/8vfggh1r94tm">Surface Laptop 3</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.microsoft.com/en-gb/p/surface-book-2/8mcpzjjcc98c">Surface Book 2</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.microsoft.com/en-gb/p/surface-studio-2/8sbjxm0m58t4">Surface Studio 2</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.microsoft.com/en-gb/p/surface-go/8v9dp4lnknsz">Surface GO</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default Navmenu;