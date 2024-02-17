"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Sky, OrbitControls, Bounds } from "@react-three/drei";
import {
  EffectComposer,
  SSAO,
  SMAA,
  Selection,
  Outline,
} from "@react-three/postprocessing";
import { Bedroom } from "./Bedroom";

export default function Model() {
  const [selectedObject, setSelectedObject] = useState(null);
  const [hoveredObject, setHoveredObject] = useState(null);

  const handleObjectClick = (object) => {
    setSelectedObject(object);
  };

  const handleObjectHover = (object) => {
    setHoveredObject(object);
  };

  return (
    <Canvas camera={{ position: [4, 8, -7] }}>
      {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
      {/* <fog attach="fog" args={['#d4d4d4', 5, 18]} /> */}
      {/* <ambientLight intensity={1} /> */}
      {/* <directionalLight intensity={0.2} position={[2, 2, 0]} /> */}
      {/* <pointLight intensity={40} position={[0, 7, 0]} /> */}
      {/* <spotLight intensity={5} position={[0.5, 5, 3]} /> */}
      <Selection>
        <EffectComposer multisampling={0} autoClear={false}>
          <SSAO
            radius={0.05}
            intensity={10}
            luminanceInfluence={0.5}
            color="black"
          />
          <Outline
            visibleEdgeColor={selectedObject ? "green" : "green"}
            hiddenEdgeColor={selectedObject ? "green" : "green"}
            blur
            width={1000}
            edgeStrength={100}
          />
          <SMAA />
        </EffectComposer>
        <Bounds margin={1.2} damping={0}>
          <Bedroom
            onObjectClick={handleObjectClick}
            onObjectHover={handleObjectHover}
          />
        </Bounds>
      </Selection>
      <OrbitControls />
      <Environment preset="city" background blur={1} />
    </Canvas>
  );
}
