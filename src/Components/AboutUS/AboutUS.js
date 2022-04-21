import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../Assets/Images/about.png";
import "./AboutUs.css";
const AboutUS = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="content-left">
            <img src={aboutImage} alt="About Image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="content-right">
            <span className="sub-heading">About</span>
            <h2>Thousands Of Specialities For Any Type Diagnostic.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo
              consequat.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <ul className="list">
                  <li>
                    <i class="lni lni-checkbox"></i> Conducts eye health checkups
                  </li>
                  <li>
                    <i class="lni lni-checkbox"></i> Best lasik treatment
                  </li>
                  <li>
                    <i class="lni lni-checkbox"></i> Treats minor illnesses
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <ul className="list">
                  <li>
                    <i class="lni lni-checkbox"></i> Special eye exam
                  </li>
                  <li>
                    <i class="lni lni-checkbox"></i> Contact lens service
                  </li>
                  <li>
                    <i class="lni lni-checkbox"></i> Special Retina exam
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-button">
              <Link to="/login">
                <button type="button" className="appointment-btn">
                  More About us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
