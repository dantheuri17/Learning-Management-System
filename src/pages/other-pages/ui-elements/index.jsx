import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import UiElements from "@/components/otherPages/UiElements";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"UI Elements || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function UiElementsPage() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>

				<Header1 />
				<UiElements />
				<Footer1 />
			</div>
		</>
	);
}
