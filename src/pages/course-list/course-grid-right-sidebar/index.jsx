import CourseList4 from "@/components/course-list/CourseList4";
import PageTitle from "@/components/course-list/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"Course Grid Right Sidebar || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function CourseGridRightSidebarPage() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>

				<Header1 />
				<PageTitle parentClass="page-title style-2 has-tags-bg-white" />

				<CourseList4 />

				<Footer1 parentClass="footer has-border-top" />
			</div>
		</>
	);
}
