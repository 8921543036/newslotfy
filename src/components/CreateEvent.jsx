import { useLocation } from "react-router-dom";
import "./CreateEvent.css";

export default function CreateEvent() {
  const location = useLocation();
  const selectedTime = location.state?.time;

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

      <div className="form-section">
        <label>Event Name</label>
        <input type="text" placeholder="Enter event name" />

        <label>Club Name</label>
        <input type="text" placeholder="Enter club name" />

        <label>Description</label>
        <textarea placeholder="Enter event description"></textarea>

        <button className="submit-btn">Submit</button>
      </div>

    </div>
  );
}