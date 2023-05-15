import Spline from '@splinetool/react-spline';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/glitch.scss';
import { 
    Container, 
    Fader, 
    Wrapper, 
    Title, 
} from '../style/style.js'; 

function TestPage() {

  const [sceneSource] = useState(
    'https://prod.spline.design/UuiAgM4xAC9ftLdp/scene.splinecode'
   );
  const navigate = useNavigate();


  const blob = useRef(null);

  function onLoad(spline) {
 
    const blobObj = spline.findObjectByName('Sphere');

    blob.current = blobObj;


    if (blob.current &&  blob.current.visible !== undefined && blob.current.visible === false && spline.sceneUrl !== "https://prod.spline.design/wY3llFvdTqlqj6JI/scene.splinecode") {
        setIsFaderShown(true);
      } else if (blob.current && blob.current.visible !== undefined) {
        setIsFaderShown(false);
      }

  }


  const [isFaderShown, setIsFaderShown] = useState(true);
  const [isLoading] = useState(true);


  useEffect(() => {
    console.log("isLoading: ", isLoading);
    console.log("isFaderShown: ", isFaderShown);
  }, [isLoading, isFaderShown]);


  
  function onMouseDown(e) {
    if (e.target.name === 'About Me') {
       navigate('/test');
    }

    if (e.target.name === 'UI/UX') {
       navigate('/test');
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
       <Title>DEREK SISSON</Title>
    <Spline 
    style={{ height: '100vh', width: '100vw', }}
    onMouseDown={onMouseDown} 
    onLoad={onLoad}
    scene = {sceneSource}
    />
  </Wrapper>
   
  );
}

export default TestPage;

