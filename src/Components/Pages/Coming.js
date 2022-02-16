import React from "react";
import "./Pages.css";

export default function Coming() {
  return (
    <div id="description" className="basic-1" style={{ marginTop: "100px" }}>
      <div className="container-fluid" style={{ width: "90%" }}>
        <div className="row services-row">
          <div className="col-lg-3">
            <img
              className="serv-img-1"
              src="images/service-img-1.png"
              alt="image"
            />
          </div>
          <div className="col-lg-9">
            <p className="rp-services" style={{ float: "left" }}>
              <h4>Job placement-Non Technical & Technical (India & Abroad)</h4>
              Whether you're an experienced professional or looking for your
              first job, our approach to recruitment prioritizes candidates. We
              take the time to listen, advise and work more than anyone else to
              find your ideal job. We work with a wide range of public and
              private sector companies of all kinds and sizes. This makes us a
              great partner for you, too: whatever your goals are, we're sure to
              know someone who can help. With us, you can find your next career
              step.
            </p>
          </div>
        </div>
        <div className="tab-content" className="row services-row">
          <div className="col-lg-12">
            <img
              className="serv-img-2"
              style={{ float: "right", paddingLeft: "20px" }}
              src="images/service-img-2.png"
              alt="image"
            />
            <p className="p-services">
              <h4>Internship Programs (India )</h4>
              In a number of professions, prior experience is required to obtain
              employment. Internships can help you obtain transferrable skills,
              experience, and knowledge while working in a real-world setting.
              In addition, they can provide short-term networking and sector
              exploration possibilities, strengthening your CV and increasing
              your chances of landing the job you actually desire.
            </p>
          </div>
        </div>
        <div className="row services-row">
          <div className="col-lg-4">
            <img
              style={{ float: "left" }}
              src="images/service-img-3.png"
              alt=""
              className="serv-img-1"
            />
          </div>{" "}
          <div className="col-lg-8">
            <p className="rp-services">
              <h4>
                Admissions ( Post Graduate /Professional Courses -India & Abroad
                )
              </h4>
              We assist you in getting admission to universities that best suit
              your personal, academic, and financial profile/parameters,
              including but not limited to those we represent. We focus on your
              application, emphasizing the critical areas for a well-presented,
              error-free application. References and the 'all-important'
              Statement of Purpose are two areas to help. In addition,
              international students are offered scholarships and financial aid
              fee waivers based on academic excellence and financial need. We
              assist you with all aspects of the Visa application process,
              including filling out applications, producing financial
              statements, and helping and training for mock interviews, among
              other things. In addition, the consulates keep us up to date on
              the latest Visa documents and restrictions.
            </p>
          </div>
        </div>
        <div className="row services-row">
          <div className="col-lg-12">
            <img
              style={{ float: "right" }}
              src="images/service-img-4.png"
              alt="image"
              className="serv-img-2"
            />
            <p className="p-services">
              <h4>Career / Educational Counselling</h4>
              Everyone requires the assistance of a guide. A guide will help you
              manage the choices and problems you'll face along the route,
              whether you're stuck in your job, planning a career break,
              entering the field, or exploring your possibilities. We've put
              together a collection of information, tools, and resources to
              assist you in achieving your career objectives, no matter what
              they are or where you are in your career. Begin exploring right
              now.
            </p>
          </div>
        </div>
      </div>
    </div> /* dfgds */
  );
}
