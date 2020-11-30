import React from "react";
import { graphql, PageProps } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import { App } from "../components/App";

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        author {
          url
        }
      }
    }

    dataJson {
      profile {
        name {
          en {
            familyName
            givenName
          }
          ja {
            familyName
            givenName
          }
        }
        location
        languages
        email
      }
    }
  }
`;

const Name = styled(Typography)`
  font-size: 2.5rem;
`;

const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => (
  <App
    head={{
      itemType: "Person",
      ogType: "profile",
      url: data.site?.siteMetadata?.author?.url,
    }}
  >
    <Name variant="h2">
      <span itemProp="name">
        <span itemProp="givenName">
          {data.dataJson?.profile?.name?.en?.givenName}
        </span>{" "}
        <span itemProp="familyName">
          {data.dataJson?.profile?.name?.en?.familyName}
        </span>
      </span>
      <span itemProp="name" lang="ja">
        <meta
          itemProp="familyName"
          content={data.dataJson?.profile?.name?.ja?.familyName}
        />
        <meta
          itemProp="givenName"
          content={data.dataJson?.profile?.name?.ja?.givenName}
        />
      </span>
    </Name>
    <Grid container>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  </App>
);

export default IndexPage;
