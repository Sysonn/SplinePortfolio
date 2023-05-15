import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js';



function ThreeScene() {
    const containerRef = useRef();
  
    useEffect(() => {
      let camera, scene, renderer, controls;
  
      // camera
      camera = new THREE.OrthographicCamera(
        window.innerWidth / -2,
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerHeight / -2,
        -100000,
        100000
      );
      camera.position.set(163.11, -67.91, 1720.51);
      camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));
  
      // scene
      scene = new THREE.Scene();
  
      // spline scene
      const loader = new SplineLoader();
      loader.load('https://prod.spline.design/iow3jieq7twfDFrg/scene.splinecode', (splineScene) => {
        scene.add(splineScene);
      });
  
      // renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);
      containerRef.current.appendChild(renderer.domElement);


    
  
      // scene settings
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;
  
      scene.background = new THREE.Color('#e2d3ff');
      renderer.setClearAlpha(0);

        // Add lights to the scene
        const directionalLight = new THREE.DirectionalLight(0x333333, 0.5); // Decrease intensity and change color
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0x333333, 0.2); // Decrease intensity and change color
        scene.add(ambientLight);
    
      // orbit controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.125;

         // Initialize the composer
         const composer = new EffectComposer(renderer);
         const renderPass = new RenderPass(scene, camera);
         composer.addPass(renderPass);
 
         // Add a shader pass for darkening the scene
         const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
         //gammaCorrectionPass.uniforms.gamma.value = 0.8; // Adjust the gamma value to darken the scene
         //gammaCorrectionPass.uniforms.tDiffuse.value = renderPass.renderTarget.texture;
         composer.addPass(gammaCorrectionPass);
 
  
      function onWindowResize() {
        camera.left = window.innerWidth / -2;
        camera.right = window.innerWidth / 2;
        camera.top = window.innerHeight / 2;
        camera.bottom = window.innerHeight / -2;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
  
      function animate() {
        controls.update();
        renderer.render(scene, camera);
        composer.render();
      }
  
      window.addEventListener('resize', onWindowResize);
  
      return () => {
        // Clean up event listeners and resources
        window.removeEventListener('resize', onWindowResize);
        renderer.dispose();
      };
    }, []);
  
    return <div ref={containerRef} />;
  }

  export default ThreeScene;