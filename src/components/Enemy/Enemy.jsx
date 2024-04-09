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

export default function Enemy({ playerPosition, position, setPosition }) {
  const { scene } = useGLTF("/src/assets/enemies/Skeleton_Minion.glb");
  const enemyRef = useRef();
  const { addEnemy, removeEnemy } = useGame();

  // Speed at which the enemy moves towards the player
  const speed = 0.05;
  // Distance threshold for enemy to start chasing the player
  const chaseDistanceThreshold = 5;

  useFrame(() => {
    if (enemyRef.current && playerPosition) {
      // Compute the world position of the enemy
      const enemyWorldPosition = new THREE.Vector3();
      const currPosition =
        enemyRef.current.getWorldPosition(enemyWorldPosition);
      setPosition(currPosition);

      // Compute the distance to the player
      const distanceToPlayer = currPosition.distanceTo(playerPosition);

      // Only move the enemy if the player is within the specified distance
      if (distanceToPlayer < chaseDistanceThreshold) {
        // Compute the direction from the enemy to the player
        const direction = new THREE.Vector3()
          .subVectors(playerPosition, currPosition)
          .normalize();

        // Move the enemy towards the player
        enemyRef.current.position.add(direction.multiplyScalar(speed));
      }
    }
  });

  useEffect(() => {
    addEnemy(enemyRef, 16); // Assuming initial health is 16

    return () => {
      removeEnemy(enemyRef);
    };
  }, [addEnemy, removeEnemy]);

  return (
    <group>
      <primitive ref={enemyRef} object={scene} position={[-4, 1, -4]} />
    </group>
  );
}
