import Footer1 from "@/components/footers/Footer1";

import Header2 from "@/components/headers/Header2";
import BecomeInstractor from "@/components/homes/home-2/BecomeInstractor";
import Categories from "@/components/homes/home-2/Categories";
import Courses from "@/components/homes/home-2/Courses";
import Courses2 from "@/components/homes/home-2/Courses2";
import DownloadApp from "@/components/homes/home-2/DownloadApp";
import Events from "@/components/homes/home-2/Events";
import Facts from "@/components/homes/home-2/Facts";
import Features from "@/components/homes/home-2/Features";
import Hero from "@/components/homes/home-2/Hero";
import Skills from "@/components/homes/home-2/Skills";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import VideoBox from "@/components/homes/home-2/VideoBox";
const metadata = {
  title: "Home 2 || UpSkill - Education Online Courses LMS Reactjs Template",
  description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function HomePage2() {
  return (
    <>
      <MetaComponent meta={metadata} />{" "}
      <div id="wrapper">
        {" "}
        <div className="tf-top-bar style-1 flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>
        <Header2 />
        <Hero />
        <div className="main-content">
          <Courses />
          <Categories />
          <VideoBox />
          <Features />

          <Courses2 />
          <Facts />
          <Events />
          <BecomeInstractor />
          <Skills />
          <DownloadApp />
          <Footer1 parentClass="footer style-2" />
        </div>
      </div>
    </>
  );
}
