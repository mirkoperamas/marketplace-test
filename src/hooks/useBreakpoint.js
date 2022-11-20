import { useEffect, useState } from "react";
import breakpoints from "../utils/breakpoints";

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (295 < windowSize.width && windowSize.width < 395) {
      setBreakPoint(breakpoints["xxs"]);
    }
    if (395 < windowSize.width && windowSize.width < 576) {
      setBreakPoint(breakpoints["xs"]);
    }
    if (576 < windowSize.width && windowSize.width < 767) {
      setBreakPoint(breakpoints["sm"]);
    }
    if (767 < windowSize.width && windowSize.width < 991.98) {
      setBreakPoint(breakpoints["md"]);
    }
    if (991.98 < windowSize.width && windowSize.width < 1024) {
      setBreakPoint(breakpoints["lg"]);
    }
    if (1024 < windowSize.width && windowSize.width < 1200) {
      setBreakPoint(breakpoints["ml"]);
    }
    if (1200 < windowSize.width && windowSize.width < 1350) {
      setBreakPoint(breakpoints["xl"]);
    }
    if (1350 < windowSize.width && windowSize.width < 1900) {
      setBreakPoint(breakpoints["xxl"]);
    }
    if (windowSize.width >= 1900) {
      setBreakPoint(breakpoints["max"]);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
