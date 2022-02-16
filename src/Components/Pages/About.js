import React, { useState } from "react";
import axios from "axios";
import "./Pages.css";

export default function About() {
  return (
    <div>
      <div id="description" className="basic-1" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container ">
                <img
                  style={{ height: "120%" }}
                  className="img-fluid about-image-container "
                  src="images/about-us-top.png"
                  alt="alternative"
                />
              </div>{" "}
              {/* end of image-container */}
            </div>{" "}
            {/* end of col */}
            <div className="col-lg-6">
              <div className="text-container" style={{ textAlign: "justify" }}>
                <h2 style={{ color: "#F76E11" }}>We Are Career Craftors</h2>
                <p>
                  Career Craftors has a long history of connecting opportunities
                  at great companies with highly skilled job seekers. Bolstered
                  by the strength of our brand, people, technology, and
                  professional business model, we find substantial and exciting
                  employment for the candidates we place. Also, provide clients
                  access to the specialized talent they need to help grow their
                  businesses.
                </p>

                <p>
                  We were the first to introduce the concept of professional
                  talent solutions, and as the needs of businesses have changed,
                  so have we. Our management team saw the value in shifting to a
                  more specialized talent solutions strategy and began hiring
                  contract workers with greater skill levels.
                </p>

                <p>
                  Our clients and candidates found value in professional-level
                  talent solutions, which is why we launched a series of
                  contract professional staffing divisions in the finance and
                  accounting, legal, creative and marketing, technology, and
                  administrative fields. Local businesses of all sizes turn to
                  Career Kraftors for our personalized recruitment approach and
                  unprecedented access to the most qualified talent for interim
                  recruitment, project consulting, and permanent recruitment
                  needs.
                </p>
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>
      {/* about-company-visions */}
      <div className="insde-container-aboutus">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <i
                style={{ color: "#d93d32" }}
                className="fas fa-bullseye-arrow about-i"
              ></i>
              <h3 className="vision-headng">Vision </h3>
              <p className="vision-content">
                Career Craftors' mission is to empower our candidates (freshers,
                graduates, and experienced) to find and pursue a satisfying
                career path so that they can leave their imprint on the world.
              </p>
            </div>
            <div className="col-lg-6 indivdual-vContent">
              <i
                style={{ color: "#00B4D8" }}
                className="fas fa-flag about-i"
              ></i>
              <h3 className="vision-headng">Mission </h3>
              <p className="vision-content">
                We educate and support students as they explore and further
                understand themselves and career alternatives, get meaningful
                experience, develop as professionals, and start their
                post-graduation career plans.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "90px" }} className="row">
            <div className="col-lg-12">
              <i
                style={{ color: "#B8405E" }}
                className="fas fa-briefcase about-i"
              ></i>
              <h3 className="vision-headng">Core Value </h3>
            </div>
          </div>
          <div style={{ margin: "10px" }} className="row">
            <div className="col-lg-12 ">
              <div className="card-deck">
                <div className="card">
                  <div className="card-header vision-card-header">
                    We believe in Purpose
                  </div>
                  <div className="card-body">
                    Actively pursuing and identifying meaningful results in more
                    valued and influential individuals who are personally
                    fulfilled and live up to our motto.
                  </div>
                </div>
                <div className="card">
                  <div className="card-header vision-card-header">
                    We are Mentors
                  </div>
                  <div className="card-body">
                    Learning isn't limited to the classroom. We work with
                    students at any point in their professional growth. We train
                    students and partners how to navigate the workplace.
                  </div>
                </div>
                <div className="card">
                  <div className="card-header vision-card-header">
                    We form bonds
                  </div>
                  <div className="card-body">
                    With those we serve by sharing our knowledge, experience,
                    connections, and enthusiasm. Our valued connections foster
                    relationships, fostering professions that encourage a better
                    world.
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/*end of first row in cards*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="card-deck">
                <div className="card">
                  <div className="card-header vision-card-header">
                    We act as catalysts
                  </div>
                  <div className="card-body">
                    Assisting students in determining their goals and assisting
                    them in achieving them. We encourage and challenge students
                    to strive for greater heights. Every individual is unique,
                    and we meet their various demands
                  </div>
                </div>
                <div className="card">
                  <div className="card-header vision-card-header">
                    We work as a team
                  </div>
                  <div className="card-body">
                    Our team consists of specialists who collaborate. We strive
                    for healthy and productive working relationships by
                    maintaining open communication, mutual respect, and
                    collaboration while also continuing our professional
                    development.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* about-company-visions end */}
      <div>
        {/* <form> */}

        {/* </form> */}
      </div>
    </div>
  );
}
