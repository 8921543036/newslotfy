import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import hallImg from "./hall.jpg";
import avtImg from "./avt.jpg";
import iedcImg from "./iedc.jpeg";
import cslabimg from "./cslab.jpg";
import calabimg from "./calab.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const venues = [
    {
      title: "SEMINAR HALL",
      description:
        "Perfect for seminars, conferences and workshops with comfortable seating and projector facilities.",
      image: hallImg,
    },
    {
      title: "AVT",
      description:
        "Spacious auditorium suitable for large events, cultural programs and official functions.",
      image: avtImg,
    },
    {
      title: "IEDC ROOM",
      description:
        "Ideal for startup meetings, hackathons and technical discussions.",
      image: iedcImg,
    },
    {
      title: "CS LAB",
      description:
        "Perfect for technical lab sessions and coding workshops.",
      image: cslabimg,
    },
    {
      title: "CA LAB",
      description:
        "Perfect for practical lab sessions and academic workshops.",
      image: calabimg,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % venues.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [venues.length]);

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

          <p className="description">
            {venues[activeIndex].description}
          </p>

          <button
            className="book-btn"
            onClick={() =>
              navigate("/book-venue", {
                state: venues[activeIndex],
              })
            }
          >
            Book Now
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

      {/* FOOTER */}
      <footer className="district-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>Slotify</h1>
            <p>BY EVENT SYSTEM</p>
          </div>

          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
            <a href="#">List your events</a>
          </div>

          <div className="footer-qr">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=slotify-app"
              alt="QR Code"
            />
            <p>Scan to download the app</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            By accessing this page, you confirm that you have read,
            understood, and agreed to our Terms of Service and Privacy
            Policy. All rights reserved © 2026 Slotify.
          </p>

          <div className="social-icons">
            <span>WhatsApp</span>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>
      </footer>
    </>
  );
}