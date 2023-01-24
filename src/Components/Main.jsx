import React from "react";
import MyResponsiveLine from "./LineChart";
import MyResponsivePie from "./MyResponsivePie";
import { News } from "./News";
import MyResponsiveRadar from "./Radar";
import RecentActivity from "./RecentActivity";
import { RecentSale } from "./RecentSale";
import { TrandingSale } from "./TrandingSale";
export const Main = () => {
  return (
    <div style={{ marginLeft: "4%" }}>
      <div>
        <h2>Dashboard</h2>
        <h6>Home/Dashboard</h6>
      </div>
      <div className="MainContainer">
        <div style={{ width: "75%" }}>
          <div style={{ display: "flex", columnGap: "3%" }}>
            {/*----CARD1----*/}
            <div className="mt-3 card1">
              <span>| Today</span>
              <div
                style={{ display: "flex", columnGap: "45%", fontSize: "28px" }}
              >
                <div>
                  <button
                    class="glyphicon glyphicon-shopping-cart rounded-pill mt-3"
                    style={{
                      color: "blue",
                      fontSize: "40px",
                      padding: "25%",
                      borderStyle: "none",
                    }}
                  ></button>
                </div>
                <div>
                  <h2 style={{ color: "blue" }}>145</h2>
                  <h5>12 % increase</h5>
                </div>
              </div>
            </div>
            {/*----CARD2----*/}
            <div className="mt-3 card1">
              <span>| Today</span>
              <div
                style={{ display: "flex", columnGap: "36%", fontSize: "28px" }}
              >
                <div>
                  <button
                    class="glyphicon glyphicon-shopping-cart rounded-pill mt-3"
                    style={{
                      color: "blue",
                      fontSize: "40px",
                      padding: "25%",
                      borderStyle: "none",
                    }}
                  ></button>
                </div>
                <div>
                  <h2 style={{ color: "blue" }}>145</h2>
                  <h5>12 % increase</h5>
                </div>
              </div>
            </div>
          </div>

          {/* CUSTOMER CARD */}
          <div className="Customercard">
            <div>
              <span>Customer | This year</span>
            </div>
            <div
              style={{
                display: "flex",
                columnGap: "55%",
                fontSize: "28px",
                marginLeft: "8%",
              }}
            >
              <div>
                <button
                  className="rounded-pill"
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    padding: "19%",
                    borderStyle: "none",
                    marginTop: "35%",
                  }}
                >
                  <i class="fas fa-users" style={{ fontSize: "36px" }}></i>
                </button>
              </div>
              <div>
                <h2 style={{ color: "#446196" }}>1244</h2>
                <h4>12 % decrease</h4>
              </div>
            </div>
          </div>

          {/* </div> */}
          <div
            style={{
              height: "450px",
              width: "83%",
              marginTop: "3%",
              backgroundColor: "white",
            }}
            className="shadow"
          >
            <MyResponsiveLine />
          </div>
          <div
            style={{
              width: "83%",
              marginTop: "3%",
              padding: "4%",
              backgroundColor: "white",
            }}
            className="shadow"
          >
            <RecentSale />
          </div>
          <div
            style={{
              width: "83%",
              marginTop: "3%",
              padding: "4%",
              backgroundColor: "white",
            }}
          >
            <TrandingSale />
          </div>
        </div>
        <div style={{ width: "20%" }} className="mt-3 col-2-row2">
          <div style={{ width: "100%", marginLeft: "10%", marginTop: "-10%" }}>
            <RecentActivity />
          </div>
          <div
            style={{
              width: "140%",
              height: "400px",
              marginLeft: "-30%",
              backgroundColor: "white",
            }}
            className="shadow mb-5"
          >
            <MyResponsiveRadar />
          </div>
          <div
            className="shadow"
            style={{
              height: "400px",
              width: "140%",
              padding: "4%",
              marginLeft: "-30%",
              backgroundColor: "white",
            }}
          >
            <MyResponsivePie />
          </div>
          <div
            className="shadow mt-5"
            style={{
              padding: "4%",
              width: "140%",
              marginLeft: "-30%",
              fontSize: "1.3vw",
            }}
          >
            <News />
          </div>
        </div>
      </div>
      <hr />
      <div className="Footer">
        <footer>
          <a href="https://bootstrapmade.com/demo/NiceAdmin/">
            © Copyright NiceAdmin. All Rights Reserved
          </a>
        </footer>
      </div>
    </div>
  );
};
