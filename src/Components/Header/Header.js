import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Assets/Images/logo (3).svg";
import "./Header.css";
const Header = () => {
  const { user, logOut, admin } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/home "} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/services"} className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/doctor"} className="nav-link">
                  Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              {admin ? (
                <>
                  {user.email && (
                    <li className="nav-item">
                      <Link to={"/dashboard"} className="nav-link">
                        Dashboard
                      </Link>
                    </li>
                  )}
                </>
              ) : (
                <>
                  {user.email && (
                    <li className="nav-item">
                      <Link to={"/userdashbord"} className="nav-link">
                        Dashboard
                      </Link>
                    </li>
                  )}
                </>
              )}
              <li className="nav-item">
                {user?.email ? (
                  <button onClick={logOut}>LogOut </button>
                ) : (
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div>
            <Link to={"/appointment"}>
              {" "}
              <button type="button" className="appointment-btn">
                Appointment
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
