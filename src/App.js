import "./styles.css";
import Header from "../src/components/Header.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Sobre from "../src/components/Sobre.jsx";
import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Header");
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page == "Header" && <Header />}
      {page == "Sobre" && <Sobre />}
      {page == "Portfolio" && <Portfolio />}
      {page == "Skills" && <Skills />}
      {page == "Services" && <Services />}
      {page == "Contact US" && <ContactUS />}
    </>
  );
}
