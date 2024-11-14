import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Checkout from "@/components/shop/Checkout";
import PageTitle from "@/components/shop/PageTitle";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
	title:
		"Shop Checkout || UpSkill - Education Online Courses LMS Reactjs Template",
	description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function ShopCheckoutPage() {
	return (
		<>
			<MetaComponent meta={metadata} />
			<div id="wrapper">
				<div className="tf-top-bar flex items-center justify-center">
					<p>Ace Your Interview: New Course Now Live!</p>
				</div>

				<Header1 />
				<PageTitle />
				<Checkout />
				<Footer1 parentClass="footer has-border-top" />
			</div>
		</>
	);
}
