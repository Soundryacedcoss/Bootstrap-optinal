import React from "react";
import MyResponsiveLine from "./LineChart";
import MyResponsivePie from "./MyResponsivePie";
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
          {/* <div> */}
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
              width: "63%",
              marginTop: "3%",
              backgroundColor: "white",
            }}
            className="shadow"
          >
            <MyResponsiveLine />
          </div>
          <div
            style={{
              width: "63%",
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
              width: "63%",
              marginTop: "3%",
              padding: "4%",
              backgroundColor: "white",
            }}
          >
            <TrandingSale />
          </div>
          
        </div>
        <div style={{ width: "20%" }} className="mt-3">
          <div style={{marginLeft:"-10%",width:"20%"}}>
          <RecentActivity/>
          </div>
          
     
          <div
            className="shadow"
            style={{
              height: "400px",
              width: "110%",
              padding: "4%",
              marginLeft: "-9%",
              backgroundColor: "white",
            }}
          >
            <MyResponsivePie />
          </div>
        </div>
      </div>
    </div>
  );
};
