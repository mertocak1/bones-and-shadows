import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";
import { useGame } from "../../GameContext";
import * as THREE from "three";

export default function Enemy({ playerPositionRef, enemyPositionRef }) {
  const { scene, animations } = useGLTF(
    "/src/assets/enemies/Skeleton_Minion.glb"
  );
  const { actions } = useAnimations(animations, scene);
  const enemyRef = useRef();
  const rigidBodyRef = useRef();
  const { addEnemy, removeEnemy } = useGame();
  const enemyId = useRef(Math.random()).current;
  const chaseDistanceThreshold = 8;
  const stableSpeed = 0.2; // Constant speed for the enemy

  useEffect(() => {
    const enemyObject = { ref: enemyRef, health: 16, id: enemyId };
    addEnemy(enemyObject);
    return () => removeEnemy(enemyObject);
  }, [addEnemy, removeEnemy, enemyId]);

  useFrame(() => {
    if (
      !enemyRef.current ||
      !playerPositionRef.current ||
      !enemyPositionRef.current ||
      !rigidBodyRef.current
    ) {
      console.error("Reference missing, skipping frame.");
      return;
    }

    enemyRef.current.getWorldPosition(enemyPositionRef.current);

    if (
      isNaN(enemyPositionRef.current.x) ||
      isNaN(enemyPositionRef.current.y) ||
      isNaN(enemyPositionRef.current.z)
    ) {
      console.error("NaN position detected, resetting to default.");
      enemyRef.current.position.set(-4, 1, -4);
      return;
    }

    const distanceToPlayer = enemyPositionRef.current.distanceTo(
      playerPositionRef.current
    );

    if (distanceToPlayer < chaseDistanceThreshold && distanceToPlayer > 0.1) {
      const direction = new THREE.Vector3()
        .subVectors(playerPositionRef.current, enemyPositionRef.current)
        .normalize();
      actions.Walking_A.play();
      actions.Idle.stop();

      const angle = Math.atan2(direction.x, direction.z);
      const quaternion = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        angle
      );
      rigidBodyRef.current.setRotation(quaternion);

      const forward = new THREE.Vector3(0, 0, -1);
      forward.applyQuaternion(quaternion);
      forward.multiplyScalar(stableSpeed);

      rigidBodyRef.current.applyImpulse({
        x: forward.x,
        y: forward.y,
        z: forward.z,
      });
    } else {
      rigidBodyRef.current.addForce({ x: 0, y: 0, z: 0 });
      actions.Idle.play();
      actions.Walking_A.stop();
    }
  });

  return (
    <group>
      <RigidBody
        type="dynamic"
        position={[6, 1, 5]}
        ref={rigidBodyRef}
        colliders={false}
        linearDamping={5}
        mass={1}
        canSleep={false}
        lockTranslationY={true} // This locks the y-axis translation
      >
        <primitive position={[0, 0.4, 0]} ref={enemyRef} object={scene} />
        <CapsuleCollider args={[0.4, 0.5]} position={[0, 1.28, 0]} />
      </RigidBody>
    </group>
  );
}
