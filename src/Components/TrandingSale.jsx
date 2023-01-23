import React from "react";
import watch from "../Images/watch.avif";
import headphone from "../Images/headphone.jpg";
import drop from "../Images/drop.jpg";
import shoe from "../Images/shoe.jpg";
export const TrandingSale = () => {
  return (
    <div>
      <span style={{ fontSize: "22px", color: "#95a5c3" }}>Recent Sale</span>
      <span style={{ fontSize: "20px", color: "#95a5d3", marginBottom: "5%" }}>
        | Today
      </span>
      <table class="table table-borderless mt-3" style={{fontSize:"1.4vw"}}>
        <thead className="table-active">
          <tr>
            <th scope="col">Preview</th>
            <th scope="col">Customer</th>
            <th scope="col">Product</th>
            <th scope="col">Sold</th>
            <th scope="col">Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="w-25">
              <img src={shoe} className="rounded-pill productImage" alt="" />
            </th>
            <td style={{color:"blue"}}>Ut inventore ipsa voluptas nulla</td>
            <td>$64</td>
            <td>124</td>
            <td>$54</td>
          </tr>
          <tr>
            <th className="w-25">
              <img src={watch} className="rounded-pill productImage" alt="" />
            </th>
            <td style={{color:"blue"}}>Exercitationem similique doloremque</td>
            <td>$46</td>
            <td>145</td>
            <td>$140</td>
          </tr>
          <tr>
            <th className="w-25">
              <img src={drop} className="rounded-pill productImage" alt="" />
            </th>
            <td style={{color:"blue"}}>Officiis quaerat sint rerum error</td>
            <td>$58</td>
            <td>452</td>
            <td>$78</td>
          </tr>
          <tr>
            <th className="w-25">
              <img
                src={headphone}
                className="rounded-pill productImage"
                alt=""
              />
            </th>
            <td style={{color:"blue"}}>Doloribus nisi exercitationem</td>
            <td>$63</td>
            <td>126</td>
            <td>$79</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
