import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CoinForm = (props) => {
  //   const params = useParams();
  useEffect(() => {
    console.log(props.match.params.id);
  }, []);

  //   console.log(props);
  return (
    <div className="col-lg-6">
      <div className="mb-2 row">
        <label htmlFor="base-asset" className="col-sm-3 col-form-label">
          Base Asset
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            placeholder="Base Asset"
            id="base-asset"
          />
        </div>
      </div>
      <div className="mb-2 row">
        <label htmlFor="quote-asset" className="col-sm-3 col-form-label">
          Quote Asset
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            placeholder="Quote Asset"
            id="quote-asset"
          />
        </div>
      </div>
      <div className="mb-2 row">
        <label htmlFor="buy-price" className="col-sm-3 col-form-label">
          Buy Price
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            placeholder="Buy Price"
            id="buy-price"
          />
        </div>
      </div>
      <div className="mb-2 row">
        <label htmlFor="sell-price" className="col-sm-3 col-form-label">
          Sell Price
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            placeholder="Sell Price"
            id="sell-price"
          />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-end">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CoinForm;
