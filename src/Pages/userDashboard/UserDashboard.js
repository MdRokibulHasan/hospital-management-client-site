import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li>
              <Link to="/">
                <i class="fas fa-home"></i>Home
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="fas fa-user"></i>Profile
              </Link>
            </li>
            <li>
              <Link to={"/userdashbord"}>
                <i class="fas fa-project-diagram"></i>My Appointment
              </Link>
            </li>

            <li>
              <Link to="/userdashbord/addreview">
                <i class="fas fa-user"></i>Add Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div class="main_content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
