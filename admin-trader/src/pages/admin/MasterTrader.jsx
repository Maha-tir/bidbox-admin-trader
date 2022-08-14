import React from "react";
import { Link } from "react-router-dom";
const MasterTrader = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <Link
              to="/admin/master-trader-form"
              className="btn btn-dark d-flex align-items-center"
            >
              <i className="bx bx-plus me-1"></i> Add data
            </Link>

            <div className="m-0">
              <input
                type="search"
                className="form-control form-control-first"
                style={{ fontSize: "0.896rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Full Name</th>
            <th scope="col">No Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">USDT Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>jason</td>
            <td>Jason</td>
            <td>xxx-xxx-xxx</td>
            <td>stephanus_jason@gmail.com</td>
            <td>********</td>
            <td>-</td>
            <td>
              <div className="d-flex align-items-center" style={{ gap: "5px" }}>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger">Hapus</button>
                <button className="btn btn-sm btn-warning">Lihat</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MasterTrader;
