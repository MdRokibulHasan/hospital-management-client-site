import React, { useEffect, useState } from "react";

const ManageAppointment = () => {
  const [appointment, setAppointment] = useState();

  useEffect(() => {
    fetch("https://vast-basin-66437.herokuapp.com/appointment")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointment]);

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
            const remaining = appointment.filter((iteam) => iteam._id !== id);
            setAppointment(remaining);
          } else {
            alert("Something is wrong");
          }
        });
    }
  }

  return (
    <div className="mt-5">
      <h1>Manage Appointment</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Department</th>
            <th scope="col">Doctor</th>
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

              <td>{iteam.number}</td>

              <td>{iteam.department}</td>
              <td>{iteam.doctor}</td>
              <td>{iteam.date}</td>
              <td>
                <button onClick={() => handleDelete(iteam._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAppointment;
