import React from "react";
import { Link } from "react-router-dom";
import Courses from "../Courses/Courses";
import Header from "../Header/Header";

const Home = () => {
  return (
    <main>
      <Header title="We give through a variety of courses. we have course on any subject related to IT." button="Get Started" />
      <h1 className="text-center my-5">Our <span className="text-primary fw-bold">Courses</span></h1>
      <Courses item="6" />
      <div className="text-center p-4">
        <Link to="/courses" className="btn btn-primary">
          Click here to see the course list
        </Link>
      </div>
    </main>
  );
};

export default Home;
