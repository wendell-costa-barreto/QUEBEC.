import { useEffect, useRef } from "react";

export const useIntersectionObserver = (callback, options = {}) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
      ...options,
    });

    observer.observe(target);
    return () => observer.disconnect();
  }, [callback, options]);

  return targetRef;
};
