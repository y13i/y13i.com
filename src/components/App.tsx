import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import "fontsource-roboto";

import { Head, HeadProps } from "./Head";
import { GlobalStyle } from "../GlobalStyle";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Main = styled.main`
  margin: 3rem 0;
`;

export const App: React.FC<React.PropsWithChildren<{ head?: HeadProps }>> = (
  props
) => (
  <>
    <Head {...props.head} />
    <GlobalStyle />
    <Header />
    <Container maxWidth="lg">
      <Main>{props.children}</Main>
      <Footer />
    </Container>
  </>
);
