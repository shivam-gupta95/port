import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Html } from '@react-three/drei';
import CanvasLoader from "../Loader";
import { useEffect } from 'react';

const Computers = ({isMobile}) => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf', true);
  
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={scene} position={[-1,-3.5,-2]} scale={isMobile?0.6:0.75} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile , setIsMobile ] = useState(false);

  useEffect(()=>{
  const mediaQuery = window.matchMedia('(max-width:500px )');
  setIsMobile(mediaQuery.matches);

  const handleMediaQueryChange=(event)=>{
     setIsMobile(event.matches)
  }

  mediaQuery.addEventListener('change',handleMediaQueryChange);
  return ()=>{
    mediaQuery.removeEventListener('change',handleMediaQueryChange);
  }
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 4, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense
        fallback={
          <Html center>
            <CanvasLoader />
          </Html>
        }
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
