import React from "react";
import "./Appointment.css";
const Appointment = () => {
  return (
    <div className="container">
      <div className="appointment-form">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="appointment-title">
              <h1 className="m-3">Book An Appointment</h1>
              <p className="m-3 ">
                Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will
                receive or return any urgent calls.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 p-0">
            <div className="appointment-input">
              <label for="name">
                <i class="lni lni-user"></i>
              </label>
              <input type="text" name="name" id="name" placeholder="your name"></input>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 p-0">
            <div className="appointment-input">
              <label for="email">
                <i class="lni lni-envelope"></i>
              </label>
              <input type="email" name="email" id="email" placeholder="your email"></input>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 p-0">
            <div className="appointment-input">
              <label for="department">
                <i class="lni lni-notepad"></i>
              </label>
              <select name="department" id="department">
                <option value="none" selected disabled>
                  Department
                </option>
                <option value="none">General Surgery</option>
                <option value="none">Gastroenterology</option>
                <option value="none">Nutrition & Dietetics</option>
                <option value="none">Cardiology</option>
                <option value="none">Neurology</option>
                <option value="none">Pediatric</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 custom-padding">
            <div className="appointment-btn button">
              <button type="button" className="btn">
                Get Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
