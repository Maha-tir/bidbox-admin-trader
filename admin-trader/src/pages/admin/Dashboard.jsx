import React from "react";
import { Link } from "react-router-dom";
import listCoin from "../../assets/jsonData/list_coin.json";

const Dashboard = (props) => {
  const goToForm = (id) => {
    props.history.push(`/admin/coin-form/${id}`);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-sm-4">
          <ul className="list-group">
            <div className="list-group-header">List Coin</div>
            {listCoin.map((coin, index) => (
              <button
                key={index}
                onClick={() => goToForm(coin.id)}
                className="list-group-item"
              >
                <div className="coin-group coin-start">
                  <i className="bx bx-star"></i>
                  <div className="coin-info">
                    <h1 className="m-0 coin-title">
                      {coin.coin_title} / <small>{coin.coin_subtitle}</small>
                    </h1>
                    <p className="m-0 coin-sm">Price: {coin.coin_price}</p>
                    <p className="m-0 coin-sm">Chg: {coin.coin_chg}</p>
                  </div>
                  <h1 className="m-0 coin-title ms-auto">{coin.coin_detail}</h1>
                </div>
              </button>
            ))}
          </ul>
        </div>
        <div className="col-lg-9 col-sm-8">
          <div
            className="card card-overflow mb-3"
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "0.15rem",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3">
                  <div
                    className="coin-group"
                    style={{ justifyContent: "flex-start" }}
                  >
                    <i className="bx bx-star me-3"></i>
                    <div className="coin-info">
                      <h1 className="m-0 coin-title">
                        BTC / <small>USDT</small>
                      </h1>
                      <p className="m-0 coin-sm">Price: 3883.38</p>
                      <p className="m-0 coin-sm">Chg: -10.77%</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-1">
                    <label
                      htmlFor="buylimitprice"
                      className="form-label text-uppercase coin-md m-0"
                    >
                      Buy Limit Price
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-first"
                      id="buylimitprice"
                    />
                  </div>
                  <div className="mb-1">
                    <label
                      htmlFor="profittarget"
                      className="form-label text-uppercase coin-md m-0"
                    >
                      Profit Target
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-first"
                      id="profittarget"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <h1 className="text-uppercase coin-md m-0">Exchange</h1>
                      <div className="exchange-flex">
                        <div className="form-check form-check-sm me-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="binance"
                          />
                          <label
                            className="form-check-label text-uppercase"
                            htmlFor="binance"
                          >
                            Binance
                          </label>
                        </div>
                        <div className="form-check form-check-sm">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="tokocrypto"
                          />
                          <label
                            className="form-check-label text-uppercase"
                            htmlFor="tokocrypto"
                          >
                            Tokocrypto
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-2">
                      <h1 className="text-uppercase coin-md m-0">Mode</h1>
                      <div className="exchange-flex">
                        <div className="form-check form-check-sm me-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="standart"
                          />
                          <label
                            className="form-check-label text-uppercase"
                            htmlFor="standart"
                          >
                            Standart
                          </label>
                        </div>
                        <div className="form-check form-check-sm">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="professional"
                          />
                          <label
                            className="form-check-label text-uppercase"
                            htmlFor="professional"
                          >
                            Professional
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="all-title">Live Trading On / Open Position</h2>
          <div
            className="card card-overflow"
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "0.15rem",
            }}
          >
            <div className="card-body">
              <table className="table table-responsive">
                <thead>
                  <tr className="no-border on-custom">
                    <th>Waktu</th>
                    <th>Mode</th>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Harga Beli</th>
                    <th>Harga Jual</th>
                    <th>Profit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Waktu</td>
                    <td>Mode</td>
                    <td>Pair</td>
                    <td>Exchange</td>
                    <td>Harga Beli</td>
                    <td>Harga Jual</td>
                    <td>Profit</td>
                  </tr>
                  <tr>
                    <td>Waktu</td>
                    <td>Mode</td>
                    <td>Pair</td>
                    <td>Exchange</td>
                    <td>Harga Beli</td>
                    <td>Harga Jual</td>
                    <td>Profit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
