import React, { useState } from "react";

const AddDoctors = () => {
  const [doctors, setDoctors] = useState({});

  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newDoctorsData = { ...doctors };
    newDoctorsData[field] = value;
    setDoctors(newDoctorsData);
  };
  console.log(doctors);
  const handelevent = () => {
    const data = { ...doctors };

    fetch("https://vast-basin-66437.herokuapp.com/doctors", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          // const newSelected = [...products];
          // setProducts(newSelected);
          alert("Added Doctors Successfully");
        } else {
          alert("Something wrong");
        }
      });
  };
  return (
    <div>
      <div className="mt-5">
        {/* <h1>Please add your Doctors</h1> */}
        <div>
          <div className="d-flex justify-content-center ">
            <div className="events-card shadow-lg my-5 px-5" style={{ height: "600px" }}>
              <h3 className="py-3"> Add New Doctors </h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 p-0">
                  <div className="form-group my-4">
                    <input
                      type="text"
                      name="name"
                      onChange={handelonchange}
                      required
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Doctors Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 p-0">
                  <div className="form-group my-4">
                    <input
                      type="text"
                      name="Profession"
                      onChange={handelonchange}
                      required
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Profession"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 p-0">
                  <div className="form-group my-4">
                    <input
                      type="text"
                      name="Experience"
                      onChange={handelonchange}
                      required
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Experience"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 p-0">
                  <div className="form-group my-4">
                    <input
                      type="number"
                      name="Phone"
                      required
                      onChange={handelonchange}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Phone "
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 p-0">
                  <div className="form-group my-4">
                    <input
                      type="text"
                      name="Email"
                      onChange={handelonchange}
                      required
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Doctors Email"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 p-0">
                  <div className="form-group my-4">
                    <input
                      type="text"
                      name="Address"
                      onChange={handelonchange}
                      required
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Doctors Address"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 p-0">
                  <div className="form-group my-4">
                    <input
                      type="text"
                      name="img"
                      onChange={handelonchange}
                      required
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Doctors Image"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 p-0">
                  <div className="form-group my-4">
                    <input
                      type="text"
                      name="Biography"
                      onChange={handelonchange}
                      required
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Doctors Biography"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 p-0">
                  <div className="form-group my-4">
                    <input
                      type="text"
                      name="Education"
                      onChange={handelonchange}
                      required
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Doctors Education"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center ">
                <button type="submit" onClick={handelevent} className="appointment-btn button ">
                  Add Doctors
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
