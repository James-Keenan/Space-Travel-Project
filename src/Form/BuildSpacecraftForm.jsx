import "./BuildSpacecraftForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi.js";

function BuildSpacecraft() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await SpaceTravelApi.buildSpacecraft({
      name,
      capacity: Number(capacity),
      description,
      pictureUrl: pictureUrl || undefined,
    });

    if (!response.isError) {
      // Navigate back to spacecrafts page
      navigate("/spacecrafts");
    } else {
      alert("Error building spacecraft!");
    }
  };

  return (
    <div className="build-spacecraft-form">
      <Link to="/spacecrafts">
        <button className="back-button">Back</button>
      </Link>
      <h2>Build a Spacecraft</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter spacecraft name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Capacity:
          <input
            type="number"
            placeholder="Enter capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Picture URL:
          <input
            type="text"
            placeholder="Enter image URL (optional)"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          />
        </label>
        <button type="submit">Build Spacecraft</button>
      </form>
    </div>
  );
}

export default BuildSpacecraft;
