'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import carModel from '@/public/assets/car1.glb';

export function Car({ ...props }) {
  const carRef = useRef();
  const { nodes, materials } = useGLTF(carModel);

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.Paint}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={materials.Black_Paint}
        skeleton={nodes.Object_8.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_9.geometry}
        material={materials.Black_plastic}
        skeleton={nodes.Object_9.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_10.geometry}
        material={materials.Interior_light_material}
        skeleton={nodes.Object_10.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_11.geometry}
        material={materials.Underbody}
        skeleton={nodes.Object_11.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_12.geometry}
        material={materials.Glass}
        skeleton={nodes.Object_12.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_13.geometry}
        material={materials.Rubber}
        skeleton={nodes.Object_13.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_14.geometry}
        material={materials.Reflector}
        skeleton={nodes.Object_14.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_15.geometry}
        material={materials.Fog_lights}
        skeleton={nodes.Object_15.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_16.geometry}
        material={materials.Reverse_lights}
        skeleton={nodes.Object_16.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_17.geometry}
        material={materials.Headlight}
        skeleton={nodes.Object_17.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_18.geometry}
        material={materials.Orange_plastic}
        skeleton={nodes.Object_18.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_19.geometry}
        material={materials.Tail_lights}
        skeleton={nodes.Object_19.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_20.geometry}
        material={materials.White_plastic}
        skeleton={nodes.Object_20.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_21.geometry}
        material={materials.Red_plastic}
        skeleton={nodes.Object_21.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_23.geometry}
        material={materials.Black_Paint}
        skeleton={nodes.Object_23.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_24.geometry}
        material={materials.Black_plastic}
        skeleton={nodes.Object_24.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_25.geometry}
        material={materials.Rubber}
        skeleton={nodes.Object_25.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_27.geometry}
        material={materials.Rubber}
        skeleton={nodes.Object_27.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_28.geometry}
        material={materials.Black_Paint}
        skeleton={nodes.Object_28.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_29.geometry}
        material={materials.Rim_cap}
        skeleton={nodes.Object_29.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_31.geometry}
        material={materials.Black_Paint}
        skeleton={nodes.Object_31.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_32.geometry}
        material={materials.Rubber}
        skeleton={nodes.Object_32.skeleton}
      />
    </group>
  );
}

useGLTF.preload(carModel);
