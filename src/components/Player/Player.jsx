import { useRef } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { useThree, useFrame } from "@react-three/fiber";
import { Raycaster, Vector3 } from "three";

export default function Player() {
  const { camera } = useThree();

  const raycaster = useRef(new Raycaster());
  const attackDirection = useRef(new Vector3());
  const attackRange = 5;
  const playerUrl = "/src/assets/char/Barbarian.glb";

  const { scene, animations } = useGLTF("/src/assets/char/Barbarian.glb");
  const { actions } = useAnimations(animations, scene);
  console.log(actions);

  const [subscribeKeys, getKeys] = useKeyboardControls();
  useFrame(() => {
    const { forward, backward, leftward, rightward, attack } = getKeys();
    if (forward || backward || leftward || rightward) {
      actions.Idle.stop();
      actions.Walking_B.play();
    } else if (attack) {
      actions.Dualwield_Melee_Attack_Chop.play();

      attackDirection.current.copy(camera.getWorldDirection(new Vector3()));

      // Position the raycaster at the player's location, pointing in the attack direction
      raycaster.current.set(camera.position, attackDirection.current);

      // Check for intersections with targetable objects
      const intersects = raycaster.current.intersectObjects(
        scene.children,
        true
      );
      const hitTargets = intersects.filter(
        (intersect) => intersect.distance <= attackRange
      );

      // Process hits
      hitTargets.forEach((hit) => {
        console.log(`Hit: ${hit.object.name}`);
        // Here you can do things like apply damage, trigger animations, etc.
      });
    } else {
      actions.Dualwield_Melee_Attack_Chop.stop();
      actions.Walking_B.stop();
      actions.Idle.play();
    }
  });

  return (
    <Ecctrl
      debug={true}
      animated
      position={[3, 1.3, 3]}
      maxVelLimit={5}
      rayHitForgivness={0.5}
      rayLenght={10.3}
      camInitDis={-10}
    >
      <primitive object={scene} position={[0, -0.9, 0]} />
    </Ecctrl>
  );
}
