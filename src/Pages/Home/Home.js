import React from "react";
import AboutUS from "../../Components/AboutUS/AboutUS.js";
import Appointment from "../../Components/Appointment/Appointment";
import Header from "../../Components/Header/Header";
import HomeServices from "../../Components/HomeServices/HomeServices.js";
import HomeShowDoctor from "../../Components/HomeShowDoctor/HomeShowDoctor.js";
import ShowReview from "../../Components/ShowReview/ShowReview.js";
import Achievement from "../../Components/Specialities/Achievement/Achievement.js";
import Specialities from "../../Components/Specialities/Specialities.js";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Footer from "../Footer/Footer.js";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <TopBanner></TopBanner>
      <Appointment></Appointment>
      <AboutUS></AboutUS>
      {/* <Specialities></Specialities> */}
      <HomeServices></HomeServices>
      <Achievement></Achievement>
      <HomeShowDoctor></HomeShowDoctor>
      <ShowReview></ShowReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
