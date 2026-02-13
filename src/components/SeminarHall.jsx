import { useState } from "react";
import "./SeminarHall.css";

export default function SeminarHall() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const slots = [
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
  ];

  return (
    <div className="booking-container">
      
      {!selectedSlot ? (
        <>
          <h1>SEMINAR HALL</h1>
          <p className="subtitle">Seminar | Conference | Workshop</p>

          <h3>Find a Slot</h3>
          <p className="subtext">Select an available time slot</p>

          <div className="slots">
            {slots.map((slot, index) => (
              <button
                key={index}
                className="slot-btn"
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>Book Slot</h2>
          <p><strong>Selected Time:</strong> {selectedSlot}</p>

          <input type="text" placeholder="Event Name" className="input-field" />
          <input type="text" placeholder="Club Name" className="input-field" />
          <textarea placeholder="Description" className="input-field"></textarea>

          <button className="submit-btn">Submit</button>
        </>
      )}
      
    </div>
  );
}