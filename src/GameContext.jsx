import React, { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [health, setHealth] = useState(60);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemies, setEnemies] = useState([]);

  console.log({ health });
  const addEnemy = (object) => {
    // Ensure the enemy is added with a unique key or identifier if needed
    console.log("add enemy call");
    setEnemies((prev) => [...prev]);
  };

  const attackEnemy = () => {
    console.log("attacked");
    if (health > 0) {
      setHealth(health - 1);
    } else {
      console.log("enemy dead");
    }
  };

  const attackPlayer = () => {
    console.log("attacked");
    if (playerHealth > 0) {
      setPlayerHealth(playerHealth - 1);
    } else {
      console.log("player dead");
    }
  };

  return (
    <GameContext.Provider
      // value={{ enemies, addEnemy, removeEnemy, attackEnemy }}
      value={{ attackEnemy, addEnemy, health, playerHealth, attackPlayer }}
    >
      {children}
    </GameContext.Provider>
  );
};

// playerRef.current.children[0].position
