import React, { useState } from "react";
import logo from "../Images/logo.png";
import profile from "../Images/profile.png";
import Sidebar from "./Sidebar";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main").style.transition = "0.5s";
  };
  const handleShow = () => {
    setShow(true);
    document.getElementById("main").style.marginLeft = "300px";
    document.getElementById("main").style.transition = "0.5s";
  };
  const MenuClickHandler = () => {};
  return (
    <>
      <div className="NavbarContainer" id="Navbar" fixed="top">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <img src={logo} alt="" />
            <i
              onClick={handleShow}
              style={{
                fontSize: "27px",
                color: "blue",
                marginRight: "1em",
                cursor: "pointer",
              }}
              class="fas fa-bars"
            ></i>
            <Offcanvas
              style={{ marginTop: "5em", width: "21em", color: "#00296f" }}
              show={show}
              onHide={handleClose}
              scroll={true}
            >
              <div style={{ padding: "4%", width: "100%" }} id="SideBar">
                <Sidebar />
              </div>
            </Offcanvas>
            <button
              onClick={MenuClickHandler}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="mt-3 mx-3 w-150">
                  <form class="d-flex mt-3">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </ul>
              <div
                style={{ display: "flex", columnGap: "10%", marginLeft: "70%" }}
                className="mt-3"
              >
                <button type="button" class="btn btn-light position-relative">
                  <i class="material-icons" style={{ fontSize: "36px" }}>
                    notifications_none
                  </i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    9<span class="visually-hidden">unread messages</span>
                  </span>
                </button>

                <button type="button" class="btn btn-light position-relative">
                  <i class="material-icons" style={{ fontSize: "36px" }}>
                    chat_bubble_outline
                  </i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    9<span class="visually-hidden">unread messages</span>
                  </span>
                </button>
                <div className="w-25" style={{ display: "flex" }}>
                  <img src={profile} alt="" className="profile " />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
