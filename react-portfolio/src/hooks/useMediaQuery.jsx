import { useState, useEffect } from "react";

/**
 * It returns true if the browser window matches the given media query, and false otherwise
 * @returns A boolean value that is true if the media query matches the current viewport.
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    /* Checking if the media query matches the current viewport. */
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;