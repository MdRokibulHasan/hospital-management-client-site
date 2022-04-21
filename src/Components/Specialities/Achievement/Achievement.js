import React from "react";
import "./Achievement.css";
const Achievement = () => {
  return (
    <div className="our-achievement section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="single-achievement">
              <i class="lni lni-apartment"> </i>
              <h3 className="counter">
                <span id="secondo1" class="countup" cup-end="1250">
                  1250{" "}
                </span>
              </h3>
              <p>Hospital Rooms</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="single-achievement">
              <i class="lni lni-sthethoscope"> </i>
              <h3 className="counter">
                <span id="secondo1" class="countup" cup-end="1250">
                  350{" "}
                </span>
              </h3>
              <p>Specialist Doctors</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="single-achievement">
              <i class="lni lni-smile"></i>
              <h3 className="counter">
                <span id="secondo1" class="countup" cup-end="1250">
                  2500{" "}
                </span>
              </h3>
              <p>Happy Patients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="single-achievement">
              <i class="lni lni-certificate"> </i>
              <h3 className="counter">
                <span id="secondo1" class="countup" cup-end="1250">
                  35{" "}
                </span>
              </h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
