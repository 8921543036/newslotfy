import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SeminarHall.css";
import hallImg from "./hall.jpg";

export default function SeminarHall() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(10);
  const [showDetails, setShowDetails] = useState(false);

  const dates = [
    { day: 10, label: "Tue" },
    { day: 11, label: "Wed" },
    { day: 12, label: "Thu" },
    { day: 13, label: "Fri" },
    { day: 14, label: "Sat" },
  ];

  const slots = [
    { time: "9:30 - 10:30", status: "pending" },
    { time: "10:30 - 11:30", status: "pending" },
    { time: "11:30 - 12:30", status: "pending" },
    { time: "12:30 - 1:30", status: "accepted" },
    { time: "1:30 - 2:30", status: "rejected" },
    { time: "2:30 - 3:30", status: "pending" },
    { time: "3:30 - 4:30", status: "pending" },
    { time: "4:30 - 5:30", status: "pending" },
     { time: "11:30 - 12:30", status: "pending" },
    { time: "12:30 - 1:30", status: "accepted" },
    { time: "1:30 - 2:30", status: "rejected" },
    { time: "2:30 - 3:30", status: "pending" },
    
  ];

  return (
    <>
      <div className="seminar-container">

        {/* TOP SECTION */}
        <div className="top-section">
          <img src={hallImg} alt="Seminar Hall" className="hall-image" />

          <div className="hall-info">
            <h1>SEMINAR HALL</h1>
            <p className="subtitle">Seminar | Conference | Workshop</p>
            <button
              className="details-btn"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
          </div>
        </div>

        {/* DATE STRIP */}
        <div className="date-strip">
          <div className="month-box">
            <span>Jan</span>
          </div>

          <div className="date-list">
            {dates.map((d, index) => (
              <div
                key={index}
                className={`date-item ${
                  selectedDate === d.day ? "active-date" : ""
                }`}
                onClick={() => setSelectedDate(d.day)}
              >
                <h3>{d.day}</h3>
                <p>{d.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATUS LEGEND */}
        <div className="legend">
          <div><span className="dot pending"></span> Pending</div>
          <div><span className="dot accepted"></span> Accepted</div>
          <div><span className="dot rejected"></span> Rejected</div>
        </div>

        {/* SLOT GRID */}
        <div className="slots">
          {slots.map((slot, index) => (
            <div
              key={index}
              className={`slot-card ${slot.status}`}
              onClick={() => {
                if (slot.status !== "accepted") {
                  navigate("/CreateEvent", {
                    state: {
                      time: slot.time,
                      date: selectedDate,
                      venue: "Seminar Hall",
                    },
                  });
                }
              }}
            >
              <p>{slot.time}</p>
              <small>{slot.status}</small>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL POPUP ================= */}
      {showDetails && (
        <div
          className="modal-overlay"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Seminar Hall Details</h2>

            <p><strong>Capacity:</strong> 150 People</p>
            <p><strong>Facilities:</strong> Projector, Sound System, AC</p>
            <p><strong>Suitable For:</strong> Seminars, Conferences, Workshops</p>
            <p><strong>Location:</strong> Main Academic Block</p>

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