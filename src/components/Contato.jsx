import React, { useState } from "react";
import "../Styles/Contato.css";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const user = { name, email, subject, message };
    console.log(user);
  };

  return (
    <div className="contact container">
      <h1>Contato</h1>
      <form onSubmit={handlesubmit}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome ..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu Email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Assunto</label>
        <input
          type="text"
          placeholder="Sobre o que deseja falar"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label>Mensagem</label>
        <textarea
          cols="20"
          rows="7"
          placeholder="Digite aqui sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
