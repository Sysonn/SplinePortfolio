import React, { useEffect, useRef } from 'react';

function TrackCanvasScroll() {
  const canvasRef = useRef(null);

  useEffect(() => {
    function handleScroll(event) {
      // Access scroll-related information from the event object
      const { scrollTop, scrollHeight, clientHeight } = event.target;
      // Perform actions based on scroll position or other scroll-related data
      console.log('Scroll Top:', scrollTop);
      console.log('Scroll Height:', scrollHeight);
      console.log('Client Height:', clientHeight);
    }

    const canvasElement = canvasRef.current;
    canvasElement.addEventListener('scroll', handleScroll);

    return () => {
      canvasElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //return <canvas ref={canvasRef} />;
}

export default TrackCanvasScroll;