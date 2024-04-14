import React from "react";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import Level1 from "./components/Map/Map";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { GameProvider } from "./GameContext";
import { useGame } from "./GameContext";
import HealthBar from "./components/HealthBar";

function HealthBarWithGame({ title }) {
  const { health, playerHealth } = useGame();
  return (
    <HealthBar
      currentHealth={title === "Player" ? playerHealth : health}
      maxHealth={title === "Player" ? 100 : 60}
      title={title}
    />
  );
}

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
        <HealthBarWithGame title={"Minion Skeleton"} />
        <HealthBarWithGame title={"Player"} />

        <Canvas>
          <color attach="background" args={["#242424"]} />
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
