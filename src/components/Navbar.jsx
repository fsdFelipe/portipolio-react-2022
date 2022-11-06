import "../Styles/Navbar.css";

export default function Navbar({ page, setPage }) {
  return (
    <div className="navbar">
      <a href="/" className="nav_title hover_line">
        Desenvolvimento web
      </a>
      <div className="links">
        {["Sobre", "Portifolio", "Skills", "Serviços", "Contato"].map(
          (title, index) => (
            <li key={index}>
              <p onClick={() => setPage(title)} className="hover_line">
                {title}
              </p>
            </li>
          )
        )}
      </div>
    </div>
  );
}
