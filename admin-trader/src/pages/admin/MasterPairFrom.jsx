import React from "react";

const MasterPairFrom = () => {
  return (
    <div className="col-lg-6">
      <form id="form-list-coin">
        <div className="mb-2 row">
          <label htmlFor="quote-asset" className="col-sm-3 col-form-label">
            Currency ID
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Currency ID"
              // onChange={(e) => setQuoteAsset(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-2 row">
          <label htmlFor="buy-price" className="col-sm-3 col-form-label">
            Quote ID
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Quote ID"
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

export default MasterPairFrom;
