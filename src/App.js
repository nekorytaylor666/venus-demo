import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, ContactShadows, Environment, PerspectiveCamera } from '@react-three/drei'
import { proxy, useProxy } from 'valtio'

const state = {
  current: null,
  items: {
    laces: '#fff'
  }
}
const Venus = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('venus.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.1, 0.1, 0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Default} />
      </group>
    </group>
  )
}

useGLTF.preload('/venus.glb')

export default function App() {
  return (
    <Canvas
      orthographic
      camera={{
        zoom: 1.2,
        position: [50, 50, 0]
      }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[100, 100, 100]} />
      <directionalLight intensity={0.3} position={[200, 600, 300]} />
      <Suspense fallback={null}>
        <Venus />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
