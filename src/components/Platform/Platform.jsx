import { useGLTF } from "@react-three/drei";

function Floor({ position }) {
  const { scene } = useGLTF("src/assets/map/floor_tile_large.gltf.glb");
  return (
    <>
      <primitive object={scene.clone(true)} scale={1} position={position} />
    </>
  );
}
export default function Platform() {
  return (
    <>
      {/* Main Platform */}
      <group position={[0, -0.05, 0]}>
        <Floor position={[0, 0, 0]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[0, 0, -4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[4, 0, -4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[-4, 0, -4]} />
        <Floor position={[-4, 0, 0]} />
      </group>
      <group position={[0, -0.05, 12]}>
        <Floor position={[0, 0, 0]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[0, 0, -4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[4, 0, -4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[-4, 0, -4]} />
        <Floor position={[-4, 0, 0]} />
      </group>
      <group position={[12, -0.05, 12]}>
        <Floor position={[0, 0, 0]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[0, 0, -4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[4, 0, -4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[-4, 0, -4]} />
        <Floor position={[-4, 0, 0]} />
      </group>
      <group position={[12, -0.05, 0]}>
        <Floor position={[0, 0, 0]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[0, 0, -4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[4, 0, -4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[-4, 0, -4]} />
        <Floor position={[-4, 0, 0]} />
      </group>
      <group position={[12, -0.05, -12]}>
        <Floor position={[0, 0, 0]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[0, 0, -4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[4, 0, -4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[-4, 0, -4]} />
        <Floor position={[-4, 0, 0]} />
      </group>
      <group position={[0, -0.05, -12]}>
        <Floor position={[0, 0, 0]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[0, 0, -4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[4, 0, -4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[-4, 0, -4]} />
        <Floor position={[-4, 0, 0]} />
      </group>
      {/* <group position={[-12, -0.05, 0]}>
        <Floor position={[0, 0, 0]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[0, 0, -4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[4, 0, -4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[-4, 0, -4]} />
        <Floor position={[-4, 0, 0]} />
      </group>
      <group position={[-12, -0.05, 12]}>
        <Floor position={[0, 0, 0]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[0, 0, -4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[4, 0, -4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[-4, 0, -4]} />
        <Floor position={[-4, 0, 0]} />
      </group>
      <group position={[-12, -0.05, -12]}>
        <Floor position={[0, 0, 0]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[0, 0, -4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[4, 0, -4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[-4, 0, -4]} />
        <Floor position={[-4, 0, 0]} />
      </group> */}
    </>
  );
}
