import React from "react";
import "../Styles/Portifolio.css";
import Projetos from "../Settings/Projetos";

export default function Portifolio() {
  return (
    <div className="portfolio container">
      <h1>Projetos</h1>
      <div className="projects">
        {Projetos.map((data, index) => (
          <div className="project" key={index}>
            <img src={data.image} alt={data.name} />
            <h3> {data.name} </h3>
            <a href={data.link} target={"_blank"}>
              Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
