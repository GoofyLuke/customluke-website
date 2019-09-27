import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-sm navbar-dark main-nav fixed-top p-2"
      style={{ backgroundColor: "#22436A" }}
    >
      <div class="container justify-content-center">
        <ul class="nav navbar-nav flex-nowrap justify-content-start w-50">
          <li className="nav-item active w-75">
            <Link className="navbar-brand p-0 m-0 text-left w-100" to="/">
              <img
                className="img-responsive"
                style={{ width: "12vw", maxWidth: "600px", minWidth: "225px" }}
                src={require("../../img/customluke-navbar.png")}
              />
            </Link>
          </li>
        </ul>
        <ul class="nav navbar-nav flex-fill justify-content-center" />
        <ul class="nav navbar-nav justify-content-end">
          <li className="nav-item active">
            <Link
              className="nav-link p-3 pr-0 navbar-contact-font"
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
