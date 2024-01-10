import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from "react";

import "./NavBar.css";

const NavBar = () => {
    // For appearing brand name on left
    const [atTop, setAtTop] = useState(false);

    return (
        <Navbar>
            <Container className="justify-content-center">
                {/* <Navbar.Brand>JUSTIN</Navbar.Brand> */}
                <Nav>
                    <Nav.Item>
                        <Link to="/#about">ABOUT</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/#exp">EXPERIENCE</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;