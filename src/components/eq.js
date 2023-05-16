import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Bar = styled.span`
  height: ${({ height }) => height}px;
  width: 3px;
  background-color: black;
  margin-right: 4px;
`;



const useEqualizer = () => {
    const barsRef = useRef([]);
  
    const animateBars = useCallback(() => {
      barsRef.current.forEach((bar) => {
        const height = Math.random() * 40;
        //const timing = height * 500;
        //const marg = (170 + height) / 2;
        bar.style.height = height + "px";
        // bar.style.marginTop = marg + "px";
      });
      setTimeout(() => {
        animateBars();
      }, 100);
    }, []);
  
    useEffect(() => {
      animateBars();
    }, [animateBars]);
  
    return barsRef;
  };

const Equalizer = () => {
  const barsRef = useEqualizer();

  return (
    <Container>
      {Array.from({ length: 40 }, (_, index) => (
        <Bar id="music-bars" key={index} ref={(bar) => (barsRef.current[index] = bar)} height={Math.random() * 40}/>
      ))}
    </Container>
  );
};

export default Equalizer;