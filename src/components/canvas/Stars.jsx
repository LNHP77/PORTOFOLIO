import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array (5000),  { radius: 1.2})

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
      <PointMaterial
       transparent
       color="#f272c8"
       size={0.002}
       sizeAttenuation={true}
       depthWrite={false}
      />
      </Points> 
    </group>
  )
}



const AnimatedStars = (props) => {
  const groupRef = useRef();

  // Utilisation de useFrame pour ajouter de l'animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars {...props} />
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <AnimatedStars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;