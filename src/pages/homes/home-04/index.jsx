import Brands from "@/components/common/Brands";
import Header4 from "@/components/headers/Header4";
import Testimonials from "@/components/homes/home-4/Testimonials";
import AboutUs from "@/components/homes/home-4/AboutUs";
import Courses from "@/components/homes/home-4/Courses";
import Facts from "@/components/homes/home-4/Facts";
import Features from "@/components/homes/home-4/Features";
import Hero from "@/components/homes/home-4/Hero";
import React from "react";
import Instractors from "@/components/homes/home-4/Instractors";
import Faqs from "@/components/homes/home-4/Faqs";
import Blogs from "@/components/common/Blogs";
import DownloadApp from "@/components/homes/home-4/DownloadApp";
import Footer1 from "@/components/footers/Footer1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home 4 || UpSkill - Education Online Courses LMS Reactjs Template",
  description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function HomePage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div id="wrapper">
        <Header4 />
        <Hero />
        <div className="main-content pt-0">
          <Brands
            spacing="tf-spacing-33"
            title="Trusted by over 15,000 companies and millions of learners around the world"
          />
          <Features />
          <Courses />
          <AboutUs />
          <Facts />
          <Testimonials />
          <Instractors />
          <Faqs />
          <Blogs />
          <DownloadApp />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
