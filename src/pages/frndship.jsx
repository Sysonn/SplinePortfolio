/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei'

function SplineScene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/U20NbPEThXeQshyI/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#fee1e1']} />
      <group {...props} dispose={null}>
        <mesh
          name="Blob"
          geometry={nodes.Blob.geometry}
          material={materials['Blob Material']}
          castShadow
          receiveShadow
          position={[5.36, 137.26, -1272.77]}
          rotation={[-0.02, 0.05, 0]}
          scale={1}
        />
        <pointLight
          name="Point Light"
          castShadow
          intensity={1.39}
          distance={2000}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={100}
          shadow-camera-far={100000}
          position={[426.86, 128.14, -385.33]}
        />
        <OrthographicCamera
          name="Camera"
          makeDefault={true}
          zoom={0.44}
          far={100000}
          near={-100000}
          up={[0, 1, 0]}
          position={[178.25, -15.23, 2287.76]}
          rotation={[0, 0, 0]}
          scale={1}
        />
        <group name="ui2" position={[243, -2107.08, 100]}>
          <mesh
            name="BlueBox"
            geometry={nodes.BlueBox.geometry}
            material={materials['BlueBox Material']}
            castShadow
            receiveShadow
            position={[-530.76, -110.76, -15.87]}
            rotation={[-0.04, 0.19, 0.22]}
            scale={1}
          />
          <mesh
            name="BlueMain"
            geometry={nodes.BlueMain.geometry}
            material={materials['BlueMain Material']}
            castShadow
            receiveShadow
            position={[0, 0, -100]}
          />
        </group>
        <group name="ui" position={[243, 0, 100]}>
          <mesh
            name="Projects"
            geometry={nodes.Projects.geometry}
            material={materials['Projects Material']}
            castShadow
            receiveShadow
            position={[-530.76, -110.76, -15.87]}
            rotation={[-0.04, 0.19, 0.22]}
            scale={1}
          />
          <mesh
            name="Main"
            geometry={nodes.Main.geometry}
            material={materials['Main Material']}
            castShadow
            receiveShadow
            position={[0, 0, -100]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
          position={[200, 300, 300]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}

export default function Scene() {
  return (
    <Canvas style={{height: 1000}}>
      <color attach="background" args={['#fee1e1']} />
      <ambientLight intensity={0.75} />
      <directionalLight intensity={0.7} position={[200, 300, 300]} />
      <pointLight
        intensity={1.39}
        position={[426.86, 128.14, -385.33]}
        distance={2000}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={100}
        shadow-camera-far={100000}
      />
      <SplineScene />
    </Canvas>
  );
}