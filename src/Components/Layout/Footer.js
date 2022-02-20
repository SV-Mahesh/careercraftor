import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <React.Fragment>
      {/* Footer */}
      <div className="footer">
        {/* <div className="footer" style={{ bottom: '50px', position: 'fixed', width: '100%' }}> */}
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <h5>About Career Craftors</h5>
                <p className="p-small text-justify">
                  We are extremely proud to launch the firm with a social motto
                  of serving the society and the student community as a whole
                  and shall strive to continue providing excellence in our
                  processes and services.The purpose is to help is to help
                  create a niche path for students and professionals to choose
                  the right direction.
                </p>
              </div>{" "}
              {/* end of footer-col */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5>Contact Info</h5>
                <ul className="list-unstyled li-space-lg p-small">
                  <li className="media">
                    <i className="fas fa-map-marker-alt" />
                    <div className="media-body">
                      8/16, Marayapuram, Kappucaud, Kanyakumari - 629 162
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-envelope" />
                    <div className="media-body">info@careercraftors.com </div>
                    {/* <div className="media-body">info@careercraftors.com</div> */}
                  </li>
                  <li className="media">
                    <i className="fas fa-phone-alt" />
                    <div className="media-body">+91 78100 83072</div>
                  </li>
                </ul>
              </div>{" "}
              {/* end of footer-col */}
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5>Value Links</h5>
                <ul className="list-unstyled li-space-lg p-small">
                  <li>
                    <a href="terms-conditions.html">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
                <div className="col-sm-12">
                  <a
                    href="https://www.facebook.com/profile.php?id=100078336843260 "
                    target="_blank"
                  >
                    <span className="fa-stack">
                      {/* <a href="#your-link"> */}
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-facebook-f fa-stack-1x" />
                      {/* </a> */}
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/career-craftors-646766128/"
                    target="_blank"
                  >
                    <span className="fa-stack">
                      {/* <a href="#your-link"> */}
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-linkedin fa-stack-1x" />
                      {/* </a> */}
                    </span>
                  </a>

                  <span className="fa-stack">
                    {/* <a href="#your-link"> */}
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-instagram fa-stack-1x" />
                    {/* </a> */}
                  </span>
                </div>{" "}
                {/* end of footer-col */}
              </div>{" "}
              {/* end of footer-col */}
              {/* <div className="footer-col fourth">
                                <h5>Other Apps</h5>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li><a href="#your-link">Scientific Calculator</a></li>
                                    <li><a href="#your-link">Advanced Timer</a></li>
                                    <li><a href="#your-link">Music Store</a></li>
                                </ul>
                            </div>  */}
              {/* end of footer-col */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of footer */}
      {/* end of footer */}
      {/* Copyright */}
      <div
        className="copyright"
        style={{
          bottom: "0",
          padding: "20px",

          width: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Copyright © 2022 Career Craftors - All rights reserved
              </p>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* enf of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of copyright */}
      {/* end of copyright */}
    </React.Fragment>
  );
}
