import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/slider6.jpeg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: "url(" + AboutImage + ")" }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
        Don't think twice our gym center can give you professional service and the most modern facilities..{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
