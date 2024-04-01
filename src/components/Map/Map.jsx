import React, { Suspense } from "react";
import { RigidBody } from "@react-three/rapier";
import StarterMap from "../StarterMap/StarterMap";
import Player from "../Player/Player";
import Enemy from "../Enemy/Enemy";

export default function Level1() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      <Suspense fallback={null}>
        {/* Fixed RigidBody for the environment */}
        <RigidBody colliders="trimesh" type="fixed">
          <StarterMap />
        </RigidBody>

        <Player />
        <Enemy />
      </Suspense>
    </>
  );
}
