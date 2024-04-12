import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";
import { useGame } from "../../GameContext";
import * as THREE from "three";

export default function Enemy({ playerPositionRef, enemyPositionRef }) {
  const { scene } = useGLTF("/src/assets/enemies/Skeleton_Minion.glb");
  const enemyRef = useRef();
  const rigidBodyRef = useRef();
  const { addEnemy, removeEnemy } = useGame();
  const enemyId = useRef(Math.random()).current;
  const chaseDistanceThreshold = 5;

  useEffect(() => {
    const enemyObject = { ref: enemyRef, health: 16, id: enemyId };
    addEnemy(enemyObject);
    return () => removeEnemy(enemyObject);
  }, [addEnemy, removeEnemy, enemyId]);

  useFrame(() => {
    if (
      !enemyRef.current ||
      !playerPositionRef.current ||
      !enemyPositionRef.current
    ) {
      console.error("Reference missing, skipping frame.");
      return;
    }

    // Retrieve the current position of the enemy.
    enemyRef.current.getWorldPosition(enemyPositionRef.current);

    // Check if the enemy's current position is valid.
    if (
      isNaN(enemyPositionRef.current.x) ||
      isNaN(enemyPositionRef.current.y) ||
      isNaN(enemyPositionRef.current.z)
    ) {
      console.error("NaN position detected, resetting to default.");
      enemyRef.current.position.set(-4, 1, -4); // Reset to a known good position
      return;
    }

    // Calculate the distance to the player.
    const distanceToPlayer = enemyPositionRef.current.distanceTo(
      playerPositionRef.current
    );

    if (distanceToPlayer < chaseDistanceThreshold && distanceToPlayer > 0.1) {
      // Compute the normalized direction vector from the enemy to the player.
      const direction = new THREE.Vector3()
        .subVectors(playerPositionRef.current, enemyPositionRef.current)
        .normalize();

      // Adjust the force magnitude to make it distance dependent, making the enemy move faster as it gets closer to the player.
      const forceMagnitude = Math.min(
        0.05 * (chaseDistanceThreshold - distanceToPlayer), // Increase force as the enemy gets closer
        0.02 // Set an upper limit to the force to prevent excessive acceleration
      );

      // Apply the calculated force to the enemy.
      const force = direction.multiplyScalar(forceMagnitude);

      if (!force.toArray().some(isNaN) && force.length() < 0.05) {
        // Check for a reasonable force magnitude and apply it.
        rigidBodyRef.current.addForce({
          x: force.x,
          y: force.y,
          z: force.z,
        });
      } else {
        console.error(
          "Computed force is invalid or too large:",
          force.toArray()
        );
      }
    } else if (distanceToPlayer <= 0.1) {
      // Apply minimal force if very close to prevent jittering or other physics issues
      rigidBodyRef.current.addForce({ x: 0, y: 0, z: 0 });
    }
  });

  return (
    <group>
      <RigidBody
        type="dynamic"
        position={[-4, 1, -4]}
        ref={rigidBodyRef}
        colliders={false}
        linearDamping={5}
        mass={1}
        canSleep={false}
        lockRotations
      >
        <primitive position={[0, 0.4, 0]} ref={enemyRef} object={scene} />
        <CapsuleCollider args={[0.4, 0.5]} position={[0, 1.28, 0]} />
      </RigidBody>
    </group>
  );
}
