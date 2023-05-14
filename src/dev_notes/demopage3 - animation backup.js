import Spline from '@splinetool/react-spline';
import styled, { css, keyframes } from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../glitch.scss';




///////////////////////////////

const Container = styled.div`
  // background: black;
  background: #241C41;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//////////////////////////////////

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Fader = styled.div`

// @keyframes fade {
//   from { opacity: 1; }
//   to { opacity: 0; }
// }

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
        animation-name: ${fadeIn};
        //animation-delay: 2s;
      `
    : css`
        animation-name: ${fadeOut};
        animation-delay: 2s;
      `}


// animation: ${fadeIn} 0.5s ease-in-out forwards;
// animation-delay: 2s;
// ${({ isFaderShown }) => !isFaderShown && css`
//   animation-direction: reverse;
//   animation-delay: 2s;
// `}
`;

const Wrapper = styled.div`

`;

const Title = styled.h1`
  position: absolute;
  font-family: 'Days One', sans-serif;
  font-size: 32px;
  color: #241C41;
  padding: 0;
  margin-left: 20px;
  margin-top: 10px;
  letter-spacing: -2.5px;
`;


function App() {

  const blob = useRef(null);

  function onLoad(spline) {
    const obj = spline.findObjectByName('Sphere');
    blob.current = obj;

    if (blob.current && blob.current.visible === false) {
      console.log("onLoad - Blob is Not Visible: ", blob.current.visible);
      setIsFaderShown(true);
    } else if (blob.current) {
      console.log("onLoad - Blob is Visible: ", blob.current.visible);
      setIsFaderShown(false);
    }

  
  }



  //const [isTitleHidden, setIsTitleHidden] = useState(false);
  const [isFaderShown, setIsFaderShown] = useState(true);
  const [isLoading] = useState(true);


  useEffect(() => {
    console.log("isLoading: ", isLoading);
    console.log("isFaderShown: ", isFaderShown);
  }, [isLoading, isFaderShown]);


  
  function onMouseDown(e) {
    if (e.target.name === 'About Me') {
       //setIsTitleHidden(prevState => !prevState);
    
        setIsFaderShown(true);
        console.log("isFaderShown: ", isFaderShown);
      

      // if (blob.current.visible === false) {
      //   blob.current.visible = true;
      // }else {
      //   blob.current.visible = false;
      // }



    }
  }

  return (
   
    <Wrapper>
        <Fader isFaderShown={isFaderShown}>
            <Container>
              <div class="container">
              <div class="glitch" data-text="LOADING...">LOADING...</div>
              <div class="glow">LOADING...</div>
              <p class="subtitle">Please Wait</p>
              </div>
              <div class="scanlines"></div>
            </Container>
        </Fader>
       {/* {!isTitleHidden && <Title>DEREK SISSON</Title>} */}
       <Title>DEREK SISSON</Title>
    <Spline 
    style={{ height: '100vh', width: '100vw', }}
    onMouseDown={onMouseDown} 
    onLoad={onLoad}
    scene="https://prod.spline.design/4ujCjJlTmdRi4uhD/scene.splinecode" />
  </Wrapper>
   
  );
}

export default App;

