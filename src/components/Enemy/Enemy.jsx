import React, { useRef, useEffect, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useGame } from "../../GameContext";
import { RigidBody } from "@react-three/rapier";
// Import or define any additional hooks or utilities you need for physics or game logic.

export default function Enemy() {
  const { scene } = useGLTF("/src/assets/enemies/Skeleton_Minion.glb");
  const enemyRef = useRef(); // This ref will be used for Three.js operations, like transformations.
  const { addEnemy, removeEnemy, attackEnemy } = useGame();
  const enemyId = useRef(Math.random()).current; // Unique identifier for the enemy instance.

  // Initialization
  useEffect(() => {
    // Add the enemy to the game context with initial health.
    addEnemy(enemyId, { ref: enemyRef, health: 16 });

    // Cleanup function to remove the enemy from the game context.
    return () => {
      removeEnemy(enemyId);
    };
  }, [addEnemy, removeEnemy, enemyId]);

  return (
    <group ref={enemyRef}>
      <RigidBody>
        <primitive object={scene} position={[-4, 1, -4]} />
        {/* Additional visual or interactive components can be nested here. */}
      </RigidBody>
    </group>
  );
}
