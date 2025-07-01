import { useState, useEffect } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

export function useMediaQuery(breakpoint) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= breakpoints[breakpoint];
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[breakpoint]}px)`);

    const handler = (event) => setMatches(event.matches);

    mediaQuery.addEventListener('change', handler);

    // Set initial value
    setMatches(mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [breakpoint]);

  return matches;
}
