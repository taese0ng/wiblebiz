import { useCallback, useEffect, useRef } from "react";

function useScrollLock(isOpen: boolean) {
  const originalOverflow = useRef<string | null>(null);

  const handleScrollLock = useCallback(() => {
    if (isOpen) {
      originalOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow.current || "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    handleScrollLock();

    return () => {
      document.body.style.overflow = originalOverflow.current || "auto";
    };
  }, [handleScrollLock]);
}

export default useScrollLock;
