// import React, { useRef, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import { useGame } from "../../GameContext";
import { RigidBody } from "@react-three/rapier";

// export default function Enemy() {
//   const { scene } = useGLTF("/src/assets/enemies/Skeleton_Minion.glb");
//   const enemyRef = useRef();
//   const { addEnemy, removeEnemy } = useGame();

//   useEffect(() => {
//     addEnemy(enemyRef, 16);

//     return () => {
//       removeEnemy(enemyRef);
//     };
//   }, [addEnemy, removeEnemy]);

//   return (
//     <group ref={enemyRef}>
//       <RigidBody>
//         <primitive object={scene} position={[-4, 1, -4]} />
//       </RigidBody>
//     </group>
//   );
// }

// import React, { useRef, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import { useGame } from "../../GameContext";
// import * as THREE from "three";

// // Assume playerPosition is passed as a prop to the Enemy component
// export default function Enemy({ playerPosition }) {
//   const { scene } = useGLTF("/src/assets/enemies/Skeleton_Minion.glb");
//   const enemyRef = useRef();
//   const { addEnemy, removeEnemy } = useGame();

//   // Speed at which the enemy moves towards the player
//   const speed = 0.05;

//   useFrame(() => {
//     if (enemyRef.current && playerPosition) {
//       // Compute the direction from the enemy to the player
//       const direction = new THREE.Vector3()
//         .subVectors(playerPosition, enemyRef.current.position)
//         .normalize();

//       // Move the enemy towards the player
//       enemyRef.current.position.add(direction.multiplyScalar(speed));
//     }
//   });

//   useEffect(() => {
//     addEnemy(enemyRef, 16); // Assuming initial health is 16

//     return () => {
//       removeEnemy(enemyRef);
//     };
//   }, [addEnemy, removeEnemy]);

//   return (
//     <group ref={enemyRef}>
//       <RigidBody>
//         <primitive object={scene} position={[-4, 1, -4]} />
//       </RigidBody>
//     </group>
//   );
// }

// import React, { useRef, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import { useGame } from "../../GameContext";
// import * as THREE from "three";

// export default function Enemy({ playerPosition }) {
//   const { scene } = useGLTF("/src/assets/enemies/Skeleton_Minion.glb");
//   const enemyRef = useRef();
//   const { addEnemy, removeEnemy } = useGame();

//   // Speed at which the enemy moves towards the player
//   const speed = 0.05;

//   useFrame(() => {
//     console.log({ playerPosition });
//     if (enemyRef.current && playerPosition) {
//       // Compute the world position of the enemy
//       const enemyWorldPosition = new THREE.Vector3();
//       enemyRef.current.getWorldPosition(enemyWorldPosition);

//       console.log({ enemyWorldPosition });

//       // Compute the direction from the enemy to the player, using the player's world position
//       if (playerPosition - enemyWorldPosition < 10) {
//         const direction = new THREE.Vector3()
//           .subVectors(playerPosition, enemyWorldPosition) // Ensure playerPosition is also a world position
//           .normalize();

//         // Move the enemy towards the player
//         enemyRef.current.position.add(direction.multiplyScalar(speed));
//         console.log("asd");
//       }
//     }
//   });

//   useEffect(() => {
//     addEnemy(enemyRef, 16); // Assuming initial health is 16

//     return () => {
//       removeEnemy(enemyRef);
//     };
//   }, [addEnemy, removeEnemy]);

//   return <primitive ref={enemyRef} object={scene} position={[-4, 1, -4]} />;
// }

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useGame } from "../../GameContext";
import * as THREE from "three";

export default function Enemy({ playerPositionRef, enemyPositionRef }) {
  const { scene } = useGLTF("/src/assets/enemies/Skeleton_Minion.glb");
  const enemyRef = useRef();
  const { addEnemy, removeEnemy } = useGame();
  const enemyId = useRef(Math.random()).current;
  const speed = 0.03;
  const chaseDistanceThreshold = 5;

  useEffect(() => {
    const enemyObject = { ref: enemyRef, health: 16, id: enemyId };
    addEnemy(enemyObject);

    return () => removeEnemy(enemyObject);
  }, [addEnemy, removeEnemy, enemyId]);

  useFrame(() => {
    if (enemyRef.current && playerPositionRef.current) {
      const enemyWorldPosition = new THREE.Vector3();
      // Update the enemy's world position
      enemyRef.current.getWorldPosition(enemyWorldPosition);

      // Use playerPositionRef.current which has been updated in the Player component
      const distanceToPlayer = enemyWorldPosition.distanceTo(
        playerPositionRef.current
      );
      if (distanceToPlayer < chaseDistanceThreshold) {
        const direction = new THREE.Vector3()
          .subVectors(playerPositionRef.current, enemyWorldPosition)
          .normalize();
        enemyRef.current.position.add(direction.multiplyScalar(speed));
      }
    }
  });

  return (
    <group>
      <primitive ref={enemyRef} object={scene} position={[-4, 1, -4]} />
    </group>
  );
}
