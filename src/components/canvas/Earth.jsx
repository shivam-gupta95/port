import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Earth = () => {
  const { scene } = useGLTF('/planet/scene.gltf', true);

  // Debugging: Log the scene
  console.log(scene);

  return( <mesh>
    <primitive object={scene} />
  </mesh>);
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [-4, 3, 6], fov: 25, near:0.1, far:200 }}
    >
      <Suspense fallback={<>Loading...</>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Earth/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;