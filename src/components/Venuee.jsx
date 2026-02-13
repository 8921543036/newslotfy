import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Venue.css";

export default function Venue() {
  const location = useLocation();
  const venue = location.state;

  const [showDetails, setShowDetails] = useState(false);

  if (!venue) {
    return <h2 style={{ padding: "50px" }}>No Venue Selected</h2>;
  }

  return (
    <>
      <div className="venue-container">
        <div className="top-section">
          <img
            src={venue.image}
            alt={venue.title}
            className="venue-image"
          />

          <div className="venue-info">
            <h1>{venue.title}</h1>
            <p>{venue.description}</p>

            <button
              className="details-btn"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showDetails && (
        <div
          className="modal-overlay"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{venue.title} Details</h2>

            <p><strong>Capacity:</strong> {venue.capacity}</p>
            <p><strong>Facilities:</strong> {venue.facilities}</p>
            <p><strong>Location:</strong> {venue.location}</p>

            <button
              className="close-btn"
              onClick={() => setShowDetails(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}