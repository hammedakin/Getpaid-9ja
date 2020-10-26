import React from "react";

const AccountDetails = () => {
  return (
    <>
      <div class="card mb-4 h-100">
        <div class="card-body">
          <h4 class="card-title">Account Details</h4>

          <div class="">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <div class="circle"> </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <p> #1,000,000</p>
              </div>
            </div>
            <p> All Earnings</p>
            <div class="">
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <div class="circle"> </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <p> #1,000,000</p>
                </div>
              </div>
              <p> Account Balance</p>
            </div>
          </div>

          <button type="button" class="btn btn-success shadow ">
            UPGRADE
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
