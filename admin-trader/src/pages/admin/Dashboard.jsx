import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import listCoin from "../../assets/jsonData/list_coin.json";
import { Centrifuge } from "centrifuge";
import Modal from "../../components/Modal/Modal";
import { connect, useDispatch, useSelector } from "react-redux";
import { pairSuccess, pairUpdate } from "../../redux/actions/pairAction";
import { signalSuccess, signalUpdate } from "../../redux/actions/signalAction";
import toast from "react-hot-toast";
const Dashboard = (props) => {
    const auth = useSelector((state) => state.auth);
    const signal = useSelector((state) => state.signal);
    const dispatch = useDispatch();
    const [pairAvailable, setPairAvailable] = useState(null);
    const [signalAvailable, setSignalAvailable] = useState(null);
    let centrifuge = useRef(null);
    const goToForm = (currency_id) => {
        props.history.push(`/admin/coin-form/${currency_id}`);
    };
    const [priceBuy, setPriceBuy] = useState(0);
    const [priceSell, setPriceSell] = useState(0);
    const [priceSellPercent, setPriceSellPercent] = useState(0);
    const [priceSellFocus, setPriceSellFocus] = useState(false);
    const [priceSellPercentFocus, setPriceSellPercentFocus] = useState(false);

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
    const pair = useSelector((state) => state.pair);
    let pairSelected = useRef({
        base_asset: "",
        quote_asset: "",
        price: 0,
        price_change: 0,
    });
    const [pairSelectedAsset, setPairSelectedAsset] = useState({
        base_asset: "",
        quote_asset: "",
    });
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
        idCoinsRef.current = id;
    };

    const CUTTLOSS = (choose) => {
        if (choose) {
            setDataTable(
                dataTable.filter((data) => data.id !== idCoinsRef.current)
            );
            handleModal("", false);
        } else {
            handleModal("", false);
        }
    };

    const toFixedIfNecessary = (value, dp) => {
        return +parseFloat(value).toFixed(dp);
    };
    const get_master_pair = () => {
        var data = JSON.stringify({
            filter: {},
            search: "",
            sort: [["currency_id", "ASC"]],
        });

        var config = {
            method: "get",
            url: "https://apigateway.bidbox.community/site/market-pairs",
            // url: "https://api.bidbox.community/api/v1/master/pair/paginate",
            headers: {
                // Authorization: axios.defaults.headers.common["Authorization"],
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                let data = response.data.market_pairs;
                data.forEach((element) => {
                    element.symbol = `${element.base_currency}${element.quote_currency}`;
                    element.currency_id = element.base_currency;
                    element.quote_id = element.quote_currency;
                    element.price = 0;
                    element.price_chg = 0;
                });
                dispatch(pairSuccess(data));
                setPairAvailable(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        get_master_pair();
        get_load_signal();
    }, []);
    const get_load_signal = () => {
        var data = JSON.stringify({
            filter: {},
            search: "",
            sort: [["id", "DESC"]],
        });

        var config = {
            method: "post",
            url: "https://api.bidbox.community/api/v1/signal-trader/paginate",
            headers: {
                Authorization: axios.defaults.headers.common["Authorization"],
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                let data = response.data.items;
                const months = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ];
                data.forEach((element) => {
                    let date = new Date(parseInt(element.created_at));
                    element.date =
                        date.getDate() +
                        "-" +
                        months[date.getMonth()] +
                        "-" +
                        date.getFullYear();
                    element.time =
                        date.getHours() +
                        ":" +
                        date.getMinutes() +
                        ":" +
                        date.getSeconds();
                });
                dispatch(signalSuccess(data));
                setSignalAvailable(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        centrifuge.current = new Centrifuge(process.env.REACT_APP_WS_URL, {
            token: process.env.REACT_APP_TOKEN_CENTRIFUGE,
        });

        // Allocate Subscription to a channel.
        centrifuge.sub = centrifuge.current.newSubscription(
            "cfPriceChangeBinance"
        );

        // Trigger subscribe process.
        centrifuge.sub.subscribe();

        // Trigger actual connection establishement.
        centrifuge.current.connect();
        centrifuge.sub.on("subscribed", (ctx) => {
            centrifuge.status = "subscribed";
        });
        centrifuge.sub.on("subscribing", (ctx) => {
            centrifuge.status = "subscribing";
        });
        centrifuge.sub.on("unsubscribed", (ctx) => {
            centrifuge.status = "unsubscribed";
        });
        centrifuge.sub.on("publication", function (ctx) {
            const data = ctx.data;
            signal.data.forEach((signal) => {
                data.forEach((el) => {
                    const symbol = el.symbol;
                    const signal_symbol = `${signal.base_asset}${signal.quote_asset}`;
                    if (signal_symbol === symbol) {
                        if (el.price_change === undefined) el.price_change = 0;
                        const modal = signal.buy_price;
                        const jual = el.price;
                        const laba = jual - modal;
                        const profit_persen = toFixedIfNecessary(
                            (laba / modal) * 100,
                            8
                        );
                        signal.profit_percent = profit_persen;
                        signal.profit = laba;
                        signal.profit = toFixedIfNecessary(signal.profit, 8);
                        dispatch(signalUpdate(signal));
                        console.log(modal, jual, laba);
                    }
                });
            });
        });
    }, [signalAvailable]);
    useEffect(() => {
        centrifuge.current = new Centrifuge(process.env.REACT_APP_WS_URL, {
            token: process.env.REACT_APP_TOKEN_CENTRIFUGE,
        });

        // Allocate Subscription to a channel.
        centrifuge.sub = centrifuge.current.newSubscription(
            "cfPriceChangeBinance"
        );

        // Trigger subscribe process.
        centrifuge.sub.subscribe();

        // Trigger actual connection establishement.
        centrifuge.current.connect();
        centrifuge.sub.on("subscribed", (ctx) => {
            centrifuge.status = "subscribed";
        });
        centrifuge.sub.on("subscribing", (ctx) => {
            centrifuge.status = "subscribing";
        });
        centrifuge.sub.on("unsubscribed", (ctx) => {
            centrifuge.status = "unsubscribed";
        });
        centrifuge.sub.on("publication", function (ctx) {
            const data = ctx.data;
            pair.data.forEach((pair) => {
                data.forEach((el) => {
                    const symbol = el.symbol;
                    if (pair.symbol === symbol) {
                        if (el.price_change === undefined) el.price_change = 0;
                        const price = el.price;
                        const price_change = el.price_change;
                        pair.price = toFixedIfNecessary(price, 2);
                        pair.price_chg = toFixedIfNecessary(price_change, 2);
                        dispatch(
                            pairUpdate({
                                symbol: symbol,
                                price: price,
                                price_chg: price_change,
                            })
                        );
                        if (pairSelected.base_asset === "") {
                            pairSelected.base_asset = pair.currency_id;
                            pairSelected.quote_asset = pair.quote_id;
                            pairSelected.price = price;
                            pairSelected.price_chg = price_change;
                        } else if (
                            `${pairSelected.base_asset}${pairSelected.quote_asset}` ===
                            symbol
                        ) {
                            pairSelected.base_asset = pair.currency_id;
                            pairSelected.quote_asset = pair.quote_id;
                            pairSelected.price = price;
                            pairSelected.price_chg = price_change;
                        }
                    }
                });
            });
        });
    }, [pairAvailable]);
    const changePriceSellPercent = (val) => {
        if (
            parseFloat(priceBuy) > 0 &&
            priceBuy !== "" &&
            val !== "" &&
            parseFloat(val) > 0 &&
            priceSellPercentFocus
        ) {
            setPriceSellPercent(val);
            setPriceSell(
                parseFloat((val / 100) * priceBuy) + parseFloat(priceBuy)
            );
        } else if (priceSellPercentFocus) {
            setPriceSellPercent(val);
            setPriceSell("");
        }
    };
    const changePriceSell = (val) => {
        if (
            parseFloat(priceBuy) > 0 &&
            priceBuy !== "" &&
            val !== "" &&
            parseFloat(val) > 0 &&
            priceSellFocus
        ) {
            setPriceSell(val);
            setPriceSellPercent(((val - priceBuy) / priceBuy) * 100);
        } else if (priceSellFocus) {
            setPriceSell(val);
            setPriceSellPercent("");
        }
    };
    const publishSignal = () => {
        if (pairSelectedAsset.base_asset === "") {
            toast("Please select coin");
            return;
        }
        if (priceBuy === "" || parseFloat(priceBuy) <= 0) {
            toast("Please enter the buy price");
            return;
        }
        if (priceSell === "" || parseFloat(priceSell) <= 0) {
            toast("Please enter the sell price");
            return;
        }
        var data = JSON.stringify({
            base_asset: pairSelectedAsset.base_asset,
            quote_asset: pairSelectedAsset.quote_asset,
            buy_price: priceBuy,
            sell_price: priceSell,
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
                get_load_signal();
                toast("send signal successful");
            })
            .catch(function (error) {
                toast(error.response.data.message);
            });
    };
    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-sm-4">
                    <ul className="list-group">
                        <div className="list-group-header">List Coin</div>
                        {pair.data.map((coin, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setPairSelectedAsset({
                                        base_asset: coin.currency_id,
                                        quote_asset: coin.quote_id,
                                    });
                                    pairSelected.base_asset = coin.currency_id;
                                    pairSelected.quote_asset = coin.quote_id;
                                    setPriceBuy(coin.price);
                                }}
                                className="list-group-item"
                            >
                                <div className="coin-group coin-start">
                                    <i className="bx bx-star"></i>
                                    <div className="coin-info">
                                        <h1 className="m-0 coin-title">
                                            {coin.currency_id} /{" "}
                                            <small>{coin.quote_id}</small>
                                        </h1>
                                        <p className="m-0 coin-sm">
                                            Price: {coin.price}
                                        </p>
                                        <p className="m-0 coin-sm">
                                            Chg:{" "}
                                            <span
                                                style={
                                                    coin.price_chg < 0
                                                        ? { color: "red" }
                                                        : { color: "green" }
                                                }
                                            >
                                                {coin.price_chg}%
                                            </span>
                                        </p>
                                    </div>
                                    <h1 className="m-0 coin-title ms-auto">
                                        {coin.currency_id}
                                    </h1>
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
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flex: "50%",
                                                    }}
                                                >
                                                    <input
                                                        type="text"
                                                        className="form-control-first form-control"
                                                        style={{
                                                            width: 70,
                                                            marginRight: 5,
                                                        }}
                                                        onChange={(e) => {
                                                            setPairSelectedAsset(
                                                                {
                                                                    base_asset:
                                                                        e.target
                                                                            .value,
                                                                    quote_asset:
                                                                        pairSelectedAsset.quote_asset,
                                                                }
                                                            );
                                                        }}
                                                        value={
                                                            pairSelectedAsset.base_asset
                                                        }
                                                    />
                                                    /
                                                    <small
                                                        style={{
                                                            marginLeft: 5,
                                                        }}
                                                    >
                                                        {
                                                            pairSelectedAsset.quote_asset
                                                        }
                                                    </small>
                                                </div>
                                            </h1>
                                            <p className="m-0 coin-sm">
                                                Price: {pairSelected.price}
                                            </p>
                                            <p className="m-0 coin-sm">
                                                Chg:{" "}
                                                <span
                                                    style={
                                                        pairSelected.price_chg <
                                                        0
                                                            ? { color: "red" }
                                                            : { color: "green" }
                                                    }
                                                >
                                                    {pairSelected.price_chg}%
                                                </span>
                                            </p>
                                            <button className="btn-exchange">
                                                View Chart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="mb-1">
                                        <label
                                            htmlFor="buylimitprice"
                                            className="form-label text-uppercase coin-md m-0"
                                        >
                                            Buy Limit Price
                                        </label>
                                        <input
                                            type="number"
                                            value={priceBuy}
                                            onChange={(e) =>
                                                setPriceBuy(e.target.value)
                                            }
                                            placeholder="Price Buy"
                                            className="form-control form-control-first"
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="profittarget"
                                            className="form-label text-uppercase coin-md m-0"
                                        >
                                            Profit Target
                                        </label>
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <input
                                                    type="number"
                                                    value={priceSell}
                                                    placeholder="Price Sell"
                                                    onFocus={() =>
                                                        setPriceSellFocus(true)
                                                    }
                                                    onBlur={() =>
                                                        setPriceSellFocus(false)
                                                    }
                                                    onChange={(e) =>
                                                        changePriceSell(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="form-control form-control-first"
                                                />
                                            </div>
                                            <div className="col-lg-5">
                                                <input
                                                    type="number"
                                                    value={priceSellPercent}
                                                    placeholder="(%)"
                                                    onFocus={() =>
                                                        setPriceSellPercentFocus(
                                                            true
                                                        )
                                                    }
                                                    onBlur={() =>
                                                        setPriceSellPercentFocus(
                                                            false
                                                        )
                                                    }
                                                    onChange={(e) =>
                                                        changePriceSellPercent(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="form-control form-control-first"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="btn-exchange"
                                            onClick={publishSignal}
                                        >
                                            Publish
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-7"
                                    style={{ marginTop: 10 }}
                                >
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <h1 className="text-uppercase coin-md m-0">
                                                Exchange
                                            </h1>
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
                                        {/* <div className="col-lg-5">
                                            <h1 className="text-uppercase coin-md m-0">
                                                Mode
                                            </h1>
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="all-title">
                        Live Trading On / Open Position
                    </h2>
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
                                    {signal.data.map((data, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="t-w">
                                                    <span id="tanggal">
                                                        {data.date}
                                                    </span>
                                                    <span id="waktu">
                                                        {data.time}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>{data.mode}</td>
                                            <td>{`${data.base_asset}/${data.quote_asset}`}</td>
                                            <td>{data.exchange_name}</td>
                                            <td>{data.buy_price}</td>
                                            <td>{data.sell_price}</td>
                                            <td>
                                                <span
                                                    style={
                                                        data.profit > 0
                                                            ? { color: "green" }
                                                            : data.profit < 0
                                                            ? { color: "red" }
                                                            : {}
                                                    }
                                                >
                                                    {data.profit}
                                                </span>
                                            </td>
                                            <td>
                                                <div
                                                    className="t-w"
                                                    style={{ rowGap: "5px" }}
                                                >
                                                    {data.status === 5 && (
                                                        <button
                                                            className="btn-on-tb"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    data.id
                                                                )
                                                            }
                                                        >
                                                            Cutt Loss
                                                        </button>
                                                    )}

                                                    {data.status === 1 && (
                                                        <button className="btn-on-tb">
                                                            Cancel Buy
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                <span
                                                    className="profit-all"
                                                    style={
                                                        data.profit_percent < 0
                                                            ? {
                                                                  color: "red",
                                                                  fontSize: 12,
                                                              }
                                                            : data.profit_percent >
                                                              0
                                                            ? {
                                                                  color: "green",
                                                                  fontSize: 12,
                                                              }
                                                            : {
                                                                  color: "grey",
                                                                  fontSize: 12,
                                                              }
                                                    }
                                                >
                                                    {data.profit_percent}%
                                                </span>
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
