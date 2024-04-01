import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Enemy() {
  const { scene, animations } = useGLTF(
    "/src/assets/enemies/Skeleton_Minion.glb"
  );
  return (
    <RigidBody>
      <primitive object={scene} position={[-4, 1, -4]} />
    </RigidBody>
  );
}
