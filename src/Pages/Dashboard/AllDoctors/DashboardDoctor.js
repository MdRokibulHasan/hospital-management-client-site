import React, { useEffect, useState } from "react";
import "./AllDoctors.css";
const DashboardDoctor = ({ doctor }) => {
  const { _id, name, Profession, img } = doctor;
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("https://vast-basin-66437.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setValues(data));
  }, [values]);

  function handleDelete(id) {
    // console.log(id);
    const confirmation = window.confirm("Are you sure to Delete!!");
    if (confirmation) {
      const url = `https://vast-basin-66437.herokuapp.com/delete/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount === 1) {
            alert("Delete Successfully");
            const remaining = values.filter((iteam) => iteam._id !== id);
            setValues(remaining);
          } else {
            alert("Something is wrong");
          }
        });
    }
  }
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-doctor ">
        <div className="dashboard-doc">
          <div className="image">
            <img src={img} className="card-img-top" alt="..." />
          </div>
          <div className="delete-button">
            <button onClick={() => handleDelete(_id)} className="appointment-btn">
              Delete
            </button>
          </div>
        </div>
        <div className="content">
          <h5>{Profession}</h5>
          <h3>
            {/* <link to="">{name}</link> */}
            <a href="">{name}</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardDoctor;
