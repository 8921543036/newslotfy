import "./SeminarHall.css";

export default function SeminarHall() {
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
    "17:00 - 18:00",
  ];

  return (
    <div className="booking-container">
      <h1>SEMINAR HALL</h1>
      <p className="subtitle">Seminar | Conference | Workshop</p>

      <h3>Find a Slot</h3>
      <p className="subtext">Select an available time slot</p>

      <div className="slots">
        {slots.map((slot, index) => (
          <button key={index} className="slot-btn">
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}