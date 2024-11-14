import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import PageTitle from "@/components/shop/PageTitle";
import ShopOrder from "@/components/shop/ShopOrder";

import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shop Order || UpSkill - Education Online Courses LMS Reactjs Template",
  description: "UpSkill - Education Online Courses LMS Reactjs Template",
};
export default function ShopOrderPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
          <p>Intro price. Get UpSkill for Big Sale -95% off.</p>
        </div>

        <Header1 />
        <PageTitle />
        <ShopOrder />
        <Footer1 parentClass="footer has-border-top" />
      </div>
    </>
  );
}