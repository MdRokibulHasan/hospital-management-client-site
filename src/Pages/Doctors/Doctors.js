import React from "react";
import "./Doctors.css";
const Doctors = ({ doctor }) => {
  const { id, name, Profession, img } = doctor;
  //   console.log(img);
  // const handleDetails = (id) => {
  //   const uri = `/buyproducts/${id}`;

  //   // history.push(uri);
  // };
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-doctor">
        <div className="image">
          <img src={img} className="card-img-top" alt="..." />
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

export default Doctors;
