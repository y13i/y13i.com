import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Divider, Typography } from "@material-ui/core";

export const Footer: React.FC = () => {
  const { site } = useStaticQuery<GatsbyTypes.FooterQuery>(graphql`
    query Footer {
      site {
        siteMetadata {
          author {
            name
          }
          since
        }
      }
    }
  `);

  const Footer = styled.footer`
    margin: 1.2rem 0;

    p {
      text-align: right;
      font-size: 1.33rem;
      font-family: "Open Sans Condensed", sans-serif;
    }
  `;

  const year = (() => {
    const thisYear = new Date().getFullYear();
    const since = site?.siteMetadata?.since;
    return since === thisYear ? thisYear.toString() : `${since}-${thisYear}`;
  })();

  return (
    <>
      <Divider />
      <Footer>
        <Typography variant="body1">
          &copy; {year} {site?.siteMetadata?.author?.name}
        </Typography>
      </Footer>
    </>
  );
};
