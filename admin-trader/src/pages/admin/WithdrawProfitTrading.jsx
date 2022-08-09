import React from "react";

const WithdrawProfitTrading = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <p
            className="nav-crumbs text-uppercase"
            style={{ fontSize: "25px", fontWeight: "500" }}
          >
            WithDraw
          </p>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="col-lg-9">
        <div className="card-body">
          <div className="mb-3 row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontSize: "14px" }}
            >
              Chain Name
            </label>
            <div className="col-sm-9">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontSize: "14px" }}
            >
              Withdrawal Address
            </label>
            <div className="col-sm-9">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontSize: "14px" }}
            >
              Withdrawal Quantity
            </label>
            <div className="col-sm-9">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              className="col-lg-8 col-form-label"
              style={{ fontSize: "14px" }}
            >
              Available : 37
            </label>
          </div>
          <div className="mb-3 row">
            <label
              className="col-lg-8 text-danger"
              style={{ fontSize: "14px" }}
            >
              Minimum Withdrawal Quantity is 12 USDT
            </label>
          </div>
          <hr />
          <div className="mb-3 row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontSize: "14px" }}
            >
              Transaction Fees:
            </label>
            <div className="col-sm-9">
              <label className="col-form-label" style={{ fontSize: "14px" }}>
                2
              </label>
            </div>
          </div>
          <div className="mb-3 row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontSize: "14px" }}
            >
              Recieve Amount:
            </label>
            <div className="col-sm-9">
              <label className="col-form-label"></label>
            </div>
          </div>
          <div className="mb-3 row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontSize: "14px" }}
            >
              OTP
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP here"
              />
            </div>
          </div>
          <div className="nav justify-content-end">
            <button className="sch-view me-2">Send Code</button>
            <button className="sch-view">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawProfitTrading;
