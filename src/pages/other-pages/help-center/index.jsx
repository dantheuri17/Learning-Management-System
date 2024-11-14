import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Faqs from "@/components/homes/home-4/Faqs";
import Services from "@/components/otherPages/help-center/Services";

import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"Help Center || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function HelpCenterPage() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>

				<Header1 />
				<div className="page-title page-help">
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
									<h2 className="font-cardo fw-7">Help Center</h2>
									<h6>
										We’re on a mission to deliver engaging, curated courses at a
										reasonable price.
									</h6>
									<form className="form-search-courses">
										<div className="icon">
											<i className="icon-keyboard" />
										</div>
										<fieldset>
											<input
												className=""
												type="text"
												placeholder="Cancellation, meeting point, etc."
												name="text"
												tabIndex={2}
												defaultValue=""
												aria-required="true"
												required
											/>
										</fieldset>
										<div className="button-submit">
											<button className="">
												<i className="icon-search fs-20" />
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="main-content pt-0">
					<Services />
					<Faqs />
				</div>
				<Footer1 />
			</div>
		</>
	);
}
