import Brands from "@/components/common/Brands";
import Header6 from "@/components/headers/Header6";
import Blogs from "@/components/common/Blogs";
import Course from "@/components/homes/home-6/Course";
import Faq from "@/components/homes/home-6/Faq";
import Features from "@/components/homes/home-6/Features";
import Features2 from "@/components/homes/home-6/Features2";
import GetStarted from "@/components/homes/home-6/GetStarted";
import Hero from "@/components/homes/home-6/Hero";

import Testimonials from "@/components/homes/home-6/Testimonials";
import TopCategories from "@/components/homes/home-6/TopCategories";
import React from "react";
import DownloadApp from "@/components/homes/home-6/DownloadApp";
import Footer1 from "@/components/footers/Footer1";
import Pricing from "@/components/common/Pricing";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 6 || UpSkill - Education Online Courses LMS Reactjs Template",
  description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function HomePage6() {
  return (
    <>
      <MetaComponent meta={metadata} />{" "}
      <div id="wrapper">
        <div className="tf-top-bar style-2 flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>
        <Header6 />
        <Hero />
        <div className="main-content pt-0">
          <Features />
          <Course />
          <TopCategories />
          <GetStarted />
          <Features2 />
          <Faq />
          <Brands />
          <Testimonials />
          <Pricing />
          <Blogs titleFont="" />
          <DownloadApp />
        </div>
        <Footer1 parentClass="footer style-5" />
      </div>
    </>
  );
}
