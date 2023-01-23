import React from "react";
import logo from "../Images/logo.png";
import profile from "../Images/profile.png";
export const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src={logo} alt="" />

          <button
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="//">
                  <span class="glyphicon" style={{ fontSize: "25px" }}>
                    &#xe236;
                  </span>
                </a>
              </li>
              {/* <li class="nav-item"> */}
              <div className="mt-3 mx-3 w-150">
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>

              {/* <a class="nav-link" href="#">
                  Link
                </a> */}
              {/* </li> */}
            </ul>
            <div
              style={{ display: "flex", columnGap: "10%", marginLeft: "70%" }}
              className="mt-3"
            >
              <div>
                {/* <button type="button" class="btn btn-light position-relative"> */}
                <i
                  class="material-icons position-relative"
                  style={{ fontSize: "36px" }}
                >
                  notifications_none
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    4<span class="visually-hidden">unread messages</span>
                  </span>
                </i>
                {/* </button> */}
              </div>
              <div>
                <i class="material-icons" style={{ fontSize: "36px" }}>
                  chat_bubble_outline
                </i>
              </div>
              <div className="w-25" style={{ display: "flex" }}>
                <img src={profile} alt="" className="profile " />
                <a href="//" className="mt-3" style={{ fontSIze: "20px" }}>
                  K.anderson
                </a>
              </div>
            </div>

            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
