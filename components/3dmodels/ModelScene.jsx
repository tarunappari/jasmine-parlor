"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Butterfly } from "./butterlfy";

export default function ModelScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} />
      <Butterfly />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
