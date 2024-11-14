import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Register from "@/components/otherPages/Register";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title: "Register || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function RegisterPage() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>

				<Header1 />

				<Register />

				<Footer1 />
			</div>
		</>
	);
}
