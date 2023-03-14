//Griffin Parker
//March 14, 2023
//Advice Generator
//This application uses an API to fetch a random piece of advice and display it to the user. A button fetches new advice from the API
//I had no trouble making creating the styling or fetching the API, my problems began when I tried to make it responsive
//I've always struggled with responsiveness, so I turned to chatGPT to help
//I had to have all this extra stuff so that the window would correctly refresh when the window size was changed

//If I went back and redid this, I would focus on getting responsivess done inside CSS instead of the way I did it (although CSS responsiveness has failed me in the past)


import React, { useEffect, useState } from 'react';
import Desktop from './components/desktop';
import Mobile from './components/mobile';
import './App.css';

function App() {
  const isMobile = window.matchMedia('(max-width: 400px)').matches;
  const [debouncedIsMobile, setDebouncedIsMobile] = useState(isMobile);

  useEffect(() => {
    const handleResize = () => {
      setDebouncedIsMobile(window.matchMedia('(max-width: 400px)').matches);
    };

    const debouncedHandleResize = debounce(handleResize, 500);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  useEffect(() => {
    if (debouncedIsMobile !== isMobile) {
      window.location.reload();
    }
  }, [debouncedIsMobile]);

  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}
    </>
  );
}

export default App;

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
