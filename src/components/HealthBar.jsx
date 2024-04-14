import React from "react";
import "./HealthBar.css";
import enemyImage from "../assets/profilePic/enemypp.png";
import playerImage from "../assets/profilePic/barbarpp.png";

export default function HealthBar({ currentHealth, maxHealth, title }) {
  const healthPercentage = (currentHealth / maxHealth) * 100;

  let barColor = "#4CAF50"; // Green
  if (healthPercentage < 50) {
    barColor = "#FFEB3B"; // Yellow
  }
  if (healthPercentage < 25) {
    barColor = "#F44336"; // Red
  }

  const imageUrl = title === "Player" ? playerImage : enemyImage;

  return (
    <div
      className="health-bar-container"
      style={{
        top: title === "Player" ? "auto" : "60px",
        bottom: title === "Player" ? "60px" : "auto",
        left: title === "Player" ? "10px" : "auto",
        right: title === "Player" ? "auto" : "30px",
        flexDirection: title === "Player" ? "row" : "row-reverse",
      }}
    >
      <img src={imageUrl} alt={`${title} Icon`} className="health-bar-image" />
      <div className="health-bar-background">
        <div
          className="health-bar-fill"
          style={{ width: `${healthPercentage}%`, backgroundColor: barColor }}
        />
      </div>
      <div className="health-bar-text">{title}</div>
      <div className="health-bar-number">
        {currentHealth} / {maxHealth}
      </div>
    </div>
  );
}
