import React from "react";
import logo from "../Images/logo.png";
import profile from "../Images/profile.png";
import Sidebar from "./Sidebar";
export const Navbar = () => {
  const MenuClickHandler = () => {};
  return (
    <div className="NavbarContainer">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src={logo} alt="" />
          <Sidebar />
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
  );
};
