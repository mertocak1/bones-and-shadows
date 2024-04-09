import React, { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [enemies, setEnemies] = useState([]);

  const addEnemy = (enemyRef, initialHealth) => {
    // Ensure the enemy is added with a unique key or identifier if needed
    setEnemies((prev) => [...prev, { ref: enemyRef, health: initialHealth }]);
  };

  const removeEnemy = (enemyRef) => {
    setEnemies((prev) =>
      prev.filter((enemy) => enemy.ref.current !== enemyRef.current)
    );
  };

  const attackEnemy = (enemyRef, damage) => {
    setEnemies((prev) =>
      prev
        .map((enemy) => {
          if (enemy.ref.current === enemyRef.current) {
            const newHealth = enemy.health - damage;
            return { ...enemy, health: newHealth };
          }
          return enemy;
        })
        .filter((enemy) => enemy.health > 0)
    ); // Filter out dead enemies
  };

  return (
    <GameContext.Provider
      value={{ enemies, addEnemy, removeEnemy, attackEnemy }}
    >
      {children}
    </GameContext.Provider>
  );
};

// playerRef.current.children[0].position
