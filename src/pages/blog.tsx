import React from "react";
import { Helmet } from "react-helmet";
import Page from "src/components/page";

export default function Blog() {
  return (
    <Page title="Blog">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <p>This is a blog page</p>
    </Page>
  );
}
