import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
  }
}

// import { DefaultTheme } from "styled-components";

// export const theme: DefaultTheme = {
//   bgColor: "#2f3640",
//   textColor: "#f5f6fa",
//   accentColor: "#9c88ff",
// };
