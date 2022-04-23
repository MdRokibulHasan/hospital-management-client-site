import React, { useEffect, useState } from "react";

import Rating from "react-rating";

const ShowReview = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("https://vast-basin-66437.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>What People Say</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
              form.
            </p>
          </div>
        </div>
      </div>
      ;
      <div className="container">
        <div className="row">
          {reviews?.map((pd) => {
            const { rating, description, username } = pd;
            console.log(pd);
            return (
              <div key={pd._id} className="col-lg-4 col-md-4 col-12">
                <div class="card text-center m-2" style={{ heigth: "20px" }}>
                  <div class="card-body">
                    <h4>
                      <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star text-warning "
                        fullSymbol="fas fa-star text-warning "
                        readonly
                      />
                    </h4>

                    <p class="card-text text-center">{username}</p>

                    <div>
                      <p className="text-center"> {description} </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
