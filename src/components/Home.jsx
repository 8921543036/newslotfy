import { useNavigate } from "react-router-dom";
import "./Home.css";
import hallImg from "./hall.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Slotify</div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Contact</li>
          <li onClick={() => navigate("/book-venue")} className="nav-btn">
            Book Venue
          </li>
        </ul>

        <div className="nav-icons">
          <span>🔍</span>
          <span>👤</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>SEMINAR HALL</h1>
          <p className="category">Seminar | Conference | Workshop</p>

          <button
            className="book-btn"
            onClick={() => navigate("/book-venue")}
          >
            Book Venue
          </button>

          {/* DOTS */}
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="hero-right">
          <img src={hallImg} alt="Seminar Hall" />
        </div>
      </section>
    </>
  );
}