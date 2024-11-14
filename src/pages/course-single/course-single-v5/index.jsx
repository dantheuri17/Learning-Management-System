import CourseSingle5 from "@/components/course-single/CourseSingle5";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"Course Single 5 || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function CourseSinglePage5() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>
				<Header1 />
				<div className="main-content pt-0">
					<CourseSingle5 />
				</div>
				<Footer1 />
			</div>
		</>
	);
}
