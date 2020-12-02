import React from "react";
import { graphql, PageProps } from "gatsby";
import { Typography } from "@material-ui/core";

import { App } from "../components/App";

export const query = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        author {
          url
        }
      }
    }
  }
`;

const NotFoundPage: React.FC<PageProps<GatsbyTypes.NotFoundPageQuery>> = ({
  data,
}) => (
  <App
    head={{
      title: "404",
      description: "Not found.",
      itemType: "WebPage",
      url: data.site?.siteMetadata?.author?.url,
    }}
  >
    <Typography variant="h2">404</Typography>
    <Typography variant="subtitle1">Not found.</Typography>
  </App>
);

export default NotFoundPage;
