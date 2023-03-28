import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer =isMobile?useGLTF("./laptop/scene.gltf"):useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 0.4 : 0.15} groundColor="black" />
      {!isMobile ? (
        <spotLight position={[25, 50, 10]} angle={0.15} intensity={1} />
      ) : (
        ""
      )}
      <pointLight intensity={0.} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 0.75}
        position={isMobile ? [0, 0, 0] : [0, -3.4, -1.5]}
        rotation={isMobile ? [0, 0.78, 0] : [-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position:isMobile? [5, 5, 5]:[20, 3, 5], fov:isMobile ? 30:25,near: 0.1,
        far: 30}}
      gl={{ preserveDrawingBuffer: true ,
        powerPreference: "high-performance",
        antialias: false,
        }}
      
      style={isMobile ?{
        width : "100vw",
        height :"330px",
        position: "absolute",
        top: "65%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }: {}}
    >
      <Suspense fallback={<CanvasLoader />}>
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
