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


function TestPage() {


  const [sceneSource] = useState("https://prod.spline.design/iow3jieq7twfDFrg/scene.splinecode");
  const navigate = useNavigate();

  const [isFaderShown, setIsFaderShown] = useState(false);

  useEffect(() => {
    setIsFaderShown(true);
  }, []);

  
  const blob = useRef(null);
  const blob2 = useRef(null);
  const cam = useRef(null);
  const ui2 = useRef(null);

  function onLoad(spline) {


    const cameraObj = spline.findObjectByName('ui');
    cam.current = cameraObj;
    const ui2Obj = spline.findObjectByName('ui 2');
    ui2.current = ui2Obj;
    const blobObj = spline.findObjectByName('Sphere');
    blob.current = blobObj;
    const blob2Obj = spline.findObjectByName('Sphere 2');
    blob2.current = blob2Obj;

      

    if (blob.current &&  blob.current.visible !== undefined && blob.current.visible === false) {
      setIsFaderShown(true);
    } else if (blob.current && blob.current.visible !== undefined) {
      setIsFaderShown(false);
    }

  }
  
  function onMouseDownFrnd(e) {
  
    if (e.target.name === 'Projects') {
      //navigate('/projects/frndship');

      console.log('projects clicked')

   }

   if (e.target.name === 'UI/UX') {
    //navigate('/projects/frndship');
    blob2.current.visible = false;

    console.log("blob: ", blob);
    console.log("blob.current: ", blob.current);
    console.log("blob.current.parent: ", blob.current.parent);
    console.log("blob.parent: ", blob.parent);

      const camPosition = cam.current.position.clone();
      const newPosition = new THREE.Vector3(
        camPosition.x, // maintain the same x position
        camPosition.y + 2000, // add 500 to the y position
        camPosition.z, // maintain the same z position
        //cam.current.visible = false
      );

      TweenMax.to(cam.current.position, 2, { x: newPosition.x, y: newPosition.y, z: newPosition.z, yoyo: false});
      //console.log("cam: ", cam);
      //console.log("camPosition-y: ", cam.current.position.y);

      
      //// Move UI 2 Into Scene/ ///
      const ui2Position = cam.current.position.clone();
      const newui2Position = new THREE.Vector3(
        ui2Position.x,
        ui2Position.y + 300, 
        ui2Position.z, 
      );
      TweenMax.to(ui2.current.position, 2, { x: newui2Position.x, y: newui2Position.y, z: newui2Position.z, });
       //////////


        //// Move Blob1 out of Scene/ ///
      // const blob1Position = blob.current.position.clone();
      // const newblob1Position = new THREE.Vector3(
      //   blob1Position.x,
      //   blob1Position.y + 2500, 
      //   blob1Position.z, 
      // );
      // TweenMax.to(blob.current.position, 2, { x: newblob1Position.x, y: newblob1Position.y, z: newblob1Position.z, 
      //   onComplete: function() {
      //   blob.current.visible = false;
      // }});
       //////////


       
        //// TEST - Move Blob1 into Scene/ ///
          const blob1Position = blob.current.position.clone();
          const newblob1Position = new THREE.Vector3(
            blob1Position.x,
            blob1Position.y - 2500, 
            blob1Position.z, 
          );
          TweenMax.to(blob.current.position, 1, { x: newblob1Position.x, y: newblob1Position.y, z: newblob1Position.z, 
            onComplete: function() {
            blob.current.visible = true;
            blob2.current.emitEventReverse("start", "Sphere");
          }});
          ///////move in
          // const blob1Position = blob.current.position.clone();
          // const newblob1Position = new THREE.Vector3(
          //   blob1Position.x,
          //   blob1Position.y - 2500, 
          //   blob1Position.z, 
          // );
          // TweenMax.to(blob.current.position, 1, { x: newblob1Position.x, y: newblob1Position.y, z: newblob1Position.z, 
          //   onComplete: function() {
          //   blob.current.visible = false;
          // }});

       //////////


        //// Move Blob2 Into Scene/ ///
      const blob2Position = blob2.current.position.clone();
      const newblob2Position = new THREE.Vector3(
        blob2Position.x,
        blob2Position.y + 2500, 
        blob2Position.z, 
      );
    
      TweenMax.to(blob2.current.position, 2, { x: newblob2Position.x, y: newblob2Position.y, z: newblob2Position.z, 
        onComplete: function() {
        //obj.visible = true;
        blob2.current.emitEventReverse("start", "Sphere 2");
      }});
       //////////



 }

  }



  function onMouseHover(e) {

   if (e.target.name === 'ui 2') {

        //console.log("hovering over UI2");
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
        
          <div class="AboutMenu">
          <Title2>ABOUT ME</Title2>
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

