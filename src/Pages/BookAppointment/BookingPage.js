import React, { useState } from "react";

const BookingPage = () => {
  const [bookData, setBookData] = useState({});
  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...bookData };
    newlogindata[field] = value;
    setBookData(newlogindata);
    // console.log(value);
  };
  // console.log(bookData);

  const handleSubmit = (e) => {
    const info = {
      ...bookData,
    };

    fetch("https://vast-basin-66437.herokuapp.com/appointment", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // const newSelected = [...reviews];
          // setReviews(newSelected);
          alert("Added Appointment Successfully");
        } else {
          alert("Something wrong");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="appointment page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div className="appointment-form">
                <div className="row">
                  <div className="col-12">
                    <div className="appointment-title">
                      <h2>Book An Appointment</h2>
                      <p></p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                      <div className="appointment-input">
                        <label for="name">
                          <i class="lni lni-user"></i>
                        </label>
                        <input onChange={handelonchange} type="text" name="name" id="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                      <div className="appointment-input">
                        <label for="email">
                          <i class="lni lni-envelope"></i>
                        </label>
                        <input onChange={handelonchange} type="email" name="email" id="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                      <div className="appointment-input">
                        <label for="number">
                          <i class="lni lni-phone-set"></i>
                        </label>
                        <input onChange={handelonchange} type="text" name="number" id="number" placeholder="Your Phone Number" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                      <div className="appointment-input">
                        <label for="department">
                          <i class="lni lni-notepad"></i>
                        </label>
                        <select onChange={handelonchange} name="department" id="department">
                          <option value="none" selected disabled>
                            Department
                          </option>
                          <option value="General Surgery">General Surgery</option>
                          <option value="Gastroenterology">Gastroenterology</option>
                          <option value="Nutrition & Dietetics">Nutrition & Dietetics</option>
                          <option value="Cardiology">Cardiology</option>
                          <option value="Neurology">Neurology</option>
                          <option value="Pediatric">Pediatric</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                      <div className="appointment-input">
                        <label for="doctor">
                          <i class="lni lni-sthethoscope"></i>
                        </label>
                        <select onChange={handelonchange} name="doctor" id="doctor">
                          <option value="none" selected disabled>
                            Doctor
                          </option>
                          <option value="Dr.Felica Queen">Dr.Felica Queen</option>
                          <option value="Dr.Alice Williams">Dr.Alice Williams</option>
                          <option value="Dr.Michael Bean">Dr.Michael Bean</option>
                          <option value="Dr.Harry Russell">Dr.Harry Russell</option>
                          <option value="Dr.Mellissa">Dr.Mellissa</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                      <div className="appointment-input">
                        {/* <label for="date"><i class="lni lni-user"></i></label> */}
                        <input onChange={handelonchange} type="date" name="date" id="date" />
                      </div>
                    </div>
                    <div className="col-12 p-o">
                      <div className="appointment-input">
                        <textarea onChange={handelonchange} name="description" placeholder="Write Your Message Here"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                      <div className="appointment-btn button">
                        <button className="btn" type="submit">
                          Get Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
