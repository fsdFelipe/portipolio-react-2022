import React from "react";
import FooterSocials from "../Settings/FooterSocials";
import "../Styles/Footer.css";

export default function Footer({ page, setPage }) {
  return (
    <div className="footer">
      <div className="left">
        {FooterSocials.map((item, index) => (
          <a href={item.link} key={index} target={"_blank"}>
            {item.icon}
          </a>
        ))}
      </div>
      <div className="middle">
        <h2>Felipe Dias</h2>
      </div>
      <div className="right">
        {["Sobre", "Contato"].map((item, index) => (
          <p key={index} onClick={() => setPage(item)}>
            {" "}
            {item}{" "}
          </p>
        ))}
      </div>
    </div>
  );
}
