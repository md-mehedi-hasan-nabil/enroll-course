import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <header className="py-2 sticky-top shadow">
      <Navbar expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">
            N<span className="text-primary">A</span>BI<span className="text-warning">L</span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink activeClassName="active" className="nav-link fs-5 mx-auto px-3" to="">
                Home
              </NavLink>
              <NavLink activeClassName="active" className="nav-link fs-5 mx-auto px-3" to="/courses">
                Courses
              </NavLink>
              <NavLink activeClassName="active" className="nav-link fs-5 mx-auto px-3" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="active" className="nav-link fs-5 mx-auto px-3" to="/contact">
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
