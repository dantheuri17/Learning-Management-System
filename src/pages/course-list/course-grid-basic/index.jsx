import CourseList1 from "@/components/course-list/CourseList1";
import PageTitle from "@/components/course-list/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"Course Grid Basic || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function CourseGridBasicPage() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>

				<Header1 />
				<PageTitle />
				<div className="main-content pt-0">
					<CourseList1 />
				</div>
				<Footer1 parentClass="footer has-border-top" />
			</div>
		</>
	);
}
