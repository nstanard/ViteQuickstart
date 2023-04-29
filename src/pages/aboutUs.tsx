import React from "react";
import { Helmet } from "react-helmet";
import Page from "src/components/page";

export default function AboutUs() {
  return (
    <Page title="About Us">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <p>This is an about us page</p>
    </Page>
  );
}
