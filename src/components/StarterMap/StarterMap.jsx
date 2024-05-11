import { useGLTF } from "@react-three/drei";
// import { startingLevel } from "../../assets/map/startingLevel.glb";
import StartingLevel from "../StartingLevel";

function Map1({ position }) {
  // const { scene } = useGLTF(startingLevel);
  return (
    <>
      {/* <primitive object={scene.clone(true)} scale={1} position={position} /> */}
      <StartingLevel />
    </>
  );
}

export default function StarterMap() {
  return <Map1 />;
}
