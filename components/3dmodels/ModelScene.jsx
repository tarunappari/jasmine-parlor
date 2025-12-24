"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Butterfly } from "./butterlfy";
import { Suspense } from "react";

export default function ModelScene() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows camera={{ position: [2, 5, 5] }}>
        <ambientLight intensity={0.7} />

        <directionalLight
          position={[-5, 12, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Butterfly />

        {/* SHADOW CATCHER */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.25} />
        </mesh>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </Suspense>
  );
}
