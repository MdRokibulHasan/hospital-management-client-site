import React, { useEffect, useState } from "react";

import DashboardDoctor from "./DashboardDoctor";

const AllDoctors = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("https://vast-basin-66437.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setValues(data));
  }, [values]);
  // console.log(values);
  return (
    <>
      <div className="all-doctors"></div>
      <div className="doctor section ">
        <div className="container">
          <div className="all-doctor-title text-center">
            <h1>All Doctor</h1>
          </div>
          <div className="row">
            {values.map((doctor) => (
              <DashboardDoctor key={doctor._id} doctor={doctor}></DashboardDoctor>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDoctors;
