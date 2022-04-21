import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import useAuth from "../../../Hooks/useAuth";

import "./SignUp.css";

const SignUp = () => {
  const [loginData, setLoginData] = useState({});

  const { registerUser, isLoading, user, authError } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...loginData };
    newlogindata[field] = value;
    setLoginData(newlogindata);
    console.log(newlogindata);
  };
  const handleRegisterSubmit = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div>
      <Header></Header>
      <div className="breadcrumbs  overlay">{/* <div className="banner-color"></div> */}</div>
      <div>
        <div className="w-100 m-5">
          <div className="login-section m-auto">
            <h1 className="text-center">Register</h1>
            <form onSubmit={handleRegisterSubmit}>
              <div className="input-section text-center ">
                <div class="input-group w-50 m-3">
                  <input type="text" name="name" onChange={handelonchange} class="form-control " placeholder="Your Name" />
                </div>
                <div class="input-group w-50 m-3">
                  <input type="email" name="email" onChange={handelonchange} class="form-control " placeholder="Your Email" />
                </div>
                <div class="input-group w-50 m-3">
                  <input
                    type="password"
                    name="password"
                    onChange={handelonchange}
                    class="form-control"
                    placeholder="Your Password"
                  />
                </div>
                <div>
                  {!isLoading && (
                    <button type="submit" class="btn-login my-2 mt-3">
                      Register{" "}
                    </button>
                  )}
                  {isLoading && (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                  {user?.email && (
                    <div class="alert alert-success" role="alert">
                      User Register successful!
                    </div>
                  )}
                  {authError && (
                    <div class="alert alert-warning" role="alert">
                      {authError}
                    </div>
                  )}

                  <p>
                    Already have Account <a href="/login"> Sign In </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
