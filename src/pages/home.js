import Spline from '@splinetool/react-spline';
import { useState, useRef, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
//import { gsap } from 'gsap';
import '../style/glitch.scss';
import { Container, 
         Fader, 
         Wrapper, 
         Title, 
         Title2,
        } from '../style/style.js'; 
import { LoadingModal } from '../components/loadModal';
import Equalizer from '../components/eq.js';
import Clock from '../components/clock.js';
import { TweenMax } from 'gsap';
import * as THREE from 'three';









function HomePage() {


  const [sceneSource] = useState("https://prod.spline.design/4ujCjJlTmdRi4uhD/scene.splinecode");
  const navigate = useNavigate();

  const [isFaderShown, setIsFaderShown] = useState(false);
  //const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    setIsFaderShown(true);
  }, []);


  
 

  const blob = useRef(null);
  const cam = useRef(null);

  function onLoad(spline) {
    const cameraObj = spline.findObjectByName('ui');
    cam.current = cameraObj;
    const blobObj = spline.findObjectByName('Sphere');
    blob.current = blobObj;

    if (blob.current &&  blob.current.visible !== undefined && blob.current.visible === false && spline.sceneUrl !== "https://prod.spline.design/wY3llFvdTqlqj6JI/scene.splinecode") {
      setIsFaderShown(true);
    } else if (blob.current && blob.current.visible !== undefined) {
      setIsFaderShown(false);
    }

  }

  //const [isTitleHidden, setIsTitleHidden] = useState(false);
  
  function onMouseDown(e) {
    if (e.target.name === 'About Me') {
       //setIsTitleHidden(prevState => !prevState);
      setIsFaderShown(true);
      navigate('projects/frndship');
    }

    if (e.target.name === 'UI/UX') {
      //navigate('/projects/frndship');

        const camPosition = cam.current.position.clone();
        const newPosition = new THREE.Vector3(
          camPosition.x, // maintain the same x position
          camPosition.y + 2000, // add 500 to the y position
          camPosition.z, // maintain the same z position
          //cam.current.visible = false
        );

        TweenMax.to(cam.current.position, 2, { x: newPosition.x, y: newPosition.y, z: newPosition.z });
        console.log("cam: ", cam);
        console.log("camPosition-y: ", cam.current.position.y);

   }

  }

  return (
   
    <Wrapper>
        <Fader isFaderShown={isFaderShown}>
            <Container>
              <LoadingModal />
            </Container>
        </Fader>
       {/* {!isTitleHidden && <Title>DEREK SISSON</Title>} */}
       <div class="TitleWrapper">
          <Title style={{ }}> DEREK SISSON </Title>

          <div class="DescWrrapper">
            <div dangerouslySetInnerHTML={{ __html: '=&gt; PRODUCT MANAGER' }}></div>
            <div dangerouslySetInnerHTML={{ __html: '=&gt; DEVELOPER' }}></div>
            <div dangerouslySetInnerHTML={{ __html: '=&gt; DIGITAL DESIGNER & ARTIST' }}></div>
            <div dangerouslySetInnerHTML={{ __html: '=&gt; XR ENTHUSIAST' }}></div>
          </div>

          <div class="AboutMenu">
          <Title2 id="change-color">ABOUT ME</Title2>
          <Title2>CONTACT</Title2>
          <Title2>RESUME</Title2>
          </div>

          <div class="MusicWrapper">
            <div style={{ fontSize: "24px"}}>Chemical by Post Malone</div>
            <Equalizer />
          </div>

          <Clock />

       </div>
    <Spline 
    style={{ height: '100vh', width: '100vw', }}
    onMouseDown={onMouseDown} 
    onLoad={onLoad}
    //scene="https://prod.spline.design/4ujCjJlTmdRi4uhD/scene.splinecode" 
    scene = {sceneSource}
    />
  </Wrapper>
   
  );
}

export default HomePage;

