import DashboardNav2 from "@/components/dashboard/DashboardNav2";

import PageTitle2 from "@/components/dashboard/PageTitle2";
import Quiz from "@/components/dashboard/Quiz2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"Student Quizes || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function StudentPageQuizzes() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>
				<Header1 />
				<PageTitle2 />
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
												STUDENT DASHBOARD
												<DashboardNav2 />
											</div>
										</div>
									</div>
								</div>
								<Quiz />
							</div>
						</div>
					</div>
				</div>

				<Footer1 />
			</div>
		</>
	);
}
