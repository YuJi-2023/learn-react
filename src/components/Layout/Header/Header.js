import React from "react";
import logo from "../../../assests/logo.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import WebBtn from "../../UI/WebBtn";

const Header = () => {
  return (
    <>
      <Container className="pb-3">
        <Row>
          <Col sm={{ span: 4, offset: 4 }}>
            <Image fluid src={logo} alt="header-logo" href="#" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#todos">ToDos</Nav.Link>
                    <Nav.Link href="#todos">WeeklySchedule</Nav.Link>
                    <Nav.Link href="#expenseTracker">$ Tracker</Nav.Link>
                    <NavDropdown title="Tips" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Money Smart
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Time Master
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                <WebBtn />
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
