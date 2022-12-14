import "./styles.css";
import Header from "../src/components/Header.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Sobre from "../src/components/Sobre.jsx";
import Portifolio from "../src/components/Portifolio.jsx";
import Skills from "../src/components/Skills";
import Servicos from "../src/components/Servicos";
import Contato from "../src/components/Contato";
import Footer from "../src/components/Footer";
import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Header");
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page === "Header" && <Header />}
      {page === "Sobre" && <Sobre />}
      {page === "Portifolio" && <Portifolio />}
      {page === "Skills" && <Skills />}
      {page === "Servicos" && <Servicos />}
      {page === "Contato" && <Contato />}
      <Footer page={page} setPage={setPage} />
    </>
  );
}
