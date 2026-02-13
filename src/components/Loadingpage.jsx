import { useState } from "react";
import "./SeminarHall.css";
import hallImg from "./hall.jpg";

export default function SeminarHall() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const slots = [
    { time: "10:30 - 11:30", status: "pending" },
    { time: "11:30 - 12:30", status: "accepted" },
    { time: "12:30 - 1:30", status: "rejected" },
    { time: "1:30 - 2:30", status: "pending" },
    { time: "2:30 - 3:30", status: "pending" },
    { time: "3:30 - 4:30", status: "accepted" },
  ];

  return (
    <div className="seminar-container">

      {/* TOP SECTION */}
      <div className="top-section">
        <img src={hallImg} alt="Seminar Hall" className="hall-image" />

        <div className="hall-info">
          <h1>SEMINAR HALL</h1>
          <p className="subtitle">Seminar | Conference | Workshop</p>
          <button className="details-btn">View Details</button>
        </div>
      </div>

      {/* STATUS LEGEND */}
      <div className="legend">
        <span className="dot pending"></span> Pending
        <span className="dot accepted"></span> Accepted
        <span className="dot rejected"></span> Rejected
      </div>

      {/* SLOT SECTION */}
      <div className="slots">
        {slots.map((slot, index) => (
          <div
            key={index}
            className={`slot-card ${slot.status}`}
            onClick={() => setSelectedSlot(slot.time)}
          >
            <p>{slot.time}</p>
            <small>{slot.status}</small>
          </div>
        ))}
      </div>

      {/* BOOK FORM */}
      {selectedSlot && (
        <div className="booking-form">
          <h2>Book Slot</h2>
          <p><strong>Selected:</strong> {selectedSlot}</p>

          <input type="text" placeholder="Event Name" />
          <input type="text" placeholder="Club Name" />
          <textarea placeholder="Description"></textarea>

          <button className="submit-btn">Submit</button>
        </div>
      )}

    </div>
  );
}