import React, { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [health, setHealth] = useState(60);
  const [enemies, setEnemies] = useState([]);

  console.log({ health });
  const addEnemy = (object) => {
    // Ensure the enemy is added with a unique key or identifier if needed
    console.log("add enemy call");
    setEnemies((prev) => [...prev]);
  };

  // const removeEnemy = (enemyRef) => {
  //   setEnemies((prev) =>
  //     prev.filter((enemy) => enemy.ref.current !== enemyRef.current)
  //   );
  // };

  // // const attackEnemy = (enemyRef, damage) => {
  // //   console.log(
  // //     "Before attack:",
  // //     enemies.map((e) => e.health)
  // //   );

  // //   setEnemies((enemies) =>
  // //     enemies
  // //       .map((enemy) => {
  // //         if (enemy.ref.current === enemyRef.current) {
  // //           const newHealth = enemy.health - damage;
  // //           return {. ...enemy, health: newHealth > 0 ? newHealth : 0 }; // Ensure health doesn't go below 0
  // //         }
  // //         return enemy;
  // //       })
  // //       .filter((enemy) => enemy.health > 0)
  // //   ); // Remove dead enemies

  //   console.log(
  //     "After attack:",
  //     enemies.map((e) => e.health)
  //   );
  // };

  const attackEnemy = () => {
    console.log("attacked");
    if (health > 0) {
      setHealth(health - 1);
    } else {
      console.log("enemy dead");
    }
  };

  return (
    <GameContext.Provider
      // value={{ enemies, addEnemy, removeEnemy, attackEnemy }}
      value={{ attackEnemy, addEnemy, health }}
    >
      {children}
    </GameContext.Provider>
  );
};

// playerRef.current.children[0].position
