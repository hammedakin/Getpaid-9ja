import React from "react";
import img from "./Group 2.png";

const Showcase = () => {
  return (
    <>
      <section class="showcase">
        <div class="container align-content-center ">
          <div class="row pt-5 text-white">
            <div class="col-lg-4 mr-auto text-justify">
              <h4>WELCOME TO </h4>
              <h1>
                {" "}
                <strong>GetPaidNaija.com </strong>
              </h1>
              <p>
                {" "}
                Nigeria’s no.1 earning platform that gurantees your account
                whille you work from home
              </p>
              <button type="button" class="btn btn-light mt-3 shadow ">
                {" "}
                <strong>GET STARTED </strong>{" "}
              </button>
            </div>

            <div class="col-lg-6 mt-3 ">
              <div class=" justify-content-center ">
                <img src={img} width="300rem" class="mx-auto d-block" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
