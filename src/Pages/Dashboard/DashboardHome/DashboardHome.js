import React, { useEffect, useState } from "react";
import "./DashboardHome.css";
const DashboardHome = () => {
  const [show, setShow] = useState({});
  const [doctors, setDoctors] = useState([]);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    fetch("https://vast-basin-66437.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);
  useEffect(() => {
    fetch("https://vast-basin-66437.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://vast-basin-66437.herokuapp.com/appointment")
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid px-4">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 home-card  shadow-sm d-flex justify-content-around align-items-center rounded ">
              <div className="">
                <h3 className="fs-2">{appointment.length}</h3>
                <p className="fs-5">Appointment</p>
              </div>
              {/* <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i> */}
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 home-card shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{doctors.length}</h3>
                <p className="fs-5">Total Doctors</p>
              </div>
              {/* <i className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i> */}
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 home-card shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{show.length}</h3>
                <p className="fs-5">Total User</p>
              </div>
              {/* <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i> */}
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 home-card shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">%25</h3>
                <p className="fs-5">Increase</p>
              </div>
              {/* <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
