import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { lighten } from "polished";

import { themeColor } from "./variables";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #fff;
  }

  a {
    color: ${lighten(0.15, themeColor)};
    text-decoration: none;
  }
`;
