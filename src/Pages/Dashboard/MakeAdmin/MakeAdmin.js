import React, { useState } from "react";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://vast-basin-66437.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          // setSuccess(true);
          alert("Make Admin Successfully");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="make-admin">
      <h1>Make A Admin</h1>
      <form onSubmit={handleAdminSubmit}>
        <div className="admin-input">
          <div className="input-group mb-3">
            <input type="email" onBlur={handleOnBlur} className="form-control" placeholder="Enter Make A Admin Email" />
          </div>
          <div className="admin-btn">
            <button className="appointment-btn button" type="submit" id="button-addon2">
              Make Admin
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
