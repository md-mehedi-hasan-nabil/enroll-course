import React, { useEffect, useState } from "react";
import { Card, Container, Row, Spinner } from "react-bootstrap";
import Header from "../Header/Header";

const About = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  document.title = "About Us";
  return (
    <div>
      <Header title="What We Do" />
      <Container data-aos="zoom-out-up">
        <h1 className="text-center my-5">Our Team Members</h1>
        <Row className="mt-3">
          {loading ? (
            <Spinner className="mx-auto my-5" animation="border" />
          ) : (
            user.map((info) => (
              <article
                key={info._id}
                className="col-md-3"
                data-aos="zoom-out-up"
              >
                <Card className="my-3 mx-auto">
                  <Card.Img variant="top" src={info.picture.large} />
                  <Card.Body>
                    <Card.Title>{info.name.first}</Card.Title>
                    <small>Location: {info.location.name}</small> <br />
                    <small>Gender: {info.gender}</small>
                    <br />
                    <small>Age: {info.dob.age}</small>
                  </Card.Body>
                </Card>
              </article>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default About;
