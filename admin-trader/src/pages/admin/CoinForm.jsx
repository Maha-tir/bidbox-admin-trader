import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signalAdd } from "../../redux/actions/signalAction";

import axios from "axios";

const CoinForm = (props) => {
  const [baseAsset, setBaseAsset] = useState("");
  const [quoteAsset, setQuoteAsset] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props.match);
    setBaseAsset(props.match.params.currency_id);
  }, []);

  const POSTSIGNALTRADER = (e) => {
    e.preventDefault();
    dispatch(signalAdd(baseAsset, quoteAsset, buyPrice, sellPrice, history));
  };
  return (
    <div className="col-lg-6">
      <form onSubmit={POSTSIGNALTRADER} id="form-list-coin">
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
              value={baseAsset}
              readOnly
              required
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
              onChange={(e) => setQuoteAsset(e.target.value)}
              required
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
              onChange={(e) => setBuyPrice(e.target.value)}
              required
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
              onChange={(e) => setSellPrice(e.target.value)}
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

export default CoinForm;
