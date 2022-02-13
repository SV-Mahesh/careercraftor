import React from 'react'

export default function Home() {
    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-container">
                                <h1>Educational & Career Counselling</h1>
                                <p className="p-large p-heading">Choosing the right course post schooling which will help to understand the interest and passion of the students</p>
                                <a className="btn-solid-lg" href="#your-link"><i className="fab fa-apple" />DOWNLOAD</a>
                                <a className="btn-solid-lg" href="#your-link"><i className="fab fa-google-play" />DOWNLOAD</a>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container">
                                <img className="img-fluid" src="images/header-iphone.png" alt="alternative" />
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
                <div className="deco-white-circle-1">
                    <img src="images/decorative-white-circle.svg" alt="alternative" />
                </div> {/* end of deco-white-circle-1 */}
                <div className="deco-white-circle-2">
                    <img src="images/decorative-white-circle.svg" alt="alternative" />
                </div> {/* end of deco-white-circle-2 */}
                <div className="deco-blue-circle">
                    <img src="images/decorative-blue-circle.svg" alt="alternative" />
                </div> {/* end of deco-blue-circle */}
                <div className="deco-yellow-circle">
                    <img src="images/decorative-yellow-circle.svg" alt="alternative" />
                </div> {/* end of deco-yellow-circle */}
                <div className="deco-green-diamond">
                    <img src="images/decorative-green-diamond.svg" alt="alternative" />
                </div> {/* end of deco-yellow-circle */}
            </header> {/* end of header */}
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
                                    <h5 className="card-title">Identify Goals</h5>
                                </div>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <div className="card-image green">
                                    <i className="fas fa-code" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Situation Analysis</h5>
                                </div>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <div className="card-image red">
                                    <i className="fas fa-cog" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Tasks Settings</h5>
                                </div>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <div className="card-image yellow">
                                    <i className="fas fa-comments" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Social Interaction</h5>
                                </div>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <div className="card-image blue">
                                    <i className="fas fa-rocket" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Get Things Done</h5>
                                </div>
                            </div>
                            {/* end of card */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of cards-1 */}
            {/* end of small features */}
            {/* Description 1 */}
            <div id="description" className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="images/description-1-app.png" alt="alternative" />
                            </div> {/* end of image-container */}
                        </div> {/* end of col */}
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Organize Your Time And Start Getting Results</h2>
                                <p>Sync is the first mobile app on the market to harness the power of social connections to help you stop procrastinating and start getting things done. Give it a try and see the changes right away</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square" />
                                        <div className="media-body">Analyse and evaluate your current status and productivity</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square" />
                                        <div className="media-body">Begin monitoring your day to day routine with Sync app</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square" />
                                        <div className="media-body">See the improved results in no more than a couple of weeks</div>
                                    </li>
                                </ul>
                                <a className="btn-solid-reg popup-with-move-anim" href="#description-1-details-lightbox">LIGHTBOX</a>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of basic-1 */}
            {/* end of description 1 */}
            {/* Description 1 Details Lightbox */}
            {/* Details Lightbox */}
            <div id="description-1-details-lightbox" className="lightbox-basic zoom-anim-dialog mfp-hide">
                <div className="row">
                    <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                    <div className="col-lg-8">
                        <div className="image-container">
                            <img className="img-fluid" src="images/description-1-details-lightbox.jpg" alt="alternative" />
                        </div> {/* end of image-container */}
                    </div>
                    <div className="col-lg-4">
                        <h3>Goals Setting</h3>
                        <hr />
                        <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
                        <h4>User Feedback</h4>
                        <p>This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="far fa-check-square" /><div className="media-body">Splash screen panel</div>
                            </li>
                            <li className="media">
                                <i className="far fa-check-square" /><div className="media-body">Statistics graph report</div>
                            </li>
                            <li className="media">
                                <i className="far fa-check-square" /><div className="media-body">Events calendar layout</div>
                            </li>
                            <li className="media">
                                <i className="far fa-check-square" /><div className="media-body">Location details screen</div>
                            </li>
                            <li className="media">
                                <i className="far fa-check-square" /><div className="media-body">Onboarding steps interface</div>
                            </li>
                        </ul>
                        <a className="btn-solid-reg mfp-close page-scroll" href="#download">DOWNLOAD</a> <button className="btn-outline-reg mfp-close as-button" type="button">BACK</button>
                    </div>
                </div> {/* end of row */}
            </div> {/* end of lightbox-basic */}
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
                                        <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i className="far fa-clock" />Schedule</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-list" />Tracking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="far fa-calendar-alt" />Organize</a>
                                    </li>
                                </ul>
                                {/* end of tabs links */}
                                {/* Tabs Content */}
                                <div className="tab-content" id="cedoTabsContent">
                                    {/* Tab */}
                                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                        <p><strong>Schedule tasks</strong> to keep track of their completion. Sync provides multiple scheduling options including alarms and reminders.</p>
                                        <ul className="list-unstyled li-space-lg">
                                            <li className="media">
                                                <i className="far fa-check-square" />
                                                <div className="media-body">You can always add new tasks or change the settings of existing ones in your calendar view or the app control panel</div>
                                            </li>
                                            <li className="media">
                                                <i className="far fa-check-square" />
                                                <div className="media-body">It's easy to stay focused on your most important daily activities that will get you closer to meeting your goals</div>
                                            </li>
                                            <li className="media">
                                                <i className="far fa-check-square" />
                                                <div className="media-body">Use phone reminders to free up your long term memory which will reduce stress and make you more productive</div>
                                            </li>
                                        </ul>
                                        <a className="btn-solid-reg page-scroll" href="terms-conditions.html">TERMS</a> <a className="btn-outline-reg page-scroll" href="privacy-policy.html">PRIVACY</a>
                                    </div> {/* end of tab-pane */}
                                    {/* end of tab */}
                                    {/* Tab */}
                                    <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                                        <p><strong>Keep track of everything</strong> and analyse your progress while using the app. In less than a month you should be seeing improved results when it comes to time management and task prioritization</p>
                                        <p><strong>Anyone can enjoy the app</strong> no matter their gender, age, occupation or location in the world. Sync's algorithms have been built to be flexible and functional for any person in the world</p>
                                        <p><strong>Achieve the impossible</strong> just by carefully monitoring your progress and keeping the app updated with daily operations. It's easier than you think and it only takes a couple of minutes</p>
                                        <a className="red" href="terms-conditions.html">Terms &amp; Conditions &gt;&gt;</a>
                                    </div> {/* end of tab-pane */}
                                    {/* end of tab */}
                                    {/* Tab */}
                                    <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                        <p><strong>Use the power of social interactivity</strong> to keep you motivated and focused on your daily and long term goals. It's revolutionary</p>
                                        <ul className="list-unstyled li-space-lg">
                                            <li className="media">
                                                <i className="far fa-check-square" />
                                                <div className="media-body">Commiting to something in front of a crowd gives you little room to walk back on your promise and makes you push on</div>
                                            </li>
                                            <li className="media">
                                                <i className="far fa-check-square" />
                                                <div className="media-body">No more frustrations of loosing focus and not being efficient. Sync main purpose is to solve just that and make you happy</div>
                                            </li>
                                            <li className="media">
                                                <i className="far fa-check-square" />
                                                <div className="media-body">It's the first mobile app that can turn you in a better organized person without the pressure of failing like other systems</div>
                                            </li>
                                            <li className="media">
                                                <i className="far fa-check-square" />
                                                <div className="media-body">Recognized by a lot of trainers and life coaches Sync is the number one tool they recommend time management</div>
                                            </li>
                                        </ul>
                                    </div> {/* end of tab-pane */}
                                    {/* end of tab */}
                                </div> {/* end of tab-content */}
                                {/* end of nav tabs content */}
                            </div> {/* end of tabs-container */}
                        </div> {/* end of col */}
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src="images/description-2-app.png" alt="alternative" />
                            </div> {/* end of image-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of tabs */}
            {/* end of description 2 */}
            {/* Features */}
            <div id="features" className="basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Special Features</h2>
                            <p className="p-heading">Sync's features are designed to help you improve your time management skills and become a better organized person. Organize your tasks, schedule your appointments and meet your personal development goals with Sync</p>
                        </div> {/* end of div */}
                    </div> {/* end of div */}
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="list-unstyled li-space-lg first">
                                <li className="media">
                                    <span className="fa-stack">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fas fa-users fa-stack-1x" />
                                    </span>
                                    <div className="media-body">
                                        <h4>Goal Setting</h4>
                                        <p>Like any self improving process, everything starts with setting your goals and committing to them</p>
                                    </div>
                                </li>
                                <li className="media">
                                    <span className="fa-stack">
                                        <i className="fas fa-circle fa-stack-2x green" />
                                        <i className="fas fa-code fa-stack-1x" />
                                    </span>
                                    <div className="media-body">
                                        <h4>Situation Analysis</h4>
                                        <p>Sync provides a well designed and ergonomic visual editor for you to edit your quick notes</p>
                                    </div>
                                </li>
                                <li className="media">
                                    <span className="fa-stack">
                                        <i className="fas fa-circle fa-stack-2x red" />
                                        <i className="fas fa-cog fa-stack-1x" />
                                    </span>
                                    <div className="media-body">
                                        <h4>Tasks Settings</h4>
                                        <p>Each option packaged in the app's menus is provided in order to improve you personally</p>
                                    </div>
                                </li>
                            </ul>
                        </div> {/* end of col */}
                        <div className="col-lg-4">
                            <img className="img-fluid" src="images/features-app.jpg" alt="alternative" />
                        </div> {/* end of col */}
                        <div className="col-lg-4">
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <span className="fa-stack">
                                        <i className="fas fa-circle fa-stack-2x yellow" />
                                        <i className="fas fa-comments fa-stack-1x" />
                                    </span>
                                    <div className="media-body">
                                        <h4>Social Interaction</h4>
                                        <p>Schedule your appointments, meetings and periodical evaluations using the tools</p>
                                    </div>
                                </li>
                                <li className="media">
                                    <span className="fa-stack">
                                        <i className="fas fa-circle fa-stack-2x blue" />
                                        <i className="fas fa-rocket fa-stack-1x" />
                                    </span>
                                    <div className="media-body">
                                        <h4>Get Things Done</h4>
                                        <p>Reading focus mode for long form articles, ebooks and other materials with long text</p>
                                    </div>
                                </li>
                                <li className="media">
                                    <span className="fa-stack">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fas fa-download fa-stack-1x" />
                                    </span>
                                    <div className="media-body">
                                        <h4>Good Foundation</h4>
                                        <p>Get a solid foundation for your self development efforts. Try Sync mobile app for devices</p>
                                    </div>
                                </li>
                            </ul>
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of basic-2 */}
            {/* end of features */}
            {/* Screenshots */}
            <div id="screens" className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Image Slider */}
                            <div className="slider-container">
                                <div className="swiper-container image-slider">
                                    <div className="swiper-wrapper">
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-1.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-1.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-2.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-2.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-3.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-3.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-4.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-4.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-5.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-5.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-1.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-6.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-2.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-7.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-3.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-8.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-4.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-9.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                        {/* Slide */}
                                        <div className="swiper-slide">
                                            <a href="images/screenshot-5.jpg" className="popup-link" data-effect="fadeIn">
                                                <img className="img-fluid" src="images/screenshot-10.jpg" alt="alternative" />
                                            </a>
                                        </div>
                                        {/* end of slide */}
                                    </div> {/* end of swiper-wrapper */}
                                    {/* Add Arrows */}
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                    {/* end of add arrows */}
                                </div> {/* end of swiper-container */}
                            </div> {/* end of slider-container */}
                            {/* end of image slider */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of slider */}
            {/* end of screenshots */}
            {/* Testimonials */}
            <div className="cards-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>User Testimonials</h2>
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Card */}
                            <div className="card">
                                <div className="card-image">
                                    <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                                    <hr className="testimonial-line" />
                                </div>
                                <div className="card-body">
                                    <div className="testimonial-text">I love using Sync for my personal development needs. It meets all my requirements and it actually helps a lot with focusing skills.</div>
                                    <div className="testimonial-author">Rick Jones - Designer</div>
                                </div>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <div className="card-image">
                                    <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                                    <hr className="testimonial-line" />
                                </div>
                                <div className="card-body">
                                    <div className="testimonial-text">After trying out a large number of personal coaching apps I decided to give Sync a try and what a wonderful surprise it was.</div>
                                    <div className="testimonial-author">Lynda Marquez - Developer</div>
                                </div>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <div className="card-image">
                                    <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                                    <hr className="testimonial-line" />
                                </div>
                                <div className="card-body">
                                    <div className="testimonial-text">Never dreamed I could learn so fast how to focus on my personal goals and improve my life to levels I never thought possible.</div>
                                    <div className="testimonial-author">Jay Frisco - Marketer</div>
                                </div>
                            </div>
                            {/* end of card */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container">
                                <img className="img-fluid" src="images/customer-logo-1.png" alt="alternative" />
                                <img className="img-fluid" src="images/customer-logo-2.png" alt="alternative" />
                                <img className="img-fluid" src="images/customer-logo-3.png" alt="alternative" />
                                <img className="img-fluid" src="images/customer-logo-4.png" alt="alternative" />
                                <img className="img-fluid" src="images/customer-logo-5.png" alt="alternative" />
                            </div> {/* end of image-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Card */}
                            <div className="card">
                                <div className="card-image">
                                    <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                                    <hr className="testimonial-line" />
                                </div>
                                <div className="card-body">
                                    <div className="testimonial-text">I got so much value from using Sync in my daily life for which I am very grateful and would recommend it to everybody</div>
                                    <div className="testimonial-author">Frank Gibson - Manager</div>
                                </div>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <div className="card-image">
                                    <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                                    <hr className="testimonial-line" />
                                </div>
                                <div className="card-body">
                                    <div className="testimonial-text">If you have great goals but can't figure out a way to keep focused then you should definitely give Sync a try and see the results</div>
                                    <div className="testimonial-author">Rita Longmile - Designer</div>
                                </div>
                            </div>
                            {/* end of card */}
                            {/* Card */}
                            <div className="card">
                                <div className="card-image">
                                    <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                                    <hr className="testimonial-line" />
                                </div>
                                <div className="card-body">
                                    <div className="testimonial-text">I've been looking for a great organizer app for such a long time but now I am really happy that I found Sync. It's beeen working great</div>
                                    <div className="testimonial-author">Jones Smith - Developer</div>
                                </div>
                            </div>
                            {/* end of card */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of cards-2 */}
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
                                    <div className="counter-value number-count" data-count={231}>1</div>
                                    <p className="counter-info">Happy Users</p>
                                </div>
                                <div className="cell">
                                    <i className="fas fa-code green" />
                                    <div className="counter-value number-count" data-count={385}>1</div>
                                    <p className="counter-info">Issues Solved</p>
                                </div>
                                <div className="cell">
                                    <i className="fas fa-cog red" />
                                    <div className="counter-value number-count" data-count={159}>1</div>
                                    <p className="counter-info">Good Reviews</p>
                                </div>
                                <div className="cell">
                                    <i className="fas fa-comments yellow" />
                                    <div className="counter-value number-count" data-count={127}>1</div>
                                    <p className="counter-info">Case Studies</p>
                                </div>
                                <div className="cell">
                                    <i className="fas fa-rocket blue" />
                                    <div className="counter-value number-count" data-count={211}>1</div>
                                    <p className="counter-info">Orders Received</p>
                                </div>
                            </div>
                            {/* end of counter */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of counter */}
            {/* end of statistics */}
            {/* Download */}
            <div id="download" className="basic-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container">
                                <img className="img-fluid" src="images/download-iphone.png" alt="alternative" />
                            </div> {/* end of image-container */}
                            <p className="p-large">Do you feel like you're wasting time with small stuff instead of working towards your goals? Start using Sync to organize your time and get a grip on your personal development</p>
                            <a className="btn-solid-lg" href="#your-link"><i className="fab fa-apple" />DOWNLOAD</a>
                            <a className="btn-solid-lg" href="#your-link"><i className="fab fa-google-play" />DOWNLOAD</a>
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
                <div className="deco-white-circle-1">
                    <img src="images/decorative-white-circle.svg" alt="alternative" />
                </div> {/* end of deco-white-circle-1 */}
                <div className="deco-white-circle-2">
                    <img src="images/decorative-white-circle.svg" alt="alternative" />
                </div> {/* end of deco-white-circle-2 */}
                <div className="deco-blue-circle">
                    <img src="images/decorative-blue-circle.svg" alt="alternative" />
                </div> {/* end of deco-blue-circle */}
                <div className="deco-yellow-circle">
                    <img src="images/decorative-yellow-circle.svg" alt="alternative" />
                </div> {/* end of deco-yellow-circle */}
                <div className="deco-green-diamond">
                    <img src="images/decorative-green-diamond.svg" alt="alternative" />
                </div> {/* end of deco-yellow-circle */}
            </div> {/* end of basic-3 */}
            {/* end of download */}
        </React.Fragment>
    )
}
