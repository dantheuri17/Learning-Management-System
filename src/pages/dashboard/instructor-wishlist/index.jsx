import Dashboard from "@/components/dashboard/Dashboard";
import DashboardNav from "@/components/dashboard/DashboardNav";
import PageTitle1 from "@/components/dashboard/PageTitle1";
import Wishlist from "@/components/dashboard/Wishlist";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"Instractor Wishlist || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function InstractorPageWishlist() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>
				<Header1 />
				<PageTitle1 />
				<div className="main-content pt-0">
					<div className="page-inner tf-spacing-1">
						<div className="tf-container">
							<div className="row">
								<div className="col-xl-3 col-lg-12">
									<div className="dashboard_navigationbar">
										<div className="dropbtn">
											<i className="icon-home" /> Dashboard Navigation
										</div>
										<div className="instructors-dashboard">
											<div className="dashboard-title">
												INSTRUCTOR DASHBOARD
												<DashboardNav />
											</div>
										</div>
									</div>
								</div>
								<Wishlist />
							</div>
						</div>
					</div>
				</div>

				<Footer1 />
			</div>
		</>
	);
}
