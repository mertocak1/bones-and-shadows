import { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Raycaster, Vector3 } from "three";
import { useGame } from "../../GameContext";
import * as THREE from "three";
const playerUrl = "/src/assets/char/Barbarian.glb";

export default function Player({ onAttack }) {
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

  // Function to handle attack detection
  function performAttackDetection() {
    if (!playerRef.current) return; // This check is good.

    const forwardDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(
      playerRef.current.quaternion
    );
    const attackRange = 5; // Example attack range

    enemies.forEach((enemy) => {
      if (!enemy.ref.current) {
        console.warn("Enemy ref is undefined. This enemy will be skipped.");
        return; // Skip this iteration if the enemy's ref is undefined.
      }

      const enemyPosition = enemy.ref.current.position;
      const playerPosition = playerRef.current.position.clone();
      const toEnemyDirection = new THREE.Vector3()
        .subVectors(enemyPosition, playerPosition)
        .normalize();
      const distance = enemyPosition.distanceTo(playerPosition);
      const angle = forwardDirection.angleTo(toEnemyDirection);

      if (distance <= attackRange && angle <= Math.PI / 4) {
        console.log(`Enemy hit at distance ${distance}`, enemy.ref.current);

        // Apply damage
        attackEnemy(enemy.ref, 3); // Your existing logic here

        // Optional: Apply a physical impulse for knock-back effect if your setup supports this
      }
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

  return <primitive object={scene} position={[0, -0.9, 0]} ref={playerRef} />;
}
