import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import listCoin from "../../assets/jsonData/list_coin.json";
import Modal from "../../components/Modal/Modal";

const Dashboard = (props) => {
  const goToForm = (currency_id) => {
    props.history.push(`/admin/coin-form/${currency_id}`);
  };

  const TABLETRADINGDATA = [
    {
      id: 1,
      tanggal: "01/01/2022",
      waktu: "11:02 WIB",
      mode: "Professional",
      pair: "BTC/USDT",
      exchange: "Bincance",
      harga_beli: "1.000",
      harga_jual: "1.015",
      profit: "1,2%",
    },
  ];

  const [dataTable, setDataTable] = useState(TABLETRADINGDATA);
  const [pairItems, setPairItems] = useState([]);
  const [modal, setModal] = useState({
    message: "",
    isLoading: false,
  });
  const idCoinsRef = useRef();

  const handleModal = (message, isLoading) => {
    setModal({
      message,
      isLoading,
    });
  };
  const handleDelete = (id) => {
    handleModal("Enter the reason you did this data cut loss", true);
    console.log(id);
    idCoinsRef.current = id;
  };

  const CUTTLOSS = (choose) => {
    if (choose) {
      setDataTable(dataTable.filter((data) => data.id !== idCoinsRef.current));
      handleModal("", false);
    } else {
      handleModal("", false);
    }
  };

  const get_master_pair = () => {
    var data = JSON.stringify({
      filter: {},
      search: "",
      sort: [["currency_id", "ASC"]],
    });

    var config = {
      method: "post",
      url: "https://api.bidbox.community/api/v1/master/pair/paginate",
      headers: {
        Authorization: axios.defaults.headers.common["Authorization"],
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setPairItems(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    get_master_pair();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-sm-4">
          <ul className="list-group">
            <div className="list-group-header">List Coin</div>
            {pairItems.map((coin, index) => (
              <button
                key={index}
                onClick={() => goToForm(coin.currency_id)}
                className="list-group-item"
              >
                <div className="coin-group coin-start">
                  <i className="bx bx-star"></i>
                  <div className="coin-info">
                    <h1 className="m-0 coin-title">
                      {coin.currency_id} / <small>{coin.quote_id}</small>
                    </h1>
                    {/* <p className="m-0 coin-sm">Price: {coin.coin_price}</p>
                    <p className="m-0 coin-sm">Chg: {coin.coin_chg}</p> */}
                  </div>
                  <h1 className="m-0 coin-title ms-auto">{coin.currency_id}</h1>
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
                  <button className="btn-exchange">Exchange</button>
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
              <table className="table table-responsive table-current">
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
                  {dataTable.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <div className="t-w">
                          <span id="tanggal">{data.tanggal}</span>
                          <span id="waktu">{data.waktu}</span>
                        </div>
                      </td>
                      <td>{data.mode}</td>
                      <td>{data.pair}</td>
                      <td>{data.exchange}</td>
                      <td>{data.harga_beli}</td>
                      <td>{data.harga_jual}</td>
                      <td>{data.profit}</td>
                      <td>
                        <div className="t-w" style={{ rowGap: "5px" }}>
                          <button
                            className="btn-on-tb"
                            onClick={() => handleDelete(data.id)}
                          >
                            Cutt Loss
                          </button>
                          <button className="btn-on-tb">Cancel Buy</button>
                        </div>
                      </td>
                      <td>
                        <span className="profit-all">+ {data.profit}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {modal.isLoading && (
                <Modal
                  message={modal.message}
                  classMessage="text-message"
                  buttonAction="Cut Loss"
                  icon="fa-solid fa-exclamation"
                  typeModal="warning"
                  typeButton="delete"
                  inputText
                  onModal={CUTTLOSS}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
