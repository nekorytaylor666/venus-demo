/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SMK – National Gallery of Denmark (https://sketchfab.com/smkmuseum)
license: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
source: https://sketchfab.com/3d-models/venus-de-milo-statuestexturingchallenge-smk-2983d92ac4e744f485492580ca7629f2
title: Venus de Milo #StatuesTexturingChallenge [SMK]
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/venus.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Default} />
      </group>
    </group>
  )
}

useGLTF.preload('/venus.glb')