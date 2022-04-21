import React from "react";
import "./HomeServices.css";
const HomeServices = () => {
  return (
    <div className="services section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2 className="services-title">Services Provided By Medicapps</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="services-content">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 custom-padding-right">
                  <div className="single-list custom-border-right custom-border-bottom">
                    <i class="lni lni-ambulance"> </i>
                    <h4>Fast Ambulance</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 custom-padding-left custom-padding-right">
                  <div className="single-list custom-border-right custom-border-bottom">
                    <i class="lni lni-sthethoscope"> </i>
                    <h4>Dental Specialist</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 custom-padding-left custom-padding-right">
                  <div className="single-list custom-border-right custom-border-bottom">
                    <i class="lni lni-microscope"></i>
                    <h4>Modern Laboratory</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12  custom-padding-right">
                  <div className="single-list custom-border-right ">
                    <i class="lni lni-users"></i>
                    <h4>Children Center</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 custom-padding-left custom-padding-right">
                  <div className="single-list custom-border-right custom-border-bottom">
                    <i class="lni lni-heart"></i>
                    <h4>Heart Surgery</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 custom-padding-left custom-padding-right">
                  <div className="single-list custom-border-right custom-border-bottom">
                    <i class="lni lni-hand"></i>
                    <h4>Care Advice</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
