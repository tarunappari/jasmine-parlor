import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Butterfly(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/butterfly.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Armature|ArmatureAction"]?.reset().fadeIn(0.5).play();

    if (!group.current) return;

    group.current.traverse((child) => {
      if (child.isMesh || child.isSkinnedMesh) {
        child.castShadow = true;
        child.receiveShadow = false;

        if (child.material) {
          // ✅ modern color handling
          if (child.material.map) {
            child.material.map.colorSpace = THREE.SRGBColorSpace;
          }

          // optional tint
          child.material.color.set("#fe8fda");
          child.material.needsUpdate = true;
        }
      }
    });
  }, [actions]);

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          castShadow
          rotation={[0, 0, 0]}
          scale={0.01}
        >
          <group
            name="Butterfly_3fbx"
            castShadow
            rotation={[-0.7, -2, -0.5]}
            scale={0.35}
            ref={group}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane"
                  position={[0, 78.053, -36.942]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cube"
                  position={[0, 78.053, -5.007]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Sphere"
                  position={[-4.394, 78.113, -46.656]}
                  rotation={[-2.9, 0, 0]}
                  scale={100}
                />
                <group
                  name="Torus001"
                  position={[0, 64.13, -35.571]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={100}
                />
                <group
                  name="Cube001"
                  position={[12.969, 74.194, -31.727]}
                  rotation={[-2.309, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cube002"
                  position={[12.969, 74.068, -18.121]}
                  rotation={[-2.309, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cube003"
                  position={[12.969, 80.376, -4.171]}
                  rotation={[-2.661, 0, 0]}
                  scale={100}
                />
                <group name="Armature" rotation={[Math.PI, 0, 0]} scale={100}>
                  <group name="Object_12">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.Butterfly}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.Butterfly}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.Butterfly}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    <skinnedMesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials.Butterfly}
                      skeleton={nodes.Object_21.skeleton}
                    />
                    <skinnedMesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials.Butterfly}
                      skeleton={nodes.Object_23.skeleton}
                    />
                    <skinnedMesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      material={materials.Butterfly}
                      skeleton={nodes.Object_25.skeleton}
                    />
                    <skinnedMesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials.Butterfly}
                      skeleton={nodes.Object_27.skeleton}
                    />
                    <group
                      name="Object_14"
                      position={[0, 78.053, -36.942]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_16"
                      position={[0, 78.053, -5.007]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_18"
                      position={[-4.394, 78.113, -46.656]}
                      rotation={[-2.9, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_20"
                      position={[0, 64.13, -35.571]}
                      rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_22"
                      position={[12.969, 74.194, -31.727]}
                      rotation={[-2.309, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_24"
                      position={[12.969, 74.068, -18.121]}
                      rotation={[-2.309, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_26"
                      position={[12.969, 80.376, -4.171]}
                      rotation={[-2.661, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/butterfly.glb");
