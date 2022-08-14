import React from "react";

const MasterTrader = () => {
  return (
    <div className="col-lg-6">
      <form id="form-list-coin">
        <div className="mb-2 row">
          <label htmlFor="quote-asset" className="col-sm-3 col-form-label">
            Username
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              // onChange={(e) => setQuoteAsset(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="buy-price" className="col-sm-3 col-form-label">
            Full Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              // onChange={(e) => setBuyPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="buy-price" className="col-sm-3 col-form-label">
            No Phone
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="No Phone"
              // onChange={(e) => setBuyPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="buy-price" className="col-sm-3 col-form-label">
            Email Address
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              // onChange={(e) => setBuyPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="buy-price" className="col-sm-3 col-form-label">
            Password
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              // onChange={(e) => setBuyPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="buy-price" className="col-sm-3 col-form-label">
            USDT Address
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="USDT Address"
              // onChange={(e) => setBuyPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn btn-dark"
          >
            Back
          </button>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MasterTrader;
