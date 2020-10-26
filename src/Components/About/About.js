import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div class="container mt-4 group about">
        <div class=" text-center">
          <div class="row ">
            <div class="col ">
              <div
                class="card  mx-auto mb-3  shadow"
                style={{ width: "18rem", height: "20rem" }}
              >
                <div class="card-body">
                  <h5 class="card-title "><strong> MISSION </strong></h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>

            <div class="col ">
              <div
                class="card  mx-auto mb-3  shadow"
                style={{ width: "18rem", height: "20rem" }}
              >
                <div class="card-body">
                  <h5 class="card-title "><strong> VISION </strong></h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>

            <div class="col ">
              <div
                class="card  mx-auto mb-3  shadow"
                style={{ width: "18rem", height: "20rem" }}
              >
                <div class="card-body">
                  <h5 class="card-title "><strong> CORE VALUES </strong></h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center my-4">
          <Link to="/signup">
            <button type="button" class="btn btn-light px-5 shadow">
              {" "}
              <strong>REGISTER </strong>{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
