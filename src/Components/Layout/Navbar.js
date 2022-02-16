import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

export default function Navbar() {
  const [state, setState] = useState({ title: 1 });
  const handleMenu = (e) => {
    setState((state) => ({ ...state, title: e.target.id }));
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          {/* Text Logo - Use this if you don't have a graphic logo */}
          {/* <Link class="navbar-brand logo-text page-scroll" to="/">Career Craftors</Link> */}
          {/* Image Logo */}
          <Link className="navbar-brand logo-image" to="/">
            <img
              src="images/logo.png"
              alt="alternative"
              style={{ height: "5.7rem" }}
            />
          </Link>
          {/* Mobile Menu Toggle Button */}

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-collapse-id"
            aria-controls="navbar-collapse-id"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-awesome fas fa-bars" />
            <span className="navbar-toggler-awesome fas fa-times" />
          </button>
          {/* end of mobile menu toggle button */}

          <div className="collapse navbar-collapse" id="navbar-collapse-id">
            <ul className="navbar-nav ml-auto active">
              <li
                className={state.title === 1 ? "nav-item active" : "nav-item"}
                onClick={handleMenu}
                id={1}
              >
                <Link className="nav-link page-scroll" to="/">
                  HOME
                </Link>
              </li>
              <li
                className={state.title === 2 ? "nav-item active" : "nav-item"}
                onClick={handleMenu}
                id={2}
              >
                <Link className="nav-link page-scroll" to="about">
                  ABOUT US
                </Link>
              </li>
              <li
                className={state.title === 3 ? "nav-item active" : "nav-item"}
                onClick={handleMenu}
                id={3}
              >
                <Link className="nav-link page-scroll" to="coming">
                  SERVICES
                </Link>
              </li>
              <li
                className={state.title === 4 ? "nav-item active" : "nav-item"}
                onClick={handleMenu}
                id={4}
              >
                <Link className="nav-link page-scroll" to="contact">
                  CONTACT
                </Link>
              </li>
              {/* Dropdown Menu */}
              {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle page-scroll" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">EXTRA</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="article-details.html"><span className="item-text">ARTICLE DETAILS</span></a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
                                </div>
                            </li> */}
              {/* end of dropdown menu */}
            </ul>
            {/* <span className="nav-item">
                            <a className="btn-outline-sm page-scroll" href="#download">DOWNLOAD</a>
                        </span> */}
          </div>
        </div>{" "}
        {/* end of container */}
      </nav>

      {/* end of navbar */}
    </React.Fragment>
  );
}
