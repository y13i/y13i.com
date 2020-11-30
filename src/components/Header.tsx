import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { lighten } from "polished";

import { themeColor } from "../variables";

const StyledHeader = styled.header`
  background-color: ${themeColor};
`;

const StyledContainer = styled(Container)`
  display: flex;
  padding-top: 1rem;
  text-transform: uppercase;

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
      <StyledContainer maxWidth="lg">
        <Title variant="h1">
          <Link to="/" rel="me">
            {site?.siteMetadata?.title}
          </Link>
        </Title>
        <SourceCode variant="body1">
          {!site?.siteMetadata?.url || (
            <Link to={site?.siteMetadata?.url}>source code</Link>
          )}
        </SourceCode>
      </StyledContainer>
    </StyledHeader>
  );
};
