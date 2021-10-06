import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useLocation } from "react-router";
import CoursesCard from "../CoursesCard/CoursesCard";
import Header from "../Header/Header";

const Courses = ({ item }) => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourse(data.splice(0, item === undefined ? data.length : item));
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  document.title="Couses"

  return (
    <Container fluid>
      {useLocation().pathname === "/courses" && (
        <Header title="All IT related subjects created by our team" />
      )}
      <Container>
        <Row className="mt-3">
          {loading ? (
            <Spinner className="mx-auto my-5" animation="border" />
          ) : (
            course.map((item) => (
              <CoursesCard key={item._id} course={item}></CoursesCard>
            ))
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Courses;
