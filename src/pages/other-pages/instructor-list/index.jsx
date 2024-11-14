import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Instractors from "@/components/otherPages/Instractors";
import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"Instractor List || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function InstractorListPage() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>

				<Header1 />
				<div className="page-title basic">
					<div className="tf-container full">
						<div className="row">
							<div className="col-12">
								<div className="content text-center">
									<ul className="breadcrumbs flex items-center justify-center gap-10">
										<li>
											<Link to={`/`} className="flex">
												<i className="icon-home" />
											</Link>
										</li>
										<li>
											<i className="icon-arrow-right" />
										</li>
										<li>Pages</li>
										<li>
											<i className="icon-arrow-right" />
										</li>
										<li>Instructor</li>
									</ul>
									<h2 className="font-cardo fw-7">Instructor</h2>
									<h6>
										Products that help beginner designers become true unicorns.
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="main-content pt-0">
					<Instractors />
				</div>
				<Footer1 parentClass="footer has-border-top" />
			</div>
		</>
	);
}
