import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="mt-5">
      <Navbar.Brand href="#home">
        <h1>CetakAja</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="space" href="#Home">
            <h5>Home</h5>
          </Nav.Link>
          <Nav.Link className="space" href="#About">
            <h5>About</h5>
          </Nav.Link>
          <Nav.Link className="space" href="#Product">
            <h5>Product</h5>
          </Nav.Link>
          <Nav.Link href="#Contact">
            <Button variant="dark">Contact</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
