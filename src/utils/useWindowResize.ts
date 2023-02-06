import { useState, useEffect } from 'react';

//hook to access window dimensions
export function useWindowResize() {
  //check if ssr and sets default size
  const isSSR = typeof window !== 'undefined';
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  //sets state variables
  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  //adds/removes listeners on mount/unmount
  useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
