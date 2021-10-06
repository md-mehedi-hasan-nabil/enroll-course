import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ title, button }) => {
  return (
    <>
      <Row
        data-aos="zoom-out-up"
        className="d-flex align-items-center bgImg"
        style={{ height: "400px" }}
      >
        <Col md={6} className="ms-5">
          <h1 className="text-light fw-bold">{title}</h1>
          {button && (
            <Link to="/courses" type="button" className="btn btn-primary">
              <span className="me-2">{button}</span>
            </Link>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Header;
