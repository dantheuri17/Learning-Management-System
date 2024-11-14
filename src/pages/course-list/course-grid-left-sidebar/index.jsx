import CourseList3 from "@/components/course-list/CourseList3";
import PageTitle from "@/components/course-list/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Course Grid Left Sidebar || UpSkill - Education Online Courses LMS Reactjs Template",
  description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function CourseGridLeftSidebarPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>

        <Header1 />
        <PageTitle parentClass="page-title style-2 has-tags-bg-white" />

        <CourseList3 />

        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}
