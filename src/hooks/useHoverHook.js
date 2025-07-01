import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const hoverRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (event) => {
    setIsHovered(false);
  };
  useEffect(() => {
    let node = hoverRef.current;
    if (!node) return;

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return [hoverRef, isHovered];
};
