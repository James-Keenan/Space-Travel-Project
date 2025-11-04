import { Link } from "react-router-dom";
import React from "react";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi.js";
import PlanetCard from "../Components/PlanetCard.jsx";

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpacecraftId, setSelectedSpacecraftId] = useState(null);
  const [dispatching, setDispatching] = useState(false);

  const handleSpacecraftSelect = (spacecraftId) => {
    if (selectedSpacecraftId === spacecraftId) {
      setSelectedSpacecraftId(null);
    } else {
      setSelectedSpacecraftId(spacecraftId);
    }
  };

  const handlePlanetClick = async (planetId) => {
    if (!selectedSpacecraftId) {
      return;
    }

    setDispatching(true);

    const response = await SpaceTravelApi.sendSpacecraftToPlanet({
      spacecraftId: selectedSpacecraftId,
      targetPlanetId: planetId,
    });

    if (!response.isError) {
      const spacecraftsResponse = await SpaceTravelApi.getSpacecrafts();
      if (!spacecraftsResponse.isError) {
        setSpacecrafts(spacecraftsResponse.data);
      }
      setSelectedSpacecraftId(null);
    }

    setDispatching(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const planetsResponse = await SpaceTravelApi.getPlanets();
      const spacecraftsResponse = await SpaceTravelApi.getSpacecrafts();

      if (!planetsResponse.isError) {
        setPlanets(planetsResponse.data);
      }
      if (!spacecraftsResponse.isError) {
        setSpacecrafts(spacecraftsResponse.data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <p>Loading Planets...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1>Planets</h1>
      {dispatching && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "30px 60px",
            borderRadius: "10px",
            border: "3px solid var(--primary-color)",
            zIndex: 1000,
            fontSize: "24px",
            color: "var(--primary-color)",
            fontWeight: "bold",
          }}
        >
          🚀 On its way...
        </div>
      )}
      <div>
        {planets.map((planet) => {
          const spacecraftsOnPlanet = spacecrafts.filter(
            (spacecraft) => spacecraft.currentLocation === planet.id
          );
          return (
            <PlanetCard
              key={planet.id}
              planet={planet}
              spacecrafts={spacecraftsOnPlanet}
              selectedSpacecraftId={selectedSpacecraftId}
              onSpacecraftSelect={handleSpacecraftSelect}
              onPlanetClick={handlePlanetClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Planets;
