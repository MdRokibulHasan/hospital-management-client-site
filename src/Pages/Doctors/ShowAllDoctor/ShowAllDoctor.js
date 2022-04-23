import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Doctors from "../Doctors";

const ShowAllDoctor = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("https://vast-basin-66437.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setValues(data));
    // console.log(values);
  }, []);
  return (
    <>
      <Header></Header>
      <div className="breadcrumbs overlay"></div>
      <div className="doctor section ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Our Outstanding Team Is Active To Help You!</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                  some form.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {values.map((doctor) => (
              <Doctors key={doctor.key} doctor={doctor}></Doctors>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAllDoctor;
