import React from "react";
import { Link } from "react-router-dom";

const MasterPair = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <Link
              to="/admin/master-pair-form"
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
            <th scope="col">Currency ID</th>
            <th scope="col">Quote ID</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>COTI</td>
            <td>USDT</td>
            <td>
              <div className="d-flex align-items-center" style={{ gap: "5px" }}>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger">Hapus</button>
                <button className="btn btn-sm btn-warning">Lihat</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>COTI</td>
            <td>USDT</td>
            <td>
              <div className="d-flex align-items-center" style={{ gap: "5px" }}>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger">Hapus</button>
                <button className="btn btn-sm btn-warning">Lihat</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>COTI</td>
            <td>USDT</td>
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

export default MasterPair;
