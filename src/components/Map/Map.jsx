import React, { Suspense, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import StarterMap from "../StarterMap/StarterMap";
import Player from "../Player/Player";
import Enemy from "../Enemy/Enemy";

export default function Level1() {
  const [playerPosition, setPlayerPosition] = useState(null);
  const [enemyPosition, setEnemyPosition] = useState(null);
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      <Suspense fallback={null}>
        {/* Fixed RigidBody for the environment */}
        <RigidBody colliders="trimesh" type="fixed">
          <StarterMap />
        </RigidBody>

        <Player
          position={playerPosition}
          setPosition={setPlayerPosition}
          enemyPosition={enemyPosition}
        />

        <Enemy
          playerPosition={playerPosition}
          position={enemyPosition}
          setPosition={setEnemyPosition}
        />
      </Suspense>
    </>
  );
}
