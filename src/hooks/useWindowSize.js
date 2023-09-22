import { useState, useLayoutEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {

    function updateSize() {
      setTimeout(() => {
        setSize(window.innerWidth);
      }, 1000);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default useWindowSize;