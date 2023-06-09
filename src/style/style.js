import styled, { css, keyframes } from 'styled-components';


///////////////////////////////

export const Container = styled.div`
  // background: black;
  background: #241C41;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//////////////////////////////////

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Fader = styled.div`
z-index: 100;
pointer-events: none;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #241C41;

animation-duration: 0.5s;
animation-timing-function: ease-in-out;
animation-fill-mode: forwards;
${({ isFaderShown }) =>
  isFaderShown
    ? css`
        //animation-name: ${fadeIn};
        animation-delay: 0s;
        animation-duration: 1s;
      `
    : css`
        animation-name: ${fadeOut};
        animation-delay: 2s;
      `}


`;

export const Wrapper = styled.div`

`;

export const Title = styled.h1`
  position: relative;
  font-family: 'Days One', sans-serif;
  font-size: 40px;
  color: #241C41;
  opacity: 0.8;
  padding: 0;
  margin-left: 20px;
  margin-top: 10px;
  letter-spacing: -2.5px;



`;


export const Title2 = styled.h2`
  position: relative;
  font-family: 'Days One', sans-serif;
  font-size: 18px;

  padding: 0;
  margin-top: 15px;
  letter-spacing: -1px;

  ${({ color }) =>
  color &&
  css`
    color: ${color};
  `};

  ${({ transition }) =>
  transition &&
  css`
    transition: color 1s ease-in;
  `};
`;
