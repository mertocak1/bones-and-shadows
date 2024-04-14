import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useGame } from "../../GameContext";
import * as THREE from "three";

const playerUrl = "/src/assets/char/barbar.glb";

export default function Player({
  playerPositionRef,
  enemyPositionRef,
  playerRigidBody,
}) {
  const playerRef = useRef();
  const { scene, animations } = useGLTF(playerUrl);
  const { actions } = useAnimations(animations, scene);
  const { attackEnemy } = useGame();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const [isAttacking, setIsAttacking] = useState(false);
  const [lastAttackTime, setLastAttackTime] = useState(0);
  const lastDirection = useRef(new THREE.Vector3(0, 0, 1)); // Default facing direction

  useEffect(() => {
    if (isAttacking) {
      const timeoutId = setTimeout(() => {
        actions["2H_Melee_Attack_Slice"].stop();
        setIsAttacking(false);
      }, 1200); // Stop the attack after 1.2 seconds
      return () => clearTimeout(timeoutId);
    }
  }, [isAttacking, actions["2H_Melee_Attack_Slice"]]);

  useFrame(() => {
    const { forward, backward, leftward, rightward, attack } = getKeys();

    const axesHelperDirection = new THREE.Vector3();
    playerRef.current.getWorldDirection(axesHelperDirection);
    lastDirection.current.copy(axesHelperDirection.normalize());

    if (forward || backward || leftward || rightward) {
      actions.Walking_B.play();
      actions["2H_Melee_Idle"].stop();
    } else {
      actions["2H_Melee_Idle"].play();
      actions.Walking_B.stop();
    }

    if (playerRef.current) {
      playerRef.current.getWorldPosition(playerPositionRef.current);
    }

    if (attack && !isAttacking) {
      const now = Date.now();
      const cooldownPeriod = 2000; // 2 seconds cooldown between attacks
      if (now - lastAttackTime > cooldownPeriod) {
        actions["2H_Melee_Attack_Slice"].play();
        actions.Walking_B.stop();
        setIsAttacking(true);
        setLastAttackTime(now);
        performAttackDetection();
      }
    }
  });

  function performAttackDetection() {
    const attackRange = 2;
    const attackAngle = Math.PI / 3; // 60 degrees attack angle
    const forwardDirection = lastDirection.current;

    const enemyPosition = enemyPositionRef.current;
    const playerPosition = playerPositionRef.current;
    const toEnemyDirection = new THREE.Vector3()
      .subVectors(enemyPosition, playerPosition)
      .normalize();
    const distance = enemyPosition.distanceTo(playerPosition);
    const angle = forwardDirection.angleTo(toEnemyDirection);

    if (distance <= attackRange && angle <= attackAngle) {
      attackEnemy();
    }
  }

  return (
    <>
      <primitive ref={playerRef} object={scene} position={[0, -0.9, 0]} />
    </>
  );
}
