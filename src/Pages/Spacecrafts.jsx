import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BuildSpacecraft from "../Form/BuildSpacecraftForm.jsx";
import SpacecraftCard from "../Components/SpaceCraftCard.jsx";
import Header from "../Header/Header.jsx";
import SpaceTravelApi from "../services/SpaceTravelApi.js";
import "./Spacecrafts.css";
import PlanetCard from "../Components/PlanetCard.jsx";

function Spacecrafts() {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpacecrafts = async () => {
      setLoading(true);
      const response = await SpaceTravelApi.getSpacecrafts();

      if (!response.isError) {
        setSpacecrafts(response.data);
      }
      setLoading(false);
    };

    fetchSpacecrafts();
  }, []);

  const handleDestroy = async (spacecraftId) => {
    // Refetch spacecrafts after deletion
    const response = await SpaceTravelApi.getSpacecrafts();
    if (!response.isError) {
      setSpacecrafts(response.data);
    }
  };

  if (loading) {
    return (
      <div>
        <Header />
        <h1>Spacecrafts</h1>
        <p>Loading spacecrafts...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Link to="/build-spacecraft">
        <button className="button">Build Spacecraft</button>
      </Link>
      <div>
        {spacecrafts.map((spacecraft) => (
          <SpacecraftCard
            key={spacecraft.id}
            spacecraft={spacecraft}
            onDestroy={handleDestroy}
          />
        ))}
      </div>
    </div>
  );
}

export default Spacecrafts;
