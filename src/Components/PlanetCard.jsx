import React from "react";
import "./PlanetCard.css";

function PlanetCard({
  planet,
  spacecrafts,
  selectedSpacecraftId,
  onSpacecraftSelect,
  onPlanetClick,
}) {
  return (
    <div className="planet-card">
      <div className="planet-info">
        <img
          src={planet.pictureUrl}
          alt={planet.name}
          className="planet-image"
          onClick={() => onPlanetClick(planet.id)}
          style={{ cursor: "pointer" }}
        />
        <h3>{planet.name}</h3>
        <h3>{planet.currentPopulation}</h3>
      </div>
      <div className="spacecrafts-on-planet">
        {spacecrafts.map((spacecraft) => (
          <div
            key={spacecraft.id}
            className={`spacecraft-item ${
              selectedSpacecraftId === spacecraft.id ? "selected" : ""
            }`}
            onClick={() => onSpacecraftSelect(spacecraft.id)}
            style={{ cursor: "pointer" }}
          >
            {spacecraft.pictureUrl ? (
              <img
                src={spacecraft.pictureUrl}
                alt={spacecraft.name}
                className="spacecraft-image"
              />
            ) : (
              <div className="spacecraft-placeholder">🚀</div>
            )}
            <span className="spacecraft-name">{spacecraft.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanetCard;
