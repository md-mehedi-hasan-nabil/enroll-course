import React from "react";
import { Col, Form, Row, Container } from "react-bootstrap";

function Contact() {
  document.title = "Contact Us";
  return (
    <section
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "80vh" }}
    >
      <Container className="p-2" data-aos="zoom-out-up">
        <Row>
          <Col lg={8} className="mx-auto border p-5 my-3">
            <h1 className="my-3 text-center text-primary">Contact Us</h1>
            <Form className="full-width mx-auto pb-4">
              <Row xs={1} md={2} className="mb-3">
                <Form.Group
                  className="sm-mb"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="" placeholder="Full Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Dhaka,Bangladesh" />
              </Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Tell us a few words"
                  style={{ height: "150px" }}
                />
              </Form.Group>

              <button className="btn btn-primary w-100 mt-2" type="submit">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
