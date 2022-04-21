import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";
import "./BookAppointment.css";
import BookingPage from "./BookingPage";
import "./BookAppointment.css";
const BookAppointment = () => {
  return (
    <>
      <Header></Header>
      <div className="breadcrumbs overlay ">
        {/* <div className="banner-color"></div> */}
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Appointment</h1>
              </div>
              <ul className="breadcrumb-nav">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>

                <li> Appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BookingPage />
      <Footer />
    </>
  );
};

export default BookAppointment;
