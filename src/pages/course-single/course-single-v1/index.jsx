import CourseSingle1 from "@/components/course-single/CourseSingle1";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { allCourses } from "@/data/courese";
import React from "react";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"Course Single 1 || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function CourseSinglePage1() {
	let params = useParams();
	const courseItem =
		allCourses.filter((elm) => elm.id == params.id)[0] || allCourses[0];
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>

				<Header1 />
				<div className="main-content pt-0">
					<CourseSingle1 courseItem={courseItem} />
				</div>
				<Footer1 />
			</div>
		</>
	);
}
