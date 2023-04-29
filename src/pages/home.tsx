import React from "react";
import { Helmet } from "react-helmet";
import Page from "src/components/page";

export default function Home() {
  return (
    <Page title="Home">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <p>This is a home page</p>
    </Page>
  );
}
