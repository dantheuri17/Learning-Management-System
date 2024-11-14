import Blogs2 from "@/components/blogs/Blogs2";
import PageTitle from "@/components/blogs/PageTitle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog List 1 || UpSkill - Education Online Courses LMS Reactjs Template",
  description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function BlogListPage1() {
  return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>{" "}
				</div>

				<Header1 />
				<PageTitle title="Blog List 1" />
				<Blogs2 />
				<Footer1 parentClass="footer has-border-top" />
			</div>
		</>
	);
}
