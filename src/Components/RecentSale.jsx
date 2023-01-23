import React from "react";

export const RecentSale = () => {
  return (
    <div>
      <span style={{ fontSize: "22px", color: "#95a5c3" }}>Recent Sale</span>
      <span style={{ fontSize: "20px", color: "#95a5d3", marginBottom: "5%" }}>
        | Today
      </span>
      <table class="table table-borderless mt-3">
        <thead className="table-active">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2453</th>
            <td style={{ color: "blue" }}>Brandon Jacob</td>
            <td>At praesentium minu</td>
            <td>$54</td>
            <td>
              <button className="btn btn-success rounded-pill">Approved</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td style={{ color: "blue" }}>Bridie Kessler</td>
            <td>Blanditiis dolor omnis similique</td>
            <td>$45</td>
            <td>
              <button className="btn btn-danger rounded-pill">Rejected</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td style={{ color: "blue" }}>Ashleigh Langosh</td>
            <td>At recusandae consectetur</td>
            <td>$78</td>
            <td>
              <button className="btn btn-warning rounded-pill">Pending</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
