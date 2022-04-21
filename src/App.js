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
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
