import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../../assests/logo.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import WebBtn from "../../UI/WebBtn";

const Header = () => {
  const navigate = useNavigate();
  const handleHomeClick: () => void = () => {
    navigate("/index.html");
  };

  const handleToDos: () => void = () => {
    navigate("/index.html/todos");
  };

  const handleMySchedule: () => void = () => {
    navigate("/index.html/myschedule");
  };
  const handleExpenseTracker: () => void = () => {
    navigate("/index.html/expensetracker");
  };
  return (
    <>
      <Container className="border-bottom border-primary" fluid>
        <Row>
          <Col sm={{ span: 4, offset: 4 }}>
            <Row>
              <Col sm={{ span: 8, offset: 2 }}>
                <Link to="/index.html">
                  <Image fluid src={logo} alt="header-logo" />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="bg-body-secondary">
            <Navbar expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link onClick={handleHomeClick}>Home</Nav.Link>
                    <Nav.Link onClick={handleToDos}>ToDos</Nav.Link>
                    <Nav.Link onClick={handleMySchedule}>MySchedule</Nav.Link>
                    <Nav.Link onClick={handleExpenseTracker}>
                      $ Tracker
                    </Nav.Link>
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
                <WebBtn
                  text={"Contact Us"}
                  link={"mailto:sophia.jiyu@gmail.com"}
                />
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
