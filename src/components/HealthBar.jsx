import React from "react";

export default function HealthBar({ currentHealth, maxHealth, title }) {
  const healthPercentage = (currentHealth / maxHealth) * 100;

  let barColor = "#4CAF50"; // Green
  if (healthPercentage < 50) {
    barColor = "#FFEB3B"; // Yellow
  }
  if (healthPercentage < 25) {
    barColor = "#F44336"; // Red
  }

  return (
    <div className="health-bar-container">
      <div
        className="health-bar"
        style={{ width: `${healthPercentage}%`, backgroundColor: barColor }}
      >
        {title}: {currentHealth} / {maxHealth}
      </div>
    </div>
  );
}
