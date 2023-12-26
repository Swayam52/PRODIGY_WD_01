import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const Navbar = () => {
  const scrollToSection1 = () => {
    const targetSection = document.getElementById("products");
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection2 = () => {
    const targetSection = document.getElementById("features");
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow my-header">
      <div className="container-fluid my-navbar">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Thrifty Fashionista" className="my-logo" />
        </a>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item my-nav-items">
            <a onClick={scrollToSection1} className="nav-link my-link" href="#">
              Featured Products
            </a>
          </li>
          <li className="nav-item my-nav-items">
            <a onClick={scrollToSection2} className="nav-link my-link" href="#">
              Our Features
            </a>
          </li>
          <li className="nav-item my-nav-items">
            <a className="nav-link my-link" href="#">
              <FontAwesomeIcon icon={faUser} /> Login
            </a>
          </li>
          <li className="nav-item my-nav-items">
            <a className="nav-link my-link" href="#">
              <FontAwesomeIcon icon={faBagShopping} /> Bag
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
