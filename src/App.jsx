import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import Level1 from "./components/Map/Map";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { GameProvider } from "./GameContext";
import { useGame } from "./GameContext";
import HealthBar from "./components/HealthBar";
import logo from "./assets/logo/Logo_Bones_And_Shadows.png";

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

const TopTitle = () => {
  return (
    <>
      <img className="logo" src={logo} />
    </>
  );
};

function GameOverBar() {
  const { health, playerHealth } = useGame();
  const [barOpen, setBarOpen] = useState(true);
  const [exploring, setExploring] = useState(false);

  if (exploring) {
    return (
      <div className="play-again-container">
        <button className="button" onClick={() => window.location.reload()}>
          Play Again
        </button>
      </div>
    );
  }

  if (playerHealth <= 0 && barOpen) {
    return (
      <div className="container">
        <div className="message">YOU LOSE.</div>
        <button className="button" onClick={() => window.location.reload()}>
          Play Again
        </button>
      </div>
    );
  } else if (health <= 0 && barOpen) {
    return (
      <div className="container">
        <div className="message">YOU WIN!</div>
        <button className="button" onClick={() => window.location.reload()}>
          Play Again
        </button>
        <button
          className="button"
          onClick={() => {
            setBarOpen(false);
            setExploring(true);
          }}
        >
          Keep Exploring
        </button>
      </div>
    );
  }

  return null;
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
        <HealthBarWithGame
          title={"Minion Skeleton"}
          avatarUrl="./assets/profilePic/barbarpp.png"
        />
        <HealthBarWithGame title={"Player"} />
        <GameOverBar />
        <TopTitle />
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
