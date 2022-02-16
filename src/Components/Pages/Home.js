import React, { Component } from "react";

function Home() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <h1>Career Craftors</h1>
                <p className="p-large p-heading">
                  A sheer blend of professionalism and creativity
                </p>
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/header-iphone.png"
                  alt="alternative"
                />
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
        <div className="deco-white-circle-1">
          <img src="images/decorative-white-circle.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-white-circle-1 */}
        <div className="deco-white-circle-2">
          <img src="images/decorative-white-circle.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-white-circle-2 */}
        <div className="deco-blue-circle">
          <img src="images/decorative-blue-circle.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-blue-circle */}
        <div className="deco-yellow-circle">
          <img src="images/decorative-yellow-circle.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-yellow-circle */}
        <div className="deco-green-diamond">
          <img src="images/decorative-green-diamond.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-yellow-circle */}
      </header>{" "}
      {/* end of header */}
      {/* end of header */}
      {/* Small Features */}
      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Card */}
              <div className="card">
                <div className="card-image">
                  <i className="fas fa-users" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">We are Mentors</h5>
                </div>
              </div>
              {/* end of card */}
              {/* Card */}

              {/* end of card */}
              {/* Card */}
              <div className="card">
                <div className="card-image green">
                  <i className="fas fa-handshake" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">We make bonds </h5>
                </div>
              </div>
              {/* end of card */}
              {/* Card */}
              <div className="card">
                <div className="card-image yellow">
                  <i className="fas fa-comments" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">We are communicatable </h5>
                </div>
              </div>
              {/* end of card */}
              {/* Card */}
              <div className="card">
                <div className="card-image blue">
                  <i className="fas fa-rocket" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">We Set you a path</h5>
                </div>
              </div>
              {/* end of card */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of cards-1 */}
      {/* end of small features */}
      {/* Description 1 */}
      <div id="description" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/home-middle.png"
                  alt="alternative"
                />
              </div>{" "}
              {/* end of image-container */}
            </div>{" "}
            {/* end of col */}
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Career Craftors </h2>
                <p>
                  Career Craftors is a skilled recruitment team that can assist
                  you in effectively sourcing entry-level employment through to
                  senior leadership roles on a
                </p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">temporary</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">contract</div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      or permanent basis, , thanks to our extensive network of
                      international talent.
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of basic-1 */}
      {/* end of description 1 */}
      {/* Description 1 Details Lightbox */}
      {/* Details Lightbox */}
      <div
        id="description-1-details-lightbox"
        className="lightbox-basic zoom-anim-dialog mfp-hide"
      >
        <div className="row">
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close x-button"
          >
            ×
          </button>
          <div className="col-lg-8">
            <div className="image-container">
              <img
                className="img-fluid"
                src="images/description-1-details-lightbox.jpg"
                alt="alternative"
              />
            </div>{" "}
            {/* end of image-container */}
          </div>
          <div className="col-lg-4">
            <h3>Mentors</h3>
            <hr />
            <p>
              Learning isn't limited to the classroom. We work with students at
              any point in their professional growth. We train students and
              partners how to navigate the workplace
            </p>
            <h4>User Feedback</h4>
            <p>
              We get feedback and enhance ourself for your vision and growth
            </p>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="far fa-check-square" />
                <div className="media-body">Splash screen panel</div>
              </li>
              <li className="media">
                <i className="far fa-check-square" />
                <div className="media-body">Statistics graph report</div>
              </li>
              <li className="media">
                <i className="far fa-check-square" />
                <div className="media-body">Events calendar layout</div>
              </li>
              <li className="media">
                <i className="far fa-check-square" />
                <div className="media-body">Location details screen</div>
              </li>
              <li className="media">
                <i className="far fa-check-square" />
                <div className="media-body">Onboarding steps interface</div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of lightbox-basic */}
      {/* end of details lightbox */}
      {/* end of description 1 details lightbox */}
      {/* Description 2 */}
      <div className="tabs">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tabs-container">
                {/* Tabs Links */}
                <ul className="nav nav-tabs" id="cedoTabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="nav-tab-1"
                      data-toggle="tab"
                      href="#tab-1"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      <i class="fas fa-folder-open"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="nav-tab-2"
                      data-toggle="tab"
                      href="#tab-2"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      <i class="fas fa-folder-open"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="nav-tab-3"
                      data-toggle="tab"
                      href="#tab-3"
                      role="tab"
                      aria-controls="tab-3"
                      aria-selected="false"
                    >
                      <i class="fas fa-folder-open"></i>
                    </a>
                  </li>
                </ul>
                {/* end of tabs links */}
                {/* Tabs Content */}
                <div className="tab-content" id="cedoTabsContent">
                  {/* Tab */}
                  <div
                    className="tab-pane fade show active"
                    id="tab-1"
                    role="tabpanel"
                    aria-labelledby="tab-1"
                  >
                    <p style={{ lineHeight: "2", paddingTop: "20px" }}>
                      <strong>CAREER CRAFTORS</strong> is a boutique recruitment
                      and métier profiling agency specializing in finding the
                      right people for the right jobs across the globe. We stand
                      as a preferred Recruitment Partner because we have a knack
                      for discovering the crystal for your missing piece.
                    </p>
                  </div>{" "}
                  {/* end of tab-pane */}
                  {/* end of tab */}
                  {/* Tab */}
                  <div
                    className="tab-pane fade"
                    id="tab-2"
                    role="tabpanel"
                    aria-labelledby="tab-2"
                  >
                    <p style={{ lineHeight: "2", paddingTop: "20px" }}>
                      <strong>We offer</strong> Permanent placements and
                      temporary employment(internships) are our main activities,
                      whether for one-time or ongoing staffing needs. We hire at
                      all levels, from junior to senior, and in various
                      personnel categories and industries.
                    </p>
                  </div>{" "}
                  {/* end of tab-pane */}
                  {/* end of tab */}
                  {/* Tab */}
                  <div
                    className="tab-pane fade"
                    id="tab-3"
                    role="tabpanel"
                    aria-labelledby="tab-3"
                  >
                    <p style={{ lineHeight: "2", paddingTop: "20px" }}>
                      <strong>We proud of</strong> More and more blue-chip
                      organizations, SME's, and innovative start-ups are turning
                      to Career Craftors for recruitment solutions and
                      professional guidance due to the company's focus on
                      excellent service to both customers and candidates, as
                      well as unrivaled local, national, and international
                      market knowledge.
                    </p>
                  </div>{" "}
                  {/* end of tab-pane */}
                  {/* end of tab */}
                </div>{" "}
                {/* end of tab-content */}
                {/* end of nav tabs content */}
              </div>{" "}
              {/* end of tabs-container */}
            </div>{" "}
            {/* end of col */}
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="https://payguard.co/wp-content/uploads/2020/02/New-career-page-image-2.svg"
                  alt="alternative"
                />
              </div>{" "}
              {/* end of image-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of tabs */}
      {/* end of description 2 */}
      {/* Features */}
      <div id="features" className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Vision</h2>
              <p className="p-heading">
                Career Craftors' mission is to empower our candidates (freshers,
                graduates, and experienced) to find and pursue a satisfying
                career path so that they can leave their imprint on the world.
              </p>
            </div>{" "}
            {/* end of div */}
          </div>{" "}
          {/* end of div */}
          <div className="row">
            <div className="col-lg-4">
              <ul className="list-unstyled li-space-lg first">
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fas fa-users fa-stack-1x" />
                  </span>
                  <div className="media-body">
                    <h4>We are Metors</h4>
                    <p>
                      Learning isn't limited to the classroom. We work with
                      students at any point in their professional growth. We
                      train students and partners how to navigate the workplace
                    </p>
                  </div>
                </li>
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x green" />
                    <i className="fas fa-handshake fa-stack-1x" />
                  </span>
                  <div className="media-body">
                    <h4>We form bonds</h4>
                    <p>
                      with those we serve by sharing our knowledge, experience,
                      connections, and enthusiasm. Our valued connections foster
                      relationships, fostering professions that encourage a
                      better world.
                    </p>
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* end of col */}
            <div className="col-lg-3"></div> {/* end of col */}
            <div className="col-lg-5">
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x yellow" />
                    <i className="fas fa-comments fa-stack-1x" />
                  </span>
                  <div className="media-body">
                    <h4>We are communicatable</h4>
                    <p>
                      We respect your feedback and enhance ourselves for the
                      betterment of you
                    </p>
                  </div>
                </li>
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x blue" />
                    <i className="fas fa-rocket fa-stack-1x" />
                  </span>
                  <div className="media-body">
                    <h4>Get Things Done</h4>
                    <p>
                      assisting students in determining their goals and
                      assisting them in achieving them. We encourage and
                      challenge students to strive for greater heights. Every
                      individual is unique, and we meet their various demands.
                    </p>
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of basic-2 */}
      {/* end of features */}
      {/* Screenshots */}
      {/* end of slider */}
      {/* end of screenshots */}
      {/* Testimonials */}
      {/* end of cards-2 */}
      {/* end of testimonials */}
      {/* Statistics */}
      <div className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Counter */}
              <div id="counter">
                <div className="cell">
                  <i className="fas fa-users" />
                  <div className="counter-value number-count" data-count={231}>
                    1
                  </div>
                  <p className="counter-info">Happy Users</p>
                </div>
                <div className="cell">
                  <i className="fas fa-code green" />
                  <div className="counter-value number-count" data-count={385}>
                    1
                  </div>
                  <p className="counter-info">Issues Solved</p>
                </div>
                <div className="cell">
                  <i className="fas fa-cog red" />
                  <div className="counter-value number-count" data-count={159}>
                    1
                  </div>
                  <p className="counter-info">Good Reviews</p>
                </div>
                <div className="cell">
                  <i className="fas fa-comments yellow" />
                  <div className="counter-value number-count" data-count={127}>
                    1
                  </div>
                  <p className="counter-info">Case Studies</p>
                </div>
                <div className="cell">
                  <i className="fas fa-rocket blue" />
                  <div className="counter-value number-count" data-count={211}>
                    1
                  </div>
                  <p className="counter-info">Orders Received</p>
                </div>
              </div>
              {/* end of counter */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of counter */}
      {/* end of statistics */}
      {/* Download */}
      <div id="download" className="basic-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="image-container">
                <img
                  className="img-fluid"
                  style={{ width: "60%" }}
                  src="images/home-last.jpg"
                  alt="alternative"
                />
              </div>{" "}
              {/* end of image-container */}
              <p className="p-large">
                We were the first to introduce the concept of professional
                talent solutions, and as the needs of businesses have changed,
                so have we. Our management team saw the value in shifting to a
                more specialized talent solutions strategy and began hiring
                contract workers with greater skill levels.
              </p>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
        <div className="deco-white-circle-1">
          <img src="images/decorative-white-circle.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-white-circle-1 */}
        <div className="deco-white-circle-2">
          <img src="images/decorative-white-circle.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-white-circle-2 */}
        <div className="deco-blue-circle">
          <img src="images/decorative-blue-circle.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-blue-circle */}
        <div className="deco-yellow-circle">
          <img src="images/decorative-yellow-circle.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-yellow-circle */}
        <div className="deco-green-diamond">
          <img src="images/decorative-green-diamond.svg" alt="alternative" />
        </div>{" "}
        {/* end of deco-yellow-circle */}
      </div>{" "}
      {/* end of basic-3 */}
      {/* end of download */}
    </React.Fragment>
  );
}
export default Home;
