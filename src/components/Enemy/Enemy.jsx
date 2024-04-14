import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useGame } from "../../GameContext";
import * as THREE from "three";

export default function Enemy({ playerPositionRef, enemyPositionRef }) {
  const { scene, animations } = useGLTF(
    "/src/assets/enemies/Skeleton_Minion.glb"
  );
  const { actions } = useAnimations(animations, scene);
  const enemyRef = useRef();
  const rigidBodyRef = useRef();
  const { addEnemy, attackPlayer, health } = useGame();
  const enemyId = useRef(Math.random()).current;
  const chaseDistanceThreshold = 8;
  const stableSpeed = 0.2;
  const [lastAttackTime, setLastAttackTime] = useState(0);
  const [isAttacking, setIsAttacking] = useState(false);

  useEffect(() => {
    const enemyObject = { ref: enemyRef, health, id: enemyId };
    console.log({ enemyObject });
    addEnemy(enemyObject);
  }, []);

  useEffect(() => {
    if (isAttacking) {
      const timeoutId = setTimeout(() => {
        actions.Unarmed_Melee_Attack_Punch_B.stop();
        setIsAttacking(false);
      }, 800); // Stop the attack after 1 second
      return () => clearTimeout(timeoutId);
    }
  }, [isAttacking, actions.Unarmed_Melee_Attack_Punch_B]);

  useFrame(({ clock }) => {
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
    const direction = new THREE.Vector3()
      .subVectors(playerPositionRef.current, enemyPositionRef.current)
      .normalize();
    const currentTime = clock.getElapsedTime();

    if (distanceToPlayer < chaseDistanceThreshold) {
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

      if (distanceToPlayer < 1.2 && currentTime - lastAttackTime > 2) {
        if (!isAttacking) {
          actions.Unarmed_Melee_Attack_Punch_B.play();
          setIsAttacking(true);
          attackPlayer();
          setLastAttackTime(currentTime);
        }
      }
    } else {
      actions.Idle.play();
      actions.Walking_A.stop();
      if (rigidBodyRef.current.velocity) {
        rigidBodyRef.current.velocity.set(0, 0, 0);
      }
    }
  });

  return health > 0 ? (
    <group>
      <RigidBody
        type="dynamic"
        position={[6, 1, 5]}
        ref={rigidBodyRef}
        linearDamping={5}
        angularDamping={1}
        mass={1}
        canSleep={false}
        rotation={[0, 3, 0]}
      >
        <primitive position={[0, 0.4, 0]} ref={enemyRef} object={scene} />
      </RigidBody>
    </group>
  ) : null;
}
