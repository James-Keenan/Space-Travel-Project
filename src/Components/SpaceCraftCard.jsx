import React from "react";
import "./SpacecraftCard.css";
import SpaceTravelApi from "../services/SpaceTravelApi.js";
import { Link } from "react-router-dom";

function SpacecraftCard({ spacecraft, onDestroy }) {
  const handleDestroy = async () => {
    const response = await SpaceTravelApi.destroySpacecraftById({
      id: spacecraft.id,
    });
    if (!response.isError) {
      onDestroy(spacecraft.id); // Tell parent to refresh
    }
  };

  return (
    <div className="spacecraft-card">
      <Link
        to={`/spacecrafts/${spacecraft.id}`}
        className="spacecraft-image-container"
      >
        {spacecraft.pictureUrl ? (
          <img
            src={spacecraft.pictureUrl}
            alt={spacecraft.name}
            className="spacecraft-image"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.classList.remove(
                "spacecraft-placeholder-hidden"
              );
            }}
          />
        ) : null}
        <div
          className={`spacecraft-placeholder ${
            spacecraft.pictureUrl ? "spacecraft-placeholder-hidden" : ""
          }`}
        >
          🚀
        </div>
      </Link>

      <div className="spacecraft-info">
        <div className="spacecraft-details">
          <Link to={`/spacecrafts/${spacecraft.id}`}>
            <h3>Name: {spacecraft.name}</h3>
          </Link>
          <p>Capacity: {spacecraft.capacity}</p>
        </div>
      </div>
      <button className="destroy-button" onClick={handleDestroy}>
        💥 Destroy
      </button>
    </div>
  );
}

export default SpacecraftCard;
