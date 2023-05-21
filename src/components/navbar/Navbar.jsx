import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

function NavBar() {
  const [activeNav, setActiveNav] = useState("");
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <h1>CetakAja</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            href="#Home"
            onClick={() => setActiveNav("#home")}
            className={activeNav === "#home" ? "active" : ""}
          >
            <h5 className="space">Home</h5>
          </Nav.Link>
          <Nav.Link
            href="#About"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <h5 className="space">About</h5>
          </Nav.Link>
          <Nav.Link
            href="#Product"
            onClick={() => setActiveNav("#product")}
            className={activeNav === "#product" ? "active" : ""}
          >
            <h5 className="space">Product</h5>
          </Nav.Link>
          <Nav.Link href="https://wa.me/6282241065326#Contact">
            <Button variant="dark">Contact</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
