import React, { Suspense, useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import StarterMap from "../StarterMap/StarterMap";
import Player from "../Player/Player";
import Enemy from "../Enemy/Enemy";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import * as THREE from "three";

export default function Level1() {
  const playerPositionRef = useRef(new THREE.Vector3());
  const enemyPositionRef = useRef(new THREE.Vector3());
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      <Suspense fallback={null}>
        {/* Fixed RigidBody for the environment */}
        <RigidBody colliders="trimesh" type="fixed">
          <StarterMap />
        </RigidBody>

        <Ecctrl debug={true} animated position={[0, 5, 0]} maxVelLimit={5}>
          <Player
            playerPositionRef={playerPositionRef}
            enemyPositionRef={enemyPositionRef}
          />
        </Ecctrl>

        <Enemy
          playerPositionRef={playerPositionRef}
          enemyPositionRef={enemyPositionRef}
        />
      </Suspense>
    </>
  );
}
