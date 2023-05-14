import Spline from '@splinetool/react-spline';
import { useState, useRef, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
//import { gsap } from 'gsap';
import '../style/glitch.scss';
import { Container, 
         Fader, 
         Wrapper, 
         Title, 
        } from '../style/style.js'; 
import { LoadingModal } from '../components/loadModal';





function HomePage() {


  const [sceneSource] = useState("https://prod.spline.design/4ujCjJlTmdRi4uhD/scene.splinecode");
  const navigate = useNavigate();

  const [isFaderShown, setIsFaderShown] = useState(false);
  //const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    setIsFaderShown(true);
  }, []);


  


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

  //const [isTitleHidden, setIsTitleHidden] = useState(false);
  
  function onMouseDown(e) {
    if (e.target.name === 'About Me') {
       //setIsTitleHidden(prevState => !prevState);
      setIsFaderShown(true);
      navigate('/test');
    }

    if (e.target.name === 'UI/UX') {
      //setOpacity(0.5); 
      navigate('/test');
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
       <Title>DEREK SISSON</Title>
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

