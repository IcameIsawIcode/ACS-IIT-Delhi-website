import React from "react";

function Speakers() {
  // Array of speakers with placeholders
  const speakers = [
    { name: "Jesús Jiménez-Barbero", org: "CIC bioGUNE, Spain", img: "https://via.placeholder.com/100" },
    { name: "Kelly Chibale", org: "UCT, South Africa", img: "https://via.placeholder.com/100" },
    { name: "Sun Choi", org: "Ewha Womans University, Korea", img: "https://via.placeholder.com/100" },
    { name: "Justin Gooding", org: "UNSW, Australia", img: "https://via.placeholder.com/100" },
  ];

  return (
    <section id="speakers">
      <h2>Featured Speakers</h2>
      <div className="speakers-list">
        {speakers.map((person, idx) => (
          <div className="speaker-card" key={idx}>
            <img src={person.img} alt={person.name} className="speaker-photo" />
            <div>
              <h4>{person.name}</h4>
              <p>{person.org}</p>
              {/* Interactive: Add a modal, bio, or learn more button if needed */}
              <button className="btn-learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;
