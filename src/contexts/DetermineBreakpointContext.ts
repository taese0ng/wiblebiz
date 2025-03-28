import { createContext } from "react";

const DetermineBreakpointContext = createContext({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

export default DetermineBreakpointContext;
