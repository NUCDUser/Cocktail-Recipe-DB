import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import BootstrapIcon from "../assets/BootstrapIcon";
import TwitterIcon from "../assets/TwitterIcon";
import FacebookIcon from "../assets/FacebookIcon";
import InstagramIcon from "../assets/InstagramIcon";

const Footer = () => {
  return (
    <Container>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <Col md={4} className="d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <BootstrapIcon />
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </Col>

        <Col
          md={4}
          as="ul"
          className="nav justify-content-end list-unstyled d-flex"
        >
          <li className="ms-3">
            <a className="text-muted" href="#">
              <TwitterIcon />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <InstagramIcon />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <FacebookIcon />
            </a>
          </li>
        </Col>
      </footer>
    </Container>
  );
};

export default Footer;
