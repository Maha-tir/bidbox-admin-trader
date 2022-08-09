import React from "react";
import { useState } from "react";

const HistoryTrading = () => {
  const [showJual, setShowJual] = useState(false);

  const contentJual = () => {
    return <h1>Hello World</h1>;
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <h1 className="dashboard-title">Riwayat Beli/Jual</h1>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-secondary btn-sm">
              Expor
            </button>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "0.15rem",
        }}
      >
        <div className="card-body">
          <div className="card-button-group">
            <button
              className={showJual ? "btn-groups" : "btn-groups active"}
              onClick={() => setShowJual(false)}
            >
              Beli
            </button>
            <button
              className={showJual ? "btn-groups active" : "btn-groups"}
              onClick={() => setShowJual(true)}
            >
              Jual
            </button>
          </div>
          <div className="row my-3">
            <div className="col-md-7">
              <div className="row">
                <div className="col-lg-4">
                  <div className="input-field">
                    <label>Crypto</label>
                    <select
                      name=""
                      id=""
                      className="form-select form-select-md"
                    >
                      <option value="">All</option>
                      <option value="">BTC/USDT</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="input-field">
                    <label>Tanggal</label>
                    <select
                      name=""
                      id=""
                      className="form-select form-select-md"
                    >
                      <option value="">30 hari terakhir</option>
                      <option value="">7 hari terakhir</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="input-field">
                    <label>Status</label>
                    <select
                      name=""
                      id=""
                      className="form-select form-select-md"
                    >
                      <option value="">Semua</option>
                      <option value="">Succes</option>
                      <option value="">Pending</option>
                      <option value="">Cut Loss</option>
                      <option value="">Buy</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="d-flex align-items-center justify-content-end gap:2"
                style={{ width: "100%", height: "100%" }}
              >
                <button className="btn">Reset</button>
                <button className="btn btn-warning">Cari</button>
              </div>
            </div>
          </div>
          <div className="card-content-table" style={{ overflowX: "auto" }}>
            {showJual ? (
              contentJual()
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr className="no-wrap text-uppercase small text-center">
                    <th>Waktu</th>
                    <th>Mode</th>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Harga Beli</th>
                    <th>Harga Jual</th>
                    <th>Persen Profit</th>
                    <th>Status</th>
                    <th>Profit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="no-wrap text-uppercase text-center">
                    <td>01/01/2020 11:00</td>
                    <td>Professional</td>
                    <td>BTC/USDT</td>
                    <td>Binance</td>
                    <td>1.00</td>
                    <td>1.015</td>
                    <td>1,5</td>
                    <td>Pending/Success/CuttLoss/Cancel/Buy</td>
                    <td>1 USDT</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTrading;
