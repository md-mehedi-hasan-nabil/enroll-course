import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import { Container } from "react-bootstrap";
import Courses from "./components/Courses/Courses";

function App() {
  AOS.init({
    delay: 0,
    duration: 400,
  });
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
