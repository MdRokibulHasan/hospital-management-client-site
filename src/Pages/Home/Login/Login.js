import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import "./Login.css";
import googleImg from "../../../Assets/Images/google.png";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { signInUsingGoogle, loginUser, isLoading } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history(redirect_uri);
    });
  };
  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...loginData };
    newlogindata[field] = value;
    setLoginData(newlogindata);
    // console.log(value);
  };
  console.log(loginData.email);
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <div className="breadcrumbs overlay">{/* <div className="banner-color"></div> */}</div>
      <div>
        <div className="w-100 m-5">
          <div className="login-section m-auto">
            <h1 className="text-center">Login</h1>
            <div className="text-center">
              <button className="link-button" onClick={handleGoogleLogin}>
                {" "}
                <img src={googleImg} alt="Google Image" width="24" height="39" /> Google Sign IN
              </button>
            </div>

            <form onSubmit={handleLoginSubmit}>
              <div className="input-section text-center">
                <h3>Or</h3>
                <div
                  className="w-100 d-flex 
                    justify-content-center
                    flex-wrap"
                >
                  <div class="input-group w-50 m-3">
                    {/* <span class="input-group-text">Email</span> */}
                    <input
                      type="email"
                      name="email"
                      onChange={handelonchange}
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div class="input-group w-50 m-3">
                    {/* <span class="input-group-text">Password</span> */}
                    <input
                      type="password"
                      name="password"
                      onChange={handelonchange}
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <div>
                  {!isLoading && (
                    <button type="submit" className="btn-login my-2 mt-3">
                      Log In{" "}
                    </button>
                  )}
                  {isLoading && (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                  <p className="link">
                    <a href="#">Forget Password</a>
                  </p>
                  <p>
                    <a href="/signup">Sign Up</a>
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

export default Login;
