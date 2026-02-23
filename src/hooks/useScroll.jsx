import { useRef } from 'react';

export const useScroll = () => {
  const executeScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return { executeScroll };
};