import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header.jsx";
import SpaceTravelApi from "../services/SpaceTravelApi.js";
import "./SpacecraftInfoPage.css";

function SpacecraftInfoPage() {
  const { id } = useParams();
  const [spacecraft, setSpacecraft] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpacecraft = async () => {
      setLoading(true);
      const response = await SpaceTravelApi.getSpacecraftById({ id });

      if (!response.isError) {
        setSpacecraft(response.data);
      }
      setLoading(false);
    };

    fetchSpacecraft();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Header />
        <h1>Loading spacecraft...</h1>
      </div>
    );
  }

  if (!spacecraft) {
    return (
      <div>
        <Header />
        <h1>Spacecraft not found</h1>
      </div>
    );
  }

  return (
    <div className="spacecraft-info-page">
      <Header />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        {spacecraft.pictureUrl ? (
          <img
            src={spacecraft.pictureUrl}
            alt={spacecraft.name}
            style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
          />
        ) : (
          <div style={{ fontSize: "100px", textAlign: "center" }}>🚀</div>
        )}

        <h1 className="spacecraft-name">{spacecraft.name}</h1>

        <div style={{ marginTop: "20px" }}>
                        <p>
            <strong>Capacity:</strong> {spacecraft.capacity}
            </p>

            <p>
                <strong>Current Location:</strong> Planet{" "}
                {spacecraft.currentLocation}
            </p>
            <p>
                <strong>Description:</strong>{spacecraft.description}
            </p>
        </div>
      </div>
    </div>
  );
}

export default SpacecraftInfoPage;
