import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-light py-2" data-aos="zoom-out-up">
      <div className="text-center p-4">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <span className="text-dark">Md. Mehedi Hasan Nabil</span>
      </div>
    </footer>
  );
};

export default Footer;
