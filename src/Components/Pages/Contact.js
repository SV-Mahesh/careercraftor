import React from "react";
import "./Pages.css";

export default function Contact() {
  return (
    <div
      id="description"
      className="container basic-1"
      style={{ marginTop: "100px" }}
    >
      <div className="row">
        <div className="col-lg-12" style={{ padding: "30px" }}>
          <h3 style={{ color: "#de8f40" }}>
            <i
              style={{ color: "#061408" }}
              className="fas fa-address-book contactMain-i"
            ></i>
            Contact us
          </h3>
          <p style={{ paddingLeft: "40px" }}>
            Request talent or contact our recruitment agency to discuss your
            specific requirements and how we can assist you in putting together
            a successful team.
          </p>
        </div>
      </div>

      {/* personal-contact  */}
      <div className="row">
        <div className="col-lg-6">
          <h5 style={{ paddingBottom: "20px" }}>Contact Info</h5>
          <ul className="li-space-lg p-small">
            <li className="media">
              <i class="fas fa-map-marker-alt contact-details-icon "></i>

              <div className="media-body">
                8/16, Marayapuram, Kappucaud, Kanyakumari - 629 162
              </div>
            </li>
            <li className="media">
              <i className="fas fa-envelope contact-details-icon" />
              <div className="media-body">careercraftors@gmail.com</div>
              {/* <div className="media-body">info@careercraftors.com</div> */}
            </li>
            <li className="media">
              <i className="fas fa-phone-alt contact-details-icon" />
              <div className="media-body">+91 78100 83072</div>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-12 ">
          <img
            className="img-fluid about-image-container "
            src="images/contact-image.png"
            alt="alternative"
          />
        </div>{" "}
      </div>

      {/* section for google forms  start*/}
      <div className="row form-contact-row">
        <div className="col-lg-4 col-sm-12 form-contact-column ">
          <div className="card ch-1">
            <div className="card-body ">
              <button type="button" class="btn   ">
                {" "}
                <a href="#">
                  <i
                    style={{ color: "#1c5473" }}
                    class="fas fa-laptop contactMain-i "
                  ></i>
                  <h6 className="form-title-contact">Working Professionals</h6>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 form-contact-column">
          <div className="card ch-1">
            <div style={{ paddingRight: "10px" }} className="card-body ">
              <button type="button" class="btn ">
                <a href="#">
                  {" "}
                  <i
                    style={{ color: "#141010" }}
                    class="fas fa-graduation-cap  contactMain-i "
                  ></i>
                  <h6 className="form-title-contact">
                    Students (interns/admissions)
                  </h6>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 form-contact-column">
          <div className="card ch-1">
            <div className="card-body">
              <button type="button" class="btn  ">
                <a href="#">
                  <i
                    style={{ color: "#214d27" }}
                    class="fas fa-briefcase-medical contactMain-i "
                  ></i>
                  <h6 className="form-title-contact">Medical Professionals</h6>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
