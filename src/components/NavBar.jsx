import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      {/* Top Navbar */}
      <Navbar expand="lg" variant="dark" bg="primary">
        <Container>
          <Navbar.Brand href="#" className="m-auto" id="first-nav">
            Call Us For Veterinary Support: +977-9861859764
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Navbar */}
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Link to="#" className="navbar-brand">
            YOUR LOGO <br />
            <div className="mx-auto">HERE</div>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item className="me-3">
                <NavLink className="nav-link" id="nav-underline" to="/">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item className="me-3">
                <NavLink className="nav-link" id="nav-underline" to="/about">
                  About
                </NavLink>
              </Nav.Item>
              <Nav.Item className="me-3">
                <NavLink className="nav-link" id="nav-underline" to="/services">
                  Services
                </NavLink>
              </Nav.Item>
              <Nav.Item className="me-3">
                <NavLink className="nav-link" id="nav-underline" to="#">
                  Breeds
                </NavLink>
              </Nav.Item>
              <Nav.Item className="me-3">
                <NavLink className="nav-link" id="nav-underline" to="#">
                  Shop
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" id="nav-underline" to="#">
                  Gallery
                </NavLink>
              </Nav.Item>
            </Nav>
            <Nav className="me-auto align-items-start" id="items-right">
              <Nav.Item>
                <div className="container" id="searchcontain">
                  <input
                    placeholder="Search..."
                    className="js-search form-control"
                    id="searchinput"
                    type="text"
                    required
                  />
                  <i className="fa fa-search" id="searchicon"></i>
                </div>
              </Nav.Item>
              <Nav.Item className="mt-4 me-4">
                <i className="fa-solid fa-heart" id="heart-icon"></i>
              </Nav.Item>
              <Nav.Item className="mt-4 me-3">
                <Button className="nav-button">
                  <i
                    className="fa-solid fa-cart-shopping me-2"
                    id="item-icon"
                  ></i>
                  2 items
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
