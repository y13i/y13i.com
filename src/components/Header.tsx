import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Typography, Container } from "@material-ui/core";
import styled from "styled-components";
import { lighten } from "polished";

import { globalContainerMaxWidth, themeColor } from "../constants";

const StyledHeader = styled.header`
  background-color: ${themeColor};
`;

const StyledContainer = styled(Container)`
  display: flex;
  padding-top: 1rem;

  * {
    font-family: "Open Sans Condensed", sans-serif;
  }

  a {
    color: #fff;
  }
`;

const Title = styled(Typography)`
  font-size: 3.5rem;
  font-weight: lighter;
  line-height: 0.77;
  vertical-align: middle;
  text-transform: uppercase;
`;

const SourceCode = styled(Typography)`
  font-size: 1rem;
  line-height: 1;
  vertical-align: super;

  a {
    color: ${lighten(0.33, themeColor)};
  }
`;

export const Header: React.FC = () => {
  const { site } = useStaticQuery<GatsbyTypes.HeaderQuery>(graphql`
    query Header {
      site {
        siteMetadata {
          title
          url
        }
      }
    }
  `);

  return (
    <StyledHeader>
      <StyledContainer maxWidth={globalContainerMaxWidth}>
        <Title variant="h1">
          <Link to="/" rel="me">
            {site?.siteMetadata?.title}
          </Link>
        </Title>
        <SourceCode variant="body1">
          {!site?.siteMetadata?.url || (
            <a href={site?.siteMetadata?.url}>source code</a>
          )}
        </SourceCode>
      </StyledContainer>
    </StyledHeader>
  );
};
