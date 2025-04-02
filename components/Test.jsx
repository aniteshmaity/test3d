import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Asset } from 'expo-asset';

export function Test(props) {
  const glbUri = Asset.fromModule(require("../assets/images/GTF_Cutaway.glb")).uri;
  const { nodes, materials } = useGLTF(glbUri)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={nodes.mesh_0_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={nodes.mesh_0_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={nodes.mesh_0_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={nodes.mesh_0_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_5.geometry}
          material={nodes.mesh_0_5.material}
        />
        <group position={[0, -35.922, -5.944]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_1.geometry}
            material={nodes.mesh_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_1_1.geometry}
            material={nodes.mesh_1_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_1_2.geometry}
            material={nodes.mesh_1_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_1_3.geometry}
            material={nodes.mesh_1_3.material}
          />
        </group>
        <group position={[0, -184.572, -5.944]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_2.geometry}
            material={nodes.mesh_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_1.geometry}
            material={nodes.mesh_2_1.material}
          />
        </group>
      </group>
    </group>
  )
}

