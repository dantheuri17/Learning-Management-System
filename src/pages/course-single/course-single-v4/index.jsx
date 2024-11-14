import CourseSingle4 from "@/components/course-single/CourseSingle4";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Course Single 4 || UpSkill - Education Online Courses LMS Reactjs Template",
  description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function CourseSinglePage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div id="wrapper">
        <Header1 />
        <div className="main-content pt-0">
          <CourseSingle4 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
