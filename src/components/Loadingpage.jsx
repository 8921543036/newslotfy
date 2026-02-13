 import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingPage.css";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 1000); // 3 seconds
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="content">
        <h1 className="logo">
          Find<span>X</span>
        </h1>
        <p className="subtitle">Campus Lost & Found Portal</p>
        <div className="spinner"></div>
      </div>
    </div>
  );}
