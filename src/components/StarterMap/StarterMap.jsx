import { useGLTF } from "@react-three/drei";

function Map1({ position }) {
  const { scene } = useGLTF("src/assets/map/map1.glb");
  return (
    <>
      <primitive object={scene.clone(true)} scale={1} position={position} />
    </>
  );
}

export default function StarterMap() {
  return <Map1 />;
}
