import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';


function ThreeScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

   
   

      // camera
      const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -100000, 100000);
      camera.position.set(1230.38, 1240.37, 1307.71);
      camera.quaternion.setFromEuler(new THREE.Euler(-0.79, 0.62, 0.52));

      // scene
      const scene = new THREE.Scene();

      // spline scene
      const loader = new SplineLoader();
      loader.load(
        'https://prod.spline.design/wY3llFvdTqlqj6JI/scene.splinecode',
        (splineScene) => {
          scene.add(splineScene);
        }
      );

      // renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);
      document.body.appendChild(renderer.domElement);

      // scene settings
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;

      scene.background = new THREE.Color('#0e0e0e');
      renderer.setClearAlpha(1);

      // orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.125;

      window.addEventListener('resize', onWindowResize);
      function onWindowResize() {
        camera.left = window.innerWidth / - 2;
        camera.right = window.innerWidth / 2;
        camera.top = window.innerHeight / 2;
        camera.bottom = window.innerHeight / - 2;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      function animate(time) {
        controls.update();
        renderer.render(scene, camera);
      }

 
  

    // // Resize the canvas when the window resizes
    // function onWindowResize() {
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    // }
    // window.addEventListener('resize', onWindowResize);

    // // Cleanup
    // return () => {
    //   window.removeEventListener('resize', onWindowResize);
    // };


  }, []);

  //return <canvas ref={canvasRef} />;
}

export default ThreeScene;
















//////////////////////////////////////////////////////////

