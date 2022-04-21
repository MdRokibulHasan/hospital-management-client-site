import React, { useEffect, useState } from "react";
import Doctors from "../../Pages/Doctors/Doctors";
import "./HomeShowDoctor.css";
const HomeShowDoctor = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setValues(data));
    // console.log(values);
  }, []);
  return (
    <div className="doctor section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Our Outstanding Team Is Active To Help You!</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {values.slice(0, 4)?.map((doctor) => (
            <Doctors key={doctor.id} doctor={doctor}></Doctors>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeShowDoctor;
