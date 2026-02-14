import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CreateEvent.css";

export default function CreateEvent() {
  const location = useLocation();
  const selectedTime = location.state?.time || "Select a time";

  // State for form inputs
  const [eventName, setEventName] = useState("");
  const [clubName, setClubName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare event data
    const eventData = {
      eventName,
      clubName,
      description,
      time: selectedTime,
      date: "Mon 26 Jun", // You can make this dynamic later
      status: "Pending"
    };

    try {
      const response = await fetch("http://localhost:5000/create-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const result = await response.json();
      console.log("Event created successfully:", result);
      alert("Event created successfully!");
      
      // Optional: reset form
      setEventName("");
      setClubName("");
      setDescription("");

    } catch (error) {
      console.error("Error:", error);
      alert("Error creating event");
    }
  };

  return (
    <div className="create-container">
      <div className="selected-info">
        <div>
          <p className="event-date">Event Date</p>
          <h3>Mon 26 Jun</h3>
        </div>

        <div className="selected-slot">
          <p>{selectedTime}</p>
          <span>Pending</span>
        </div>
      </div>

      <form className="form-section" onSubmit={handleSubmit}>
        <label>Event Name</label>
        <input
          type="text"
          placeholder="Enter event name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />

        <label>Club Name</label>
        <input
          type="text"
          placeholder="Enter club name"
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          placeholder="Enter event description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}