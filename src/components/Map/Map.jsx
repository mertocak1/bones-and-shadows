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
  const playerRigidBody = useRef();
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      <Suspense fallback={null}>
        <RigidBody mass={1} colliders="trimesh" type="fixed">
          <StarterMap />
        </RigidBody>

        <Ecctrl
          ref={playerRigidBody}
          mass={1}
          animated
          position={[-6, 5, 10]}
          maxVelLimit={6}
        >
          <Player
            playerPositionRef={playerPositionRef}
            enemyPositionRef={enemyPositionRef}
            playerRigidBody={playerRigidBody}
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
