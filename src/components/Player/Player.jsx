import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useGame } from "../../GameContext";
import * as THREE from "three";

const playerUrl = "/src/assets/char/barbar.glb";

export default function Player({ playerPositionRef, enemyPositionRef }) {
  const playerRef = useRef();
  const { scene, animations } = useGLTF(playerUrl);
  const { actions } = useAnimations(animations, scene);
  const { enemies, attackEnemy } = useGame();
  const { camera } = useThree();

  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame(() => {
    const { forward, backward, leftward, rightward, attack } = getKeys();

    // Movement logic...
    if (forward || backward || leftward || rightward) {
      actions.Walking_B.play();
      actions["2H_Melee_Idle"].stop();
    } else {
      actions["2H_Melee_Idle"].play();
      actions.Walking_B.stop();
    }

    // Attack logic
    if (attack) {
      actions["2H_Melee_Attack_Slice"].play();
      // Trigger attack detection logic
      performAttackDetection();
    } else {
      actions["2H_Melee_Attack_Slice"].stop();
    }
  });

  useFrame(() => {
    if (playerRef.current) {
      playerRef.current.getWorldPosition(playerPositionRef.current);
    }
  });

  // useFrame(() => {
  //   if (playerRef.current) {
  //     const worldPosition = new THREE.Vector3();
  //     const currPosition = playerRef.current.getWorldPosition(worldPosition);

  //     playerPositionRef = currPosition;
  //   }
  // });

  // Function to handle attack detection
  function performAttackDetection() {
    if (!playerPositionRef) return;

    // const forwardDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(
    //   position.quaternion
    // );
    const forwardDirection = new THREE.Vector3(0, 0, -1);
    forwardDirection.applyQuaternion(playerRef.current.quaternion);
    const attackRange = 5; // Example attack range

    console.log({ enemies });
    enemies.forEach((enemy) => {
      console.log(enemy);
      if (enemy.ref.current && enemy.ref.current.children) {
        enemy.ref.current.children.forEach((child) => {
          // const enemyPosition = child.position;
          const toEnemyDirection = new THREE.Vector3()
            .subVectors(enemyPositionRef, playerPositionRef)
            .normalize();
          const distance = enemyPositionRef.distanceTo(playerPositionRef);
          const angle = forwardDirection.angleTo(toEnemyDirection);

          if (distance <= attackRange && angle <= Math.PI / 2) {
            console.log(`Enemy hit at distance ${distance}`, enemyPositionRef);
            // Apply damage
            attackEnemy(enemy.ref, 3); // Assuming you still target the group for applying damage
          }
        });
      }
    });
  }

  return <primitive ref={playerRef} object={scene} position={[0, -0.9, 0]} />;
}
