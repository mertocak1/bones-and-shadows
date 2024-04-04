import React from "react";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import Level1 from "./components/Map/Map";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { GameProvider } from "./GameContext";

function App() {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "attack", keys: ["Space"] },
  ];
  return (
    <GameProvider>
      <KeyboardControls map={keyboardMap}>
        <Canvas>
          <Physics timeStep="vary">
            <Level1 />
          </Physics>
          <OrbitControls />
        </Canvas>
      </KeyboardControls>
    </GameProvider>
  );
}

export default App;
