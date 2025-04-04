import { PropsWithChildren, useEffect, useState, useCallback } from "react";
import { BreakPoint } from "~/styles/mediaQuery";
import { getUserAgent } from "~/utils/userAgent";
import DetermineBreakpointContext from "./DetermineBreakpointContext";

interface Props {
  defaultMobile?: boolean;
  defaultTablet?: boolean;
  defaultDesktop?: boolean;
}

function DetermineBreakpointProvider({
  defaultMobile = false,
  defaultTablet = false,
  defaultDesktop = false,
  children,
}: PropsWithChildren<Props>) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMobile, setIsMobile] = useState(defaultMobile);
  const [isTablet, setIsTablet] = useState(defaultTablet);
  const [isDesktop, setIsDesktop] = useState(defaultDesktop);

  const handleResize = useCallback(async () => {
    const width = document.body.clientWidth;
    const userAgent = await getUserAgent();
    const current = width < BreakPoint.tablet || userAgent?.mobile;

    setIsMobile(current);
    setIsTablet(width < BreakPoint.desktop && width >= BreakPoint.tablet);
    setIsDesktop(width >= BreakPoint.desktop);
  }, []);

  useEffect(() => {
    const initializeBreakpoint = async () => {
      await handleResize();
      setIsInitialized(true);
    };

    initializeBreakpoint();
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  if (!isInitialized) {
    return null;
  }

  return (
    <DetermineBreakpointContext.Provider
      value={{
        isMobile,
        isTablet,
        isDesktop,
      }}
    >
      {children}
    </DetermineBreakpointContext.Provider>
  );
}

export default DetermineBreakpointProvider;
