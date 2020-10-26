import React from "react";
import AccountDetails from "../Components/AccountDetails/AccountDetails";
import DashReferral from "../Components/DashReferral/DashReferral";

const Dashboard = () => {
  return (
    <>
      {/* User's Name and Referreal Link */}
<main class="whites">
      <section class="dashboard pt-5">
        <div class="container">
          <div class="fullname mb-3">
            <h2>
              <strong> Ojo Mercy </strong>
            </h2>
          </div>

          <div class="row ">
            <div class="col">
              <form class="form-inline">
                {/* <div class="form-group mb-2">
                  <label for="">Referral Link</label>
                </div> */}
                <div class="form-group mx-3 ">
                  <fieldset disabled>
                    <input
                      type="text"
                      class="form-control "
                      value="ojomercyxyz/1234"
                    />
                  </fieldset>
                </div>
                <button type="submit" class="btn  btn-success">
                  Copy Link
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* User's Name and Referreal Link */}

      {/* Dashboard Components  */}

      <section>
        <div class="container">
          <div class="row mt-5">
            <div class="col-md-6 mb-5">
            
            <AccountDetails />
       
            </div>

            <div class="col-md-6">

            <DashReferral />

            </div>
          </div>
        </div>
      </section>

     
      </main>

      {/* Dashboard Components  */}
    </>
  );
};

export default Dashboard;
