import React from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import {Container,Nav,Navbar, NavDropdown} from 'react-bootstrap';
const Navbarr = () => {
  return (
    // <div className=" pt-3 sticky-top nav-bar container px-5 position-fixed">
    //   <div className="d-flex justify-content-between align-items-center position-relative">
    //   <div className="">
    //     <h3>ABJ</h3>
    //   </div>
    //   <div className="position-absolute">
    //     <ul className="justify-content-between gap-4 d-block nav-responsive-wrapper">
    //     d-none d-md-flex 
    //       <li><a href="#home"> Home</a></li>
    //       <li><a href="#services"> Services</a></li>
    //       <li><a href="#works"> Portfolio</a></li>
    //       <li><a href="#reviews"> Reviews</a></li>
    //       <li><a href="#resume"> Resume</a></li>
    //       <li><a href="#contact"> Contact</a></li>
    //       <div className=""><a href="#" className="download-resume">download cv</a></div>
    //     </ul>
    //   </div>
    //   <div className=""><a href="#" className="download-resume d-none">download cv</a>
    //     <DehazeIcon/>
      
    //   </div>
    //   </div>
    // </div>

    
    <Navbar collapseOnSelect expand="lg" className="bg-blc sticky-top" variant="dark" sticky="top" id="nav-bar"  >
  <Container className="p-3">
  <Navbar.Brand href="#home"><h2>Zoe</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
      <Nav.Link href="#works">Portfolio</Nav.Link>
      <Nav.Link href="#reviews">Reviews</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="https://drive.google.com/drive/my-drive" className="download-resume shadow">
      download cv
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Navbarr;
