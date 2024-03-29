import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ArrowUp } from "react-bootstrap-icons";
import logo from "../../../assests/logo.png";
import "./Footer.css";
import WebBtn from "../../UI/WebBtn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top pt-5">
        <Container>
          <Row className="text-center">
            <Col md={4} className="footer-logo px-2">
              <Image fluid src={logo} alt="footer-logo" href="/" />
            </Col>
            <Col md={2} className="footer-link pt-3">
              <h5>ToDos</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="link-white">
                    todo1
                  </a>
                </li>
                <li>
                  <a href="/" className="link-white">
                    todo2
                  </a>
                </li>
                <li>
                  <a href="/" className="link-white">
                    todo3
                  </a>
                </li>
                <li>
                  <a href="/" className="link-white">
                    todo4
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={2} className="footer-link pt-3">
              <h5>WeeklySchedule</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="link-white">
                    Mon
                  </a>
                </li>
                <li>
                  <a href="/" className="link-white">
                    Tue
                  </a>
                </li>
                <li>
                  <a href="/" className="link-white">
                    Wed
                  </a>
                </li>
                <li>
                  <a href="/" className="link-white">
                    Thur
                  </a>
                </li>
                <li>
                  <a href="/" className="link-white">
                    Fri
                  </a>
                </li>
                <li>
                  <a href="/" className="link-white">
                    Weekend
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={2} className="footer-link pt-3">
              <h5>$ Tracker</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="link-white">
                    expenses
                  </a>
                </li>
                <li>
                  <a href="/" className="link-white">
                    savings
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={2} className="footer-link pt-5">
              <a
                href="#top"
                className="link-white clearfix mb-3 d-block"
                id="scroll-top"
              >
                <ArrowUp /> Back to Top{" "}
              </a>
              <WebBtn />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom py-2">
        <Container className="footer-bottom-bg">
          <Row>
            <Col md={6} xs={6}>
              <p>
                <a href="/" className="link-white">
                  Terms & Conditions
                </a>
              </p>
            </Col>

            <Col md={2} xs={6}>
              <div className="social_media">
                <a href="/">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                  >
                    <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                    <circle cx="14.87" cy="5.26" r="1.09"></circle>
                    <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                  </svg>
                </a>
                <a href="/">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                  >
                    <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                  </svg>
                </a>
              </div>
            </Col>
            <Col md={2} xs={6}>
              <p className="text-muted text-center">
                &copy; KidsKnow {new Date().getFullYear()}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
