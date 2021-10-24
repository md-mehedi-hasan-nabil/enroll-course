import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";

const CoursesCard = ({ course }) => {
  const { name, background, price, registered, company, _id } = course;
  return (
    <article className="col-md-4" data-aos="zoom-out-up">
      <Card className="my-3 mx-auto">
        <Card.Img variant="top" src={background} />
        <Card.Body>
          <Card.Title className="text-ellipsis">{name}</Card.Title>
          <Card.Title>Price: ${price}</Card.Title>
          <small>Time: {registered}</small> <br />
          <small>Company: {company}</small>
          <div className="overlay-btn rounded">
            <OverlayTrigger
              overlay={
                <Tooltip id={_id}>
                  Take Course <strong>{name}</strong>.
                </Tooltip>
              }
            >
              <button className="btn btn-primary w-50 text-capitalize fs-6 mt-1">
                <i className="fas fa-cart-plus me-2"></i>
                Enroll Now
              </button>
            </OverlayTrigger>
          </div>
        </Card.Body>
      </Card>
    </article>
  );
};

export default CoursesCard;
