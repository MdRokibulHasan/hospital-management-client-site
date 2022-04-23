import React, { useEffect, useState } from "react";

const UserAppointment = () => {
  const [appointment, setAppointment] = useState();
  useEffect(() => {
    fetch("https://vast-basin-66437.herokuapp.com/appointment")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const url = `https://vast-basin-66437.herokuapp.com/appointment/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount) {
          alert("Delete Successfully");
          const remaining = appointment.filter((iteam) => iteam._id !== id);
          setAppointment(remaining);
        } else {
          alert("Somthing Worng");
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="myoder-title mt-5">
          <h1 className="text-center">My Appointment </h1>
        </div>

        <div className="m-5 align-item-center">
          <div className="col-lg-8 col-md-8 col-sm-6">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Department</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointment?.map((iteam, index) => (
                  <tr key={iteam._id}>
                    <td>{index + 1}</td>
                    <td>{iteam.name}</td>
                    <td>{iteam.email}</td>
                    <td>{iteam.doctor}</td>
                    <td>{iteam.department}</td>
                    <td>{iteam.date}</td>
                    <td>
                      <button onClick={() => handleDelete(iteam._id)}>Cencle</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="text-center">
          <h1>No Appointment </h1>
        </div> */}
      </div>
    </div>
  );
};

export default UserAppointment;
