import { useContext } from "react";
import DetermineBreakpointContext from "~/contexts/DetermineBreakpointContext";

function useDeviceBreakpoint() {
  const { isMobile, isTablet, isDesktop } = useContext(DetermineBreakpointContext);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}

export default useDeviceBreakpoint;
