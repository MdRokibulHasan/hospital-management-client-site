import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Home/Login/Login";
import SignUp from "./Pages/Home/SignUp/SignUp";
import ShowAllDoctor from "./Pages/Doctors/ShowAllDoctor/ShowAllDoctor";
import AuthProvider from "./Context/AuthProvider";
import BookAppointment from "./Pages/BookAppointment/BookAppointment";
import HomeServices from "./Components/HomeServices/HomeServices";
import Services from "./Components/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";

import ManageAppointment from "./Pages/Dashboard/ManageAppointment/ManageAppointment";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AddDoctors from "./Pages/Dashboard/AddDoctors/AddDoctors.js";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import AllDoctors from "./Pages/Dashboard/AllDoctors/AllDoctors";
import UserDashboard from "./Pages/userDashboard/UserDashboard";
import UserAppointment from "./Pages/userDashboard/UserAppointment/UserAppointment";
import AddReview from "./Pages/userDashboard/Addreview/AddReview";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="doctor" element={<ShowAllDoctor />} />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path={`/dashboard`} element={<DashboardHome />} />
            <Route path={`/dashboard/adddoctors`} element={<AddDoctors />} />
            <Route path={`/dashboard/alldoctors`} element={<AllDoctors />} />
            <Route path={`/dashboard/manageappointment`} element={<ManageAppointment />} />
            <Route path={`/dashboard/makeadmin`} element={<MakeAdmin />} />
          </Route>
          <Route path="/userdashbord" element={<UserDashboard />}>
            <Route path={`/userdashbord`} element={<UserAppointment />} />
            <Route path={`/userdashbord/addreview`} element={<AddReview />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
