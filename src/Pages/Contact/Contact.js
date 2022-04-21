import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Header />
      <div className="breadcrumbs overlay ">
        {/* <div className="banner-color"></div> */}
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Contact Us</h1>
              </div>
              <ul className="breadcrumb-nav">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>

                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us section">
        <div className="container">
          <div className="container-head">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>We’re Connected All Time To Help Our Patients</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                    some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="form-main">
                  <div className="form-title">
                    <h2>Feel free to contact us for any query.</h2>
                  </div>
                  <form className="form">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <input name="name" type="text" placeholder="Your Name" required="required"></input>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <input name="subject" type="text" placeholder="Your Subject" required="required"></input>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <input name="email" type="email" placeholder="Your EMAIL" required="required"></input>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <input name="phone" type="text" placeholder="Your Phone" required="required"></input>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group message">
                          <textarea name="message" placeholder="Your Message"></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" className="btn appointment-btn">
                            Submit Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-head">
                  <h2 className="main-title">Contact Information</h2>
                  <div className="single-info">
                    <div className="info-icon">
                      <i class="lni lni-map-marker"></i>
                    </div>
                    <h3>Medical Address</h3>
                    <ul>
                      <li>3909 Witmer Rd, Niagara Falls, NY 14305, United States</li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <div className="info-icon">
                      <i class="lni lni-timer"></i>
                    </div>
                    <h3>Opening Hours</h3>
                    <ul>
                      <li>Mon - Tue 08:30 - 18:30 </li>
                      <li>Wed- Thu 07:00 - 14:30</li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <div className="info-icon">
                      <i class="lni lni-envelope"></i>
                    </div>
                    <h3>Email Support</h3>
                    <ul>
                      <li>medicapps@gmail.com</li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <h3>Social contact</h3>
                    <div className="info-icon">
                      <i class="lni lni-mobile"></i>
                    </div>

                    <ul>
                      {" "}
                      <li>
                        <Link to="">
                          <i class="lni lni-facebook-original"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i class="lni lni-twitter-original"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i class="lni lni-linkedin-original"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i class="lni lni-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
