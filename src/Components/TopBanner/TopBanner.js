import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "./TopBanner.css";

import Image1 from "../../Assets/Images/02.png";
import Image2 from "../../Assets/Images/slider-2.png";
import Image3 from "../../Assets/Images/slider-3.png";
const TopBanner = () => {
  return (
    <div className="banner-top">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container">
            <div className="row justify-content-center align-items-center  ">
              <div className="col-lg-6 col-md-12 col-12 ">
                <div className="hero-text">
                  <h2>
                    Superior solutions that <br /> Help you to shine.
                  </h2>
                  <p>
                    Since the first days of operation of Medicapps, our teaming has been focused on building a high-qualities
                    medicals service by Medicapps
                  </p>
                </div>
                <div>
                  <button type="button" className="appointment-banner">
                    Book Appointment
                  </button>
                  <button type="button" className="appointment-banner">
                    About Us
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 ">
                <img src={Image1} style={{ height: "600px" }}></img>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="container">
            <div className="row justify-content-center align-items-center ">
              <div className=" col-lg-6 col-md-12 col-12">
                <div className="hero-text">
                  <h2>
                    Find A Doctor & <br />
                    Book Appointment.
                  </h2>
                  <p>
                    Since the first days of operation of Medicapps, our teaming has been focused on building a high-qualities
                    medicals service by Medicapps
                  </p>
                </div>
                <div>
                  <button type="button" className="appointment-banner">
                    Book Appointment
                  </button>
                  <button type="button" className="appointment-banner">
                    About Us
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <img src={Image2} style={{ height: "600px" }}></img>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row justify-content-center align-items-center  ">
              <div className="col-lg-6 col-md-12 col-12 ">
                <div className="hero-text">
                  <h2>
                    We only give <br /> Best care to your eyes.
                  </h2>
                  <p>
                    Since the first days of operation of Medicapps, our teaming has been focused on building a high-qualities
                    medicals service by Medicapps
                  </p>
                </div>
                <div>
                  <button type="button" className="appointment-banner">
                    Book Appointment
                  </button>
                  <button type="button" className="appointment-banner">
                    About Us
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <img src={Image3} style={{ height: "600px" }}></img>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopBanner;
