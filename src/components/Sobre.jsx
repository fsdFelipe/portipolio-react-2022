import React from "react";
import AboutStats from "../Settings/SobreStats.jsx";
import Settings from "../Settings/Settings.jsx";
import "../Styles/Sobre.css";

export default function Sobre({ page, setPage }) {
  return (
    <div className="about container">
      <h2>About Me</h2>
      <div className="profile">
        <img
          src={Settings.profile_photo}
          alt="profile_photo"
          width="90px"
          height="90px"
        />
        <div className="info">
          <p> Name : {Settings.name}</p>
          <p> Age : {Settings.Age}</p>
          <p> Birthday : {Settings.Birthday}</p>
          <p> Country : {Settings.Country}</p>
          <p>
            Email : <a href={`mailto:${Settings.Email}`}>{Settings.Email}</a>
          </p>
        </div>
      </div>
      <div className="stats">
        {AboutStats.map((item, index) => (
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
