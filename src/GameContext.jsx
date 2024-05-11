import React, { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [health, setHealth] = useState(60);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemies, setEnemies] = useState([]);

  const addEnemy = (object) => {
    setEnemies((prev) => [...prev]);
  };

  const attackEnemy = () => {
    if (health > 0) {
      setHealth(health - 9);
    } else {
    }
  };

  const attackPlayer = () => {
    if (playerHealth > 0) {
      setPlayerHealth(playerHealth - 5);
    }
  };

  return (
    <GameContext.Provider
      value={{ attackEnemy, addEnemy, health, playerHealth, attackPlayer }}
    >
      {children}
    </GameContext.Provider>
  );
};

// playerRef.current.children[0].position
