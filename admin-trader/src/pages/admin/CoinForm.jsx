import React from "react";
import { useEffect } from "react";
import axios from "axios";

const CoinForm = (props) => {
  const create_signal = () => {
    var data = JSON.stringify({
      base_asset: "TRX",
      quote_asset: "USDT",
      buy_price: 0.06449,
      sell_price: 0.065,
      exchange_id: 1,
    });

    var config = {
      method: "post",
      url: "https://api.bidbox.community/api/v1/signal-trader",
      headers: {
        Authorization: axios.defaults.headers.common["Authorization"],
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    // console.log(props.match);
    // create_signal();
  }, []);

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
