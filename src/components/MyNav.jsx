import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaBook } from 'react-icons/fa';


const MyNav = () => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        {/* Container 컴포넌트에 fluid prop을 추가하여 전체 너비 사용 설정 */}
        <Container fluid>
          <Navbar.Brand href="#home">
          <FaBook className="me-2"/>EPIBOOKS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  

export default MyNav;


