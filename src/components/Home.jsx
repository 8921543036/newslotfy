import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import hallImg from "./hall.jpg";
import avtImg from "./avt.jpg";
import iedcImg from "./iedc.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // All venue data in one array
  const venues = [
    {
      title: "SEMINAR HALL",
      category: "Seminar | Conference | Workshop",
      image: hallImg,
    },
    {
      title: "AVT",
      category: "Auditorium | Events | Programs",
      image: avtImg,
    },
    {
      title: "IEDC ROOM",
      category: "Meetings | Startup Talks | Hackathons",
      image: iedcImg,
    },
  ];

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
          <h1>{venues[activeIndex].title}</h1>
          <p className="category">{venues[activeIndex].category}</p>

          <button
            className="book-btn"
            onClick={() => navigate("/book-venue")}
          >
            Book Venue
          </button>

          {/* DOTS */}
          <div className="dots">
            {venues.map((_, index) => (
              <span
                key={index}
                className={`dot ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <img
            src={venues[activeIndex].image}
            alt={venues[activeIndex].title}
          />
        </div>
      </section>
    </>
  );
}