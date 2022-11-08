import React from "react";
import ServicosData from "../Settings/ServicosData.jsx";
import "../Styles/Servicos.css";

export default function Servicos() {
  return (
    <div className="services container">
      <h1>Services</h1>
      <div className="services">
        {ServicosData.map((item, index) => (
          <div key={index} className="service">
            <p> {item} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
