import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Dashboard.css";
const Dashboard = () => {
  const { admin } = useAuth();

  /* console.log(admin); */
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
              <Link to="/dashboard">
                <i class="fas fa-user"></i>Dashboard
              </Link>
            </li>

            <li>
              <Link to="#">
                <i class="fas fa-user"></i>Profile
              </Link>
            </li>

            <li>
              <Link to={`/dashboard/manageappointment`}>
                <i class="fas fa-blog"></i>Manage Appointment
              </Link>
            </li>

            {/* <li>
              <Link to={"/dashboard/myorders"}>
                <i class="fas fa-project-diagram"></i>My Order
              </Link>
            </li> */}

            <li>
              <Link to={`/dashboard/makeadmin`}>
                <i class="fas fa-address-card"></i>Make Admin
              </Link>
            </li>

            <li>
              <Link to="/dashboard/alldoctors">
                <i class="fas fa-user"></i>All Doctors
              </Link>
            </li>

            <li>
              <Link to={`/dashboard/adddoctors`}>
                <i class="fas fa-map-pin"></i>Add Doctors
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
export default Dashboard;
