import React from "react";

const ProfitTrading = () => {
  const dataTable = [
    {
      id: 1,
      tanggal: "28-04-2022 4:44",
      pasangan: "SHIB/USDT",
      sisi: "Beli",
      harga: "0,00002222",
      dieksekusi: "10.000.000,00000000",
      biaya: "23,456,02000000",
      jumlah: "9.976.543,98000000",
      totalUSDT: "222,20000000",
      profit_loss: "5,28",
      totalProfitUSDT: "11,74995633",
    },
  ];
  return (
    <div>
      {" "}
      <div className="row">
        <div className="col-md-6">
          <p className="nav-crumbs">Profit Trading</p>
        </div>
        <div className="col-md-6"></div>

        <div
          className="card"
          style={{
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "0.15rem",
          }}
        >
          <div
            className="card-header bg-transparent p-0"
            style={{ border: "1px solid transparent" }}
          >
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
          </div>
          <div className="content-tabs active" style={{ overflowX: "auto" }}>
            <table className="table table-bordered">
              <thead>
                <tr className="no-wrap text-uppercase small text-center">
                  <th>Tanggal</th>
                  <th>Pasangan</th>
                  <th>Sisi</th>
                  <th>Harga</th>
                  <th>Dieksekusi</th>
                  <th>Biaya</th>
                  <th>Jumlah</th>
                  <th>Total USDT</th>
                  <th>Profit/Loss %</th>
                  <th>Total Profit USDT</th>
                </tr>
              </thead>
              {dataTable.length >= 1 ? (
                <tbody>
                  {dataTable.map((data, idx) => (
                    <tr
                      key={idx}
                      className="no-wrap text-uppercase text-center"
                    >
                      <td>{data.tanggal}</td>
                      <td>{data.pasangan}</td>
                      <td>{data.sisi}</td>
                      <td>{data.harga}</td>
                      <td>{data.dieksekusi}</td>
                      <td>{data.biaya}</td>
                      <td>{data.jumlah}</td>
                      <td>{data.totalUSDT}</td>
                      <td>{data.profit_loss}</td>
                      <td>{data.totalProfitUSDT}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <div className="not-found-elm">
                  {/* <img src={noData} alt="_error-not-found" /> */}
                  <p>Tidak ada data</p>
                </div>
              )}
            </table>
          </div>
        </div>
        <div className="nav justify-content-end p-3">
          <span
            className="py-1 px-3 text-uppercase"
            style={{
              background: "#ff933b",
              borderRadius: "0.25rem",
              border: "1px solid #000000",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Total Profit
          </span>
          <span
            className="py-1 px-3 mx-2 text-uppercase"
            style={{
              background: "#c7c3c0",
              borderRadius: "0.25rem",
              border: "1px solid #000000",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            %
          </span>
          <span
            className="py-1 px-3 text-uppercase"
            style={{
              background: "#c7c3c0",
              borderRadius: "0.25rem",
              border: "1px solid #000000",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            ... USDT
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfitTrading;
