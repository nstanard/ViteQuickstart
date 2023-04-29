import React from "react";
import { Helmet } from "react-helmet";
import Page from "src/components/page";
import { getErrorMessage } from "src/utils/util";

export default function Home() {
  return (
    <Page title="Home">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <p>This is a home page</p>
      {getErrorMessage(Error("Message"))}
    </Page>
  );
}
