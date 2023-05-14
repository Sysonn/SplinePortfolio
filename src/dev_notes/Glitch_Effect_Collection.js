/////////////////////////////////////////////////////////////////////
const PatternContainer = styled.div`
position: relative;
width: 100%;
height: 100vh;
overflow: hidden;
`;


////Glitch Pattern - Red////////////////////////////

const move = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(5px, -5px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const squareSize = '50px';
const gapSize = '20px';
const totalSize = `calc(${squareSize} + ${gapSize})`;



const Square = styled.div`
  position: absolute;
  width: ${squareSize};
  height: ${squareSize};
  background-color: #f00;
  transform-origin: center;
  animation: ${move} 1s ease-in-out infinite;
`;

      
      
      {/* <PatternContainer>
              {[...Array(25)].map((_, index) => (
                <Square
                  key={index}
                  style={{
                    top: `calc(${totalSize} * ${Math.floor(index / 5)})`,
                    left: `calc(${totalSize} * ${index % 5})`,
                    clipPath: `polygon(
                      0 0,
                      ${squareSize} 0,
                      ${squareSize} ${squareSize},
                      ${gapSize} ${squareSize},
                      ${gapSize} ${gapSize},
                      0 ${gapSize}
                    )`,
                  }}
                />
              ))}
            </PatternContainer> */}

/////////////////////////////////////////////////////////////////////


// const GlitchText = styled.h1`
//   font-size: 72px;
//   font-family: 'Days One', sans-serif;
//   color: #fff;
//   text-transform: uppercase;
//   text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.7);
//   animation: ${glitch} 1s linear infinite;
// `;




// const GlitchContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// const GlitchPattern = styled.div`
//   position: absolute;
//   top: -50%;
//   left: -50%;
//   width: 200%;
//   height: 200%;
//   background: linear-gradient(
//       45deg,
//       rgba(255, 255, 255, 0.05) 25%,
//       transparent 25%,
//       transparent 50%,
//       rgba(255, 255, 255, 0.05) 50%,
//       rgba(255, 255, 255, 0.05) 75%,
//       transparent 75%,
//       transparent
//     ),
//     linear-gradient(
//       45deg,
//       rgba(255, 255, 255, 0.05) 25%,
//       transparent 25%,
//       transparent 50%,
//       rgba(255, 255, 255, 0.05) 50%,
//       rgba(255, 255, 255, 0.05) 75%,
//       transparent 75%,
//       transparent
//     ),
//     linear-gradient(
//       to right,
//       #00f6ff,
//       #00dbde
//     );
//   background-size: 100% 100%;
//   animation: glitch 2s ease-in-out infinite;

//   @keyframes glitch {
//     0% {
//       transform: translate(0, 0);
//     }
//     25% {
//       transform: translate(25%, -25%);
//     }
//     50% {
//       transform: translate(50%, 0);
//     }
//     75% {
//       transform: translate(25%, 25%);
//     }
//     100% {
//       transform: translate(0, 0);
//     }
//   }
// `;

///////////////////////////////


const glitch = keyframes`
  0% {
    transform: skew(0deg);
  }
  20% {
    transform: skew(10deg);
  }
  40% {
    transform: skew(-10deg);
  }
  60% {
    transform: skew(20deg);
  }
  80% {
    transform: skew(-20deg);
  }
  100% {
    transform: skew(0deg);
  }
`;




{/* <GlitchText>Loading...</GlitchText> */}
            {/* <GlitchContainer>
              <GlitchPattern ref={patternRef} />
            </GlitchContainer> */}




            
  // const patternRef = useRef(null);
  // useEffect(() => {
  //   gsap.fromTo(
  //     patternRef.current,
  //     { opacity: 0 },
  //     { duration: 0.5, opacity: 1, ease: 'power2.inOut' }
  //   );
  // }, []);
