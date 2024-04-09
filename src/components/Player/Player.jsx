import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useGame } from "../../GameContext";
import * as THREE from "three";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

const playerUrl = "/src/assets/char/Barbarian.glb";

export default function Player({ position, setPosition, enemyPosition }) {
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
      actions.Idle.stop();
    } else {
      actions.Idle.play();
      actions.Walking_B.stop();
    }

    // Attack logic
    if (attack) {
      actions.Dualwield_Melee_Attack_Chop.play();
      // Trigger attack detection logic
      performAttackDetection();
    } else {
      actions.Dualwield_Melee_Attack_Chop.stop();
    }
  });

  useFrame(() => {
    if (playerRef.current) {
      const worldPosition = new THREE.Vector3();
      const currPosition = playerRef.current.getWorldPosition(worldPosition);

      setPosition(currPosition);
    }
  });

  // useFrame(() => {
  //   if (playerRef.current) {
  //     const worldPosition = new THREE.Vector3();
  //     const currPosition = playerRef.current.getWorldPosition(worldPosition);

  //     setPosition(currPosition);
  //   }
  // });

  // Function to handle attack detection
  function performAttackDetection() {
    if (!position) return;

    // const forwardDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(
    //   position.quaternion
    // );
    const forwardDirection = new THREE.Vector3(0, 0, -1);
    forwardDirection.applyQuaternion(playerRef.current.quaternion);
    const attackRange = 5; // Example attack range

    console.log({ enemies });
    enemies.forEach((enemy) => {
      enemy.ref.current.children.forEach((child) => {
        // const enemyPosition = child.position;
        const toEnemyDirection = new THREE.Vector3()
          .subVectors(enemyPosition, position)
          .normalize();
        const distance = enemyPosition.distanceTo(position);
        const angle = forwardDirection.angleTo(toEnemyDirection);

        if (distance <= attackRange && angle <= Math.PI / 2) {
          console.log(`Enemy hit at distance ${distance}`, enemyPosition);
          // Apply damage
          attackEnemy(enemy.ref, 3); // Assuming you still target the group for applying damage
        }
      });
    });
  }

  useEffect(() => {
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const points = [playerRef.current.position, new THREE.Vector3(0, 0, -5)]; // Adjust endpoint based on expected direction and length
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line); // Add line to the scene for visualization
    return () => scene.remove(line); // Cleanup
  }, [scene]);

  return (
    <Ecctrl debug={true} animated position={[0, 3.5, 0]} maxVelLimit={5}>
      <primitive ref={playerRef} object={scene} position={[0, -0.9, 0]} />
    </Ecctrl>
  );
}
