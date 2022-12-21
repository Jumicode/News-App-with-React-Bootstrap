import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const NavBar = () => {
    return (

        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ul>
            <li>
                <NavLink
                    to='/'
                    

                >Main</NavLink>
            </li>
        </ul>
        <ul>
                <li>
                    <NavLink
                        to='/Sports'

                    >Sports</NavLink>
                </li>
            </ul><ul>
                <li>
                    <NavLink
                        to='/Entertainment'

                    >Entertainment</NavLink>
                </li>
            </ul><ul>
                <li>
                    <NavLink
                        to='/Technology'

                    >Technology</NavLink>
                </li>
            </ul><ul>
                <li>
                    <NavLink
                        to='/Search'

                    >Search</NavLink>
                </li>
            </ul>
        
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


           
      

    );
}

export default NavBar;
