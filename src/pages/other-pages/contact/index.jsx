import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ContactForm from "@/components/otherPages/contact/ContactForm";
import Features from "@/components/otherPages/contact/Features";
import Map from "@/components/otherPages/contact/Map";

import React from "react";
import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title: "Contact || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function ContactPage() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>

				<Header1 />
				<div className="page-title about">
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
									<h2 className="font-cardo fw-7">Contact Us</h2>
									<h6>
										Become an instructor and change lives — including your own
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="main-content pt-0">
					<div className="tf-spacing-24 pb-0">
						<Features />
						<ContactForm />
						<Brands />
						<Map />
					</div>
				</div>
				<Footer1 />
			</div>
		</>
	);
}
