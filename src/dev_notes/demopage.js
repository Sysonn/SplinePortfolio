import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SplineLoader from '@splinetool/loader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/wY3llFvdTqlqj6JI/scene.splinecode');



function ThreeScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Create the scene
    const scene = new THREE.Scene();

    // Create the camera
    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // );
    // camera.position.z = 5;
    const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -100000, 100000);
    camera.position.set(1230.38, 1240.37, 1307.71);
    camera.quaternion.setFromEuler(new THREE.Euler(-0.79, 0.62, 0.52));

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    //Load and set up the environment map
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const loader2 = new RGBELoader();
    loader2.setDataType(THREE.UnsignedByteType);
    loader2.load('path/to/environment.hdr', (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      scene.environment = envMap;
      texture.dispose();
      pmremGenerator.dispose();
    });

    // Add a cube with a PBR material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: 0xba61ff,
      roughness: 0.4,
      metalness: 0.5,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);


    // spline scene
    const loader = new SplineLoader();
    loader.load(
    //   'https://prod.spline.design/wY3llFvdTqlqj6JI/scene.splinecode',
    'https://prod.spline.design/4ujCjJlTmdRi4uhD/scene.splinecode',
      (splineScene) => {
        scene.add(splineScene);
      }
    );
  

    // Add an area light
    const light = new THREE.RectAreaLight(0xffffff, 5, 2, 2);
    light.position.set(0, 3, 0);
    light.lookAt(0, 0, 0);
    scene.add(light);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Animate the scene
    function animate() {
      requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Resize the canvas when the window resizes
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default ThreeScene;

