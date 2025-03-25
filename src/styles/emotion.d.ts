import "@emotion/react";
import { Theme as CustomTheme } from "./theme";

declare module "@emotion/react" {
  export type Theme = CustomTheme;
}
