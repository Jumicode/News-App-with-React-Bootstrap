import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/News.css'




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
           
          
                <NavLink
                    to='/'
                    className='link'
                    

                >Main</NavLink>
            
       
                
                    <NavLink
                        to='/Sports'
                        className='link'
                    >Sports</NavLink>
               
           
                
                    <NavLink
                        to='/Entertainment'
                        className='link'
                    >Entertainment</NavLink>
              
           
           
                    <NavLink
                        to='/Technology'
                        className='link'
                    >Technology</NavLink>
               
            
                
                    <NavLink
                        to='/Search'
                        className='link'
                    >Search</NavLink>
              
           
        
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


           
      

    );
}

export default NavBar;
