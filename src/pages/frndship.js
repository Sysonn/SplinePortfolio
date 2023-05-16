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
import TrackCanvasScroll from '../components/trackScroll';
import { TweenMax } from 'gsap';
import * as THREE from 'three';


function TestPage() {


  const [sceneSource] = useState("https://prod.spline.design/iow3jieq7twfDFrg/scene.splinecode");
  //const navigate = useNavigate();

  const [isFaderShown, setIsFaderShown] = useState(false);

  useEffect(() => {
    setIsFaderShown(true);
  }, []);

  
  const blob = useRef(null);
  const blob2 = useRef(null);
  const ui2 = useRef(null);


  function onLoad(spline) {

    const ui2Obj = spline.findObjectByName('ui 2');
    ui2.current = ui2Obj;

    const blobObj = spline.findObjectByName('Blob1');
    blob.current = blobObj;

    const blob2Obj = spline.findObjectByName('Blob2');
    blob2.current = blob2Obj;

     //scroll wheel effect/////////////////
    // function handleWheelScroll() {
    //     //const object = spline.findObjectByName(objectName);
    //     console.log("wheel scroll");
    //    // spline.emitEventReverse("start", blob);
    // }

    // window.addEventListener("wheel", handleWheelScroll);

    // useEffect(() => {
    //   function handleWheelScroll() {
    //         spline.emitEventReverse("start", ui2Obj);
    //       }
      
    //   // Add an event listener to the specific element for the 'wheel' event
    //   const element = document.getElementById('myElement'); // Replace 'myElement' with the ID of the element you want to attach the event listener to
    //   element.addEventListener("wheel", handleWheelScroll);
  
    //   return () => {
    //     // Clean up the event listener when the component unmounts
    //     element.removeEventListener("wheel", handleWheelScroll);
    //   };
    // }, []);



      

    if (blob.current &&  blob.current.visible !== undefined && blob.current.visible === false) {
      setIsFaderShown(true);
    } else if (blob.current && blob.current.visible !== undefined) {
      setIsFaderShown(false);
    }

  }
  
  function onMouseDownFrnd(e) {
  
    if (e.target.name === 'Projects') {
      console.log('projects clicked') 

      setColor('#7CA9FF'); // Change to the initial color
      requestAnimationFrame(() => {
        setColor('#7CA9FF'); // Change to the final color
      });

      const textElements = document.querySelectorAll('#change-color', '#change-color2 Title2');
      textElements.forEach((element) => {
        console.log("color change: ", element);
        element.style.transition = 'color 1s ease-in';
        element.style.color = '#7CA9FF'; // Change to the initial color
        requestAnimationFrame(() => {
          element.style.color = '#7CA9FF'; // Change to the final color
        });
      });


      const bgElements = document.querySelectorAll('#music-bars');      
      bgElements.forEach((element) => {
        console.log("color change: ", element);
        //element.style.transition = 'color 0.5s ease-in';
        element.style.backgroundColor = '#7CA9FF'; // Change to the initial color
        requestAnimationFrame(() => {
          element.style.color = '#7CA9FF'; // Change to the final color
        });
      });

    }

    if (e.target.name === 'UI/UX') {
      console.log('UI/UX clicked')

    }

  }

  const [color, setColor] = useState('#7f70bd');

  function onMouseHover(e) {

   if (e.target.name === 'ui 2') {

        //console.log("hovering over UI2");
      }

  }

  return (
   
    <Wrapper>
        {/* <Fader isFaderShown={isFaderShown}>
            <Container>
              <LoadingModal />
            </Container>
        </Fader> */}
       {/* {!isTitleHidden && <Title>DEREK SISSON</Title>} */}
       <div class="TitleWrapper">
          <Title color={color} transition> DEREK SISSON </Title>


          <div class="DescWrrapper">
            <div id="color-change" dangerouslySetInnerHTML={{ __html: '=&gt; PRODUCT MANAGER' }}></div>
            <div id="color-change" dangerouslySetInnerHTML={{ __html: '=&gt; DEVELOPER' }}></div>
            <div id="color-change" dangerouslySetInnerHTML={{ __html: '=&gt; DIGITAL DESIGNER & ARTIST' }}></div>
            <div id="color-change"  dangerouslySetInnerHTML={{ __html: '=&gt; XR ENTHUSIAST' }}></div>
          </div>
        
          <div class="AboutMenu">
          <Title2 color={color} transition>ABOUT ME</Title2>
          <Title2 color={color} transition>CONTACT</Title2>
          <Title2 color={color} transition>RESUME</Title2>
          </div>

          <div class="MusicWrapper">
            <div style={{ fontSize: "24px"}}>Chemical by Post Malone</div>
            <Equalizer />
          </div>

          <Clock />

       </div>
    <Spline 
    style={{ height: '100vh', width: '100vw', }}
    onMouseDown={onMouseDownFrnd} 
    onMouseHover={onMouseHover}
    onLoad={onLoad}
    //scene="https://prod.spline.design/UuiAgM4xAC9ftLdp/scene.splinecode"
    scene = {sceneSource}
    />
  </Wrapper>
   
  );
}

export default TestPage;

