import React from "react";
import SobreStats from "../Settings/SobreStats.jsx";
import Settings from "../Settings/Settings.jsx";
import "../Styles/Sobre.css";

export default function Sobre() {
  return (
    <div className="about container">
      <h2>Sobre</h2>
      <div className="profile">
        <img
          src={Settings.profile_photo}
          alt="profile_photo"
          width="90px"
          height="90px"
        />
        <div className="info">
          <p> Nome : {Settings.name}</p>
          <p> Idade : {Settings.Age}</p>
          <p> Data de Nascimento : {Settings.Birthday}</p>
          <p> Pais : {Settings.Country}</p>
          <p>
            Email : <a href={`mailto:${Settings.Email}`}>{Settings.Email}</a>
          </p>
        </div>
      </div>
      <div className="stats">
        {SobreStats.map((item, index) => (
          <div className="card" key={index}>
            <i>{item.icon} </i>
            <h3>{item.title}</h3>
            <p> {item.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
