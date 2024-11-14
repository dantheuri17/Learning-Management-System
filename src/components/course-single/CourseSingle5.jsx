import React, { useState } from "react";
import Learn from "./Learn";
import RequireMents from "./RequireMents";
import About from "./About";
import CourseContent from "./CourseContent";
import Instractors from "./Instractors";
import MyCourses from "./MyCourses";
import Reviews from "./Reviews";
import Replay from "./Replay";
import { Link } from "react-router-dom";

import ModalVideo from "react-modal-video";
export default function CourseSingle5() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* section page title */}
      <section className="section-page-title page-title style-8">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <ul className="breadcrumbs breadcrumbs flex items-center justify-start gap-10 mb-60">
                  <li>
                    <Link to={`/`} className="flex">
                      <i className="icon-home" />
                    </Link>
                  </li>
                  <li>
                    <i className="icon-arrow-right" />
                  </li>
                  <li>Development</li>
                  <li>
                    <i className="icon-arrow-right" />
                  </li>
                  <li>Web Development</li>
                </ul>
                <h2 className="font-cardo fw-7">
                  The Complete 2024 Web Development <br />
                  Bootcamp
                </h2>
                <p className="except">
                  Learn: HTML | CSS | JavaScript | Web programming | Web
                  development | Front-end | Responsive | JQuery
                </p>
                <ul className="entry-meta">
                  <li>
                    <div className="ratings">
                      <div className="number">4.9</div>
                      <i className="icon-star-1" />
                      <i className="icon-star-1" />
                      <i className="icon-star-1" />
                      <i className="icon-star-1" />
                      <svg
                        width={12}
                        height={11}
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.54831 7.10382L3.58894 6.85477L3.41273 6.67416L1.16841 4.37373L4.24914 3.90314L4.51288 3.86286L4.62625 3.62134L5.99989 0.694982L7.37398 3.62182L7.48735 3.86332L7.75108 3.9036L10.8318 4.37419L8.58749 6.67462L8.41128 6.85523L8.4519 7.10428L8.98079 10.3465L6.24201 8.8325L6.00014 8.69879L5.75826 8.83247L3.01941 10.3461L3.54831 7.10382ZM11.0444 4.15626L11.0442 4.15651L11.0444 4.15626Z"
                          stroke="#131836"
                        />
                      </svg>
                      <p className="total fs-15">315,475 rating</p>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-book" />
                    <p>11 Lessons</p>
                  </li>
                  <li>
                    <i className="flaticon-user" />
                    <p>229 Students</p>
                  </li>
                  <li>
                    <i className="flaticon-clock" />
                    <p>Last updated 12/2024</p>
                  </li>
                </ul>
                <div className="author-item">
                  <div className="author-item-img">
                    <img
                      alt=""
                      src="/images/avatar/review-1.png"
                      width={101}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <span className="text-1">By </span>
                    <a href="#">Theresa Edin</a>
                    <span className="text-1">In</span>
                    <a href="">Development</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-sale">
                <div className="course-price">
                  <div className="price">
                    <h3 className="fw-5">$ 249.00</h3>
                    <h6 className="fs-15">$ 449.00</h6>
                  </div>
                  <p className="sale-off">39% OFF</p>
                </div>
                <a className="tf-btn add-to-cart" href="#">
                  Add To Cart
                  <i className="icon-arrow-top-right" />
                </a>
                <a className="tf-btn buy-now" href="#">
                  Buy Now
                  <i className="icon-arrow-top-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /section page title */}
      {/*section page inner*/}
      <section className="section-page-course">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-single-inner ver-5 ">
                <div className="widget-video">
                  <img
                    className="lazyload"
                    data-src="/images/section/image-video-single-v5.jpg"
                    alt=""
                    src="/images/section/image-video-single-v5.jpg"
                    width={900}
                    height={500}
                  />
                  <a onClick={() => setOpen(true)} className="popup-youtube">
                    <i className="flaticon-play fs-18" />
                  </a>
                </div>
                <div className="tabs-with-filter style-row">
                  <ul className="widget-menu-tab overflow-x-auto">
                    <li className="item-title course-single-v5">
                      <a href="#overview"></a>Overview
                    </li>
                    <li className="item-title course-single-v5">
                      {" "}
                      <a href="#Curriculum">Curriculum</a>
                    </li>
                    <li className="item-title course-single-v5">
                      {" "}
                      <a href="#page-instructor">Instructor</a>
                    </li>
                    <li className="item-title course-single-v5">
                      {" "}
                      <a href="#review-item-1">Review</a>
                    </li>
                  </ul>
                </div>

                <div className="page-learn course-single-v5" id="overview">
                  <Learn />
                </div>
                <div className="page-requirement">
                  <RequireMents />
                </div>
                <div className="page-desc show-more-desc-item">
                  <About />
                </div>
                <div className="page-course-content" id="Curriculum">
                  <CourseContent />
                </div>
                <div className="page-instructor" id="page-instructor">
                  <Instractors />
                </div>
                <div className="page-my-course">
                  <MyCourses />
                </div>
                <div className="review-wrap" id="review-item-1">
                  <Reviews />
                </div>
                <div className="add-review-wrap">
                  <Replay />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-course no-video">
                <div className="sidebar-course-content">
                  <div className="course-list">
                    <h5 className="fw-5">This course includes:</h5>
                    <ul className="course-benefit-list">
                      <li className="course-benefit-item">
                        <i className="flaticon-play-1" />
                        <p>54.5 hours on-demand video</p>
                      </li>
                      <li className="course-benefit-item">
                        <i className="flaticon-document" />
                        <p>3 articles</p>
                      </li>
                      <li className="course-benefit-item">
                        <i className="flaticon-down-arrow" />
                        <p>249 downloadable resources</p>
                      </li>
                      <li className="course-benefit-item">
                        <i className="flaticon-mobile-phone" />
                        <p>Access on mobile and TV</p>
                      </li>
                      <li className="course-benefit-item">
                        <i className="icon-extremely" />
                        <p>Full lifetime access</p>
                      </li>
                      <li className="course-benefit-item">
                        <i className="flaticon-medal" />
                        <p>Certificate of completion</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="course-social ver-5">
                  <h5 className="fw-5">Share this course</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="flaticon-facebook-1" />
                      </a>
                    </li>
                    <li className="course-social-item">
                      <a href="#">
                        <i className="icon-twitter" />
                      </a>
                    </li>
                    <li className="course-social-item">
                      <a href="#">
                        <i className="flaticon-instagram" />
                      </a>
                    </li>
                    <li className="course-social-item">
                      <a href="#">
                        <i className="flaticon-linkedin-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="MLpWrANjFbI"
        onClose={() => setOpen(false)}
      />
      {/* / section page inner */}
    </>
  );
}