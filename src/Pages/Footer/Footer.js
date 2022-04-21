import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className=" footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="cta">
                  <h3>Need Help?</h3>
                  <p>Please feel free to contact our friendly reception staff with any medical enquiry, or call</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form">
                  <h3>Subscribe Newsletter</h3>
                  <form action="#" method="get" target="_blank" class="newsletter-form">
                    <input name="email" placeholder="your email address" type="email" />
                    <div className="button">
                      <button class="btn" type="button">
                        Subscribe{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p>All Right @2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
