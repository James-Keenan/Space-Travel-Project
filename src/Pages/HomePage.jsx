import { Link } from "react-router-dom";
import React from "react";
import Header from "../Header/Header.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Header />

      <section>
        <h1>🔭 Journey to the Stars: From Neglect to Innovation</h1>
        <p>
          In the not-so-distant future, Earth has become a shadow of its former
          self. Centuries of environmental neglect have pushed humanity to look
          beyond our home planet. Through remarkable technological advancement,
          we have transformed the solar system's planets into habitable
          sanctuaries. Welcome to Space Travel - your command center for
          humanity's greatest evacuation mission.
        </p>
      </section>

      <section>
        <h2>🌌 Your Mission</h2>
        <p>
          As a commander, you hold the future of humanity in your hands.
          Coordinate the evacuation of Earth's remaining population, manage our
          fleet of interplanetary spacecraft, and ensure the safe passage of
          thousands to their new homes among the stars.
        </p>
      </section>

      <section>
        <h2>🏢 Command Center Features: Manage Spacecrafts</h2>
        <p>
          View and manage our entire fleet of spacecraft. Monitor capacity,
          track locations, and oversee the construction of new vessels to meet
          evacuation demands.
        </p>
      </section>

      <section>
        <h3>🖥️ Monitor Planets</h3>
        <p>
          Track population distribution across habitable planets. View real-time
          data on planetary populations and coordinate spacecraft arrivals to
          balance colonization efforts.
        </p>
      </section>

      <section>
        <h3>🏗️ Build New Fleet</h3>
        <p>
          Design and construct new spacecraft to expand our evacuation
          capabilities. Customize specifications including passenger capacity
          and mission parameters.
        </p>
      </section>

      <section>
        <h3>🧠 Coordinate Transfers</h3>
        <p>
          Execute interplanetary transfers by dispatching spacecraft between
          planets. Optimize evacuation routes and manage population
          redistribution across the solar system.
        </p>
      </section>

      <section>
        <h2>🎬 Begin Your Mission</h2>
        <p>
          The future of humanity depends on your leadership. Start by viewing
          available spacecraft or exploring destination planets.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
