import React, { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [enemies, setEnemies] = useState([]);

  const addEnemy = (enemyRef, initialHealth = 16) => {
    setEnemies((prev) => [...prev, { ref: enemyRef, health: initialHealth }]);
  };

  const removeEnemy = (enemyRef) => {
    setEnemies((prev) => prev.filter((enemy) => enemy.ref !== enemyRef));
  };

  // Update to handle health reduction and enemy removal
  const attackEnemy = (enemyRef, damage) => {
    console.log(`Attacking an enemy with ${damage} damage.`);
    setEnemies((prev) => {
      const updatedEnemies = prev
        .map((enemy) => {
          if (enemy.ref === enemyRef) {
            const newHealth = Math.max(enemy.health - damage, 0);
            console.log(`Enemy's new health: ${newHealth}`);
            console.log("Current enemies after attack:", updatedEnemies);
            return { ...enemy, health: newHealth };
          }
          return enemy;
        })
        .filter((enemy) => {
          const alive = enemy.health > 0;
          if (!alive) {
            console.log(`Removing enemy due to health ${enemy.health}.`);
          }
          return alive;
        });

      return updatedEnemies;
    });
  };

  return (
    <GameContext.Provider
      value={{ enemies, addEnemy, removeEnemy, attackEnemy }}
    >
      {children}
    </GameContext.Provider>
  );
};
