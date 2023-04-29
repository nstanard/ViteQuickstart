import React from "react";
import { Helmet } from "react-helmet";
import Page from "src/components/page";

export default function PageNotFound() {
  return (
    <Page title="404">
      <Helmet>
        <title>Home</title>
      </Helmet>
      Page Not Found
    </Page>
  );
}
