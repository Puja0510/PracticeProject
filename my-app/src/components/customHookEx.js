import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

// Usage
const DisplayWidth = () => {
  const width = useWindowWidth();
  return <p>Window Width: {width}px</p>;
};

export default DisplayWidth;
// Custom hooks allow you to reuse logic across multiple components.